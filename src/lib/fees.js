export const MINIMUM_PRICE = 1000

export const EMOLUMENT_BRACKETS = [
  { from: 0, to: 6500, rate: 0.0387 },
  { from: 6500, to: 17000, rate: 0.01596 },
  { from: 17000, to: 60000, rate: 0.01064 },
  { from: 60000, to: Infinity, rate: 0.00799 },
]

export const DEPARTMENT_RATES = [
  {
    value: 0.05,
    label: '5,00 %',
    description: 'taux relevé en 2025',
  },
  { value: 0.045, label: '4,50 %', description: 'droit commun ou primo-accédant' },
]

const VAT_RATE = 0.2
const COMMUNE_RATE = 0.012
const ASSESSMENT_FEE_RATE = 0.0237
const NEW_BUILD_RATE = 0.00715
const SECURITY_CONTRIBUTION_RATE = 0.001
const SECURITY_CONTRIBUTION_MINIMUM = 15
const DISBURSEMENTS_ESTIMATE = 1200

export function computeEmolumentBrackets(price) {
  return EMOLUMENT_BRACKETS.filter((bracket) => price > bracket.from).map((bracket) => {
    const base = Math.min(price, bracket.to) - bracket.from
    return { ...bracket, base, amount: base * bracket.rate }
  })
}

function transferTaxLines(price, isNewBuild, departmentRate) {
  if (isNewBuild) {
    return [
      {
        id: 'publicite-fonciere',
        label: 'Taxe de publicité foncière (0,715 %)',
        recipient: 'Département et État',
        amount: price * NEW_BUILD_RATE,
      },
    ]
  }

  const departmentTax = price * departmentRate
  return [
    {
      id: 'taxe-departementale',
      label: `Taxe départementale (${formatRate(departmentRate)})`,
      recipient: 'Département',
      amount: departmentTax,
    },
    {
      id: 'taxe-communale',
      label: 'Taxe communale (1,20 %)',
      recipient: 'Commune',
      amount: price * COMMUNE_RATE,
    },
    {
      id: 'frais-assiette',
      label: 'Frais d’assiette et de recouvrement (2,37 % de la taxe départementale)',
      recipient: 'État',
      amount: departmentTax * ASSESSMENT_FEE_RATE,
    },
  ]
}

function formatRate(rate) {
  return `${(rate * 100).toFixed(2).replace('.', ',')} %`
}

export function computeAcquisitionFees({ price, isNewBuild, departmentRate }) {
  const emoluments = computeEmolumentBrackets(price).reduce((sum, { amount }) => sum + amount, 0)

  const groups = [
    {
      id: 'taxes',
      title: 'Droits et taxes',
      lines: [
        ...transferTaxLines(price, isNewBuild, departmentRate),
        {
          id: 'securite-immobiliere',
          label: 'Contribution de sécurité immobilière (0,10 %, 15 € minimum)',
          recipient: 'État',
          amount: Math.max(SECURITY_CONTRIBUTION_MINIMUM, price * SECURITY_CONTRIBUTION_RATE),
        },
      ],
    },
    {
      id: 'notaire',
      title: 'Rémunération du notaire',
      lines: [
        {
          id: 'emoluments',
          label: 'Émoluments proportionnels (tarif réglementé, hors taxes)',
          recipient: 'Office notarial',
          amount: emoluments,
        },
        {
          id: 'tva',
          label: 'TVA sur les émoluments (20 %)',
          recipient: 'État',
          amount: emoluments * VAT_RATE,
        },
      ],
    },
    {
      id: 'debours',
      title: 'Débours et formalités',
      lines: [
        {
          id: 'forfait-debours',
          label: 'Documents d’urbanisme, état hypothécaire, cadastre (forfait estimé)',
          recipient: 'Administrations et prestataires',
          amount: DISBURSEMENTS_ESTIMATE,
        },
      ],
    },
  ]

  const roundedGroups = groups.map((group) => {
    const lines = group.lines.map((line) => ({ ...line, amount: Math.round(line.amount) }))
    return { ...group, lines, subtotal: lines.reduce((sum, line) => sum + line.amount, 0) }
  })

  const total = roundedGroups.reduce((sum, group) => sum + group.subtotal, 0)

  return { groups: roundedGroups, total, shareOfPrice: total / price }
}
