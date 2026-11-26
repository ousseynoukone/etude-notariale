import { photos } from './photos'

export const domains = [
  {
    id: 'immobilier',
    title: 'Immobilier',
    summary: 'Avant-contrat, acte de vente, VEFA, prêt, bail commercial, copropriété.',
    description:
      'Du compromis à la remise des clés, le notaire vérifie la situation du bien, purge les droits de préemption, rédige l’acte de vente et en assure la publicité au service de la publicité foncière.',
    items: [
      'Avant-contrat et acte de vente',
      'Vente en l’état futur d’achèvement',
      'Prêt immobilier, mainlevée d’hypothèque',
      'Bail commercial et professionnel',
      'Règlement de copropriété, servitudes',
    ],
    photo: photos.houseAndKeys,
  },
  {
    id: 'famille',
    title: 'Famille',
    summary: 'Contrat de mariage, PACS, changement de régime matrimonial, divorce.',
    description:
      'Le choix d’un régime matrimonial ou d’une convention de PACS a des effets pendant toute la vie du couple. Le notaire explique les options et adapte le contrat lorsque la situation évolue.',
    items: [
      'Contrat de mariage',
      'Convention de PACS',
      'Changement de régime matrimonial',
      'Divorce par consentement mutuel (dépôt de la convention)',
      'Adoption, reconnaissance',
    ],
    photo: photos.grandmotherAndChild,
  },
  {
    id: 'succession',
    title: 'Succession',
    summary: 'Acte de notoriété, déclaration de succession, partage.',
    description:
      'Après un décès, l’office identifie les héritiers, établit l’inventaire du patrimoine, dépose la déclaration de succession et accompagne la famille jusqu’au partage.',
    items: [
      'Acte de notoriété',
      'Déclaration de succession',
      'Attestation immobilière',
      'Partage et sortie d’indivision',
    ],
    photo: photos.photoAlbum,
  },
  {
    id: 'donation-testament',
    title: 'Donation et testament',
    summary: 'Donation-partage, donation entre époux, testament authentique.',
    description:
      'Anticiper la transmission permet de protéger le conjoint, d’organiser l’égalité entre les enfants et de profiter des abattements prévus par la loi.',
    items: [
      'Donation simple et donation-partage',
      'Donation entre époux',
      'Testament authentique ou olographe',
      'Inscription au fichier central des dispositions de dernières volontés',
    ],
    photo: photos.handSigning,
  },
  {
    id: 'patrimoine',
    title: 'Patrimoine',
    summary: 'Bilan patrimonial, démembrement, SCI familiale, viager.',
    description:
      'Un bilan patrimonial fait le point sur les biens, les revenus et les objectifs de la famille, puis propose les outils juridiques adaptés.',
    items: [
      'Bilan patrimonial',
      'Démembrement de propriété',
      'SCI familiale',
      'Vente en viager',
      'Mandat de protection future',
    ],
    photo: photos.familyWalk,
  },
  {
    id: 'entreprise-rural',
    title: 'Entreprise et rural',
    summary: 'Statuts, cession de parts ou de fonds, bail rural, transmission.',
    description:
      'L’office accompagne les dirigeants et les exploitants agricoles à chaque étape : constitution, acquisition des locaux ou des terres, cession et transmission familiale.',
    items: [
      'Statuts de société',
      'Cession de parts et de fonds de commerce',
      'Bail rural, groupement foncier agricole',
      'Transmission d’exploitation',
    ],
    photo: photos.handshake,
  },
]
