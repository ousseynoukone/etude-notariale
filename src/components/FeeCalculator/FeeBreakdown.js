import { computeEmolumentBrackets } from '@/lib/fees'
import { formatEuros, formatEurosWithCents, formatPercent } from '@/lib/format'
import styles from './FeeBreakdown.module.css'

function formatBracket({ from, to }) {
  return to === Infinity
    ? `Au-delà de ${formatEuros(from)}`
    : `De ${formatEuros(from)} à ${formatEuros(to)}`
}

function formatBracketRate(rate) {
  return `${(rate * 100).toFixed(3).replace('.', ',')} %`
}

export default function FeeBreakdown({ fees, price }) {
  const brackets = computeEmolumentBrackets(price)
  const emoluments = brackets.reduce((sum, bracket) => sum + bracket.amount, 0)
  const taxes = fees.groups.find((group) => group.id === 'taxes')

  return (
    <div className={styles.breakdown}>
      <div className={styles.summary}>
        <p className={styles.totalLabel}>Frais d’acquisition estimés</p>
        <p className={styles.total} role="status">
          {formatEuros(fees.total)}
        </p>
        <p className={styles.share}>
          soit {formatPercent(fees.shareOfPrice)} du prix, dont {formatEuros(taxes.subtotal)} de
          droits et taxes
        </p>
      </div>

      <table className={styles.table}>
        <caption className={styles.caption}>Détail de l’estimation</caption>
        <thead>
          <tr>
            <th scope="col">Poste</th>
            <th scope="col" className={styles.amount}>
              Montant
            </th>
          </tr>
        </thead>
        {fees.groups.map((group) => (
          <tbody key={group.id}>
            <tr className={styles.groupRow}>
              <th scope="rowgroup" colSpan={2}>
                {group.title}
              </th>
            </tr>
            {group.lines.map((line) => (
              <tr key={line.id}>
                <th scope="row" className={styles.lineLabel}>
                  {line.label}
                  <span className={styles.recipient}>Bénéficiaire : {line.recipient}</span>
                </th>
                <td className={styles.amount}>{formatEuros(line.amount)}</td>
              </tr>
            ))}
            <tr className={styles.subtotalRow}>
              <th scope="row">Sous-total</th>
              <td className={styles.amount}>{formatEuros(group.subtotal)}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr>
            <th scope="row">Total estimé</th>
            <td className={styles.amount}>{formatEuros(fees.total)}</td>
          </tr>
        </tfoot>
      </table>

      <table className={`${styles.table} ${styles.brackets}`}>
        <caption className={styles.caption}>Calcul des émoluments proportionnels</caption>
        <thead>
          <tr>
            <th scope="col">Tranche du prix</th>
            <th scope="col" className={styles.amount}>
              Taux
            </th>
            <th scope="col" className={styles.amount}>
              Émoluments HT
            </th>
          </tr>
        </thead>
        <tbody>
          {brackets.map((bracket) => (
            <tr key={bracket.from}>
              <th scope="row" className={styles.lineLabel}>
                {formatBracket(bracket)}
              </th>
              <td className={styles.amount}>{formatBracketRate(bracket.rate)}</td>
              <td className={styles.amount}>{formatEurosWithCents(bracket.amount)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={2}>
              Total hors taxes
            </th>
            <td className={styles.amount}>{formatEurosWithCents(emoluments)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
