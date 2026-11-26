import { photos } from './photos'

export const notaries = [
  {
    id: 'claire-marceau',
    name: 'Maître Claire Marceau',
    shortName: 'Me Claire Marceau',
    specialties: 'Droit de la famille, successions, patrimoine',
    bio: 'Titulaire du diplôme supérieur du notariat, elle est chargée d’enseignement en droit patrimonial de la famille. Elle reçoit les familles pour les contrats de mariage, les donations et le règlement des successions.',
    photo: photos.portraitMarceau,
  },
  {
    id: 'julien-lenglet',
    name: 'Maître Julien Lenglet',
    shortName: 'Me Julien Lenglet',
    specialties: 'Immobilier, copropriété, collectivités',
    bio: 'Il suit les ventes de logements et de locaux professionnels, les programmes neufs et les acquisitions des communes du canton.',
    photo: photos.portraitLenglet,
  },
  {
    id: 'ines-brard',
    name: 'Maître Inès Brard',
    shortName: 'Me Inès Brard',
    specialties: 'Droit des sociétés, droit rural',
    bio: 'Elle accompagne les dirigeants et les exploitants agricoles, de la constitution de la société à la transmission de l’entreprise ou de l’exploitation.',
    photo: photos.portraitBrard,
  },
]

export const staff = [
  {
    service: 'Accueil et rendez-vous',
    contact: 'Mme Nadia Ferrand',
    phone: '01 99 00 14 22',
    email: 'accueil@marceau-lenglet.example',
  },
  {
    service: 'Négociation immobilière',
    contact: 'M. Thomas Gaillot',
    phone: '01 99 00 14 30',
    email: 'immobilier@marceau-lenglet.example',
  },
  {
    service: 'Formalités et publicité foncière',
    contact: 'Mme Sophie Marchal',
    phone: '01 99 00 14 26',
    email: 'formalites@marceau-lenglet.example',
  },
  {
    service: 'Successions',
    contact: 'Mme Laure Vidalenc',
    phone: '01 99 00 14 34',
    email: 'successions@marceau-lenglet.example',
  },
  {
    service: 'Droit de la famille',
    contact: 'M. Karim Benali',
    phone: '01 99 00 14 36',
    email: 'famille@marceau-lenglet.example',
  },
  {
    service: 'Comptabilité',
    contact: 'M. Antoine Rivière',
    phone: '01 99 00 14 38',
    email: 'comptabilite@marceau-lenglet.example',
  },
]
