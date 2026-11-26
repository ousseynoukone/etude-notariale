import { notaries } from './team'

export const subjects = [
  { value: 'Achat ou vente immobilière' },
  { value: 'Succession' },
  { value: 'Mariage, PACS, divorce' },
  { value: 'Donation, testament' },
  { value: 'Société, entreprise' },
  { value: 'Autre demande' },
]

export const notaryChoices = [
  { value: 'Sans préférence', hint: 'Premier notaire disponible' },
  ...notaries.map((notary) => ({ value: notary.shortName, hint: notary.specialties })),
]

export const locations = [
  { value: 'À l’office', hint: '8 rue des Tanneurs' },
  { value: 'En visioconférence', hint: 'Lien envoyé par e-mail' },
]

export const timeSlots = [
  '9 h 00',
  '9 h 30',
  '10 h 30',
  '11 h 30',
  '14 h 00',
  '15 h 00',
  '16 h 00',
  '17 h 00',
]

export const closures = [{ from: '2026-12-24', to: '2027-01-03' }]
