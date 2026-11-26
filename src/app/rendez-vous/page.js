import BookingFlow from '@/components/BookingFlow/BookingFlow'
import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { office } from '@/data/office'
import { photos } from '@/data/photos'
import styles from './page.module.css'

export const metadata = {
  title: 'Prendre rendez-vous',
  description:
    'Demande de rendez-vous en trois étapes avec un notaire de l’office, à l’office ou en visioconférence.',
}

const documents = [
  'Une pièce d’identité en cours de validité',
  'Votre livret de famille et, le cas échéant, votre contrat de mariage ou de PACS',
  'Le titre de propriété du bien concerné',
  'Pour une succession : l’acte de décès et les coordonnées des héritiers',
]

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        title="Demande de rendez-vous"
        crumb="Rendez-vous"
        lead="Choisissez l’objet, le créneau et laissez vos coordonnées : l’accueil confirme chaque demande sous un jour ouvré."
        photo={photos.embossingSeal}
      />

      <Section>
        <div className={styles.grid}>
          <BookingFlow />

          <aside className={styles.aside} aria-labelledby="documents-titre">
            <h2 id="documents-titre" className={styles.asideTitle}>
              Documents à prévoir
            </h2>
            <ul className={styles.documents}>
              {documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.asideNote}>
              Le premier rendez-vous d’information, de 30 minutes, est sans frais.
            </p>
            <p className={styles.asideNote}>
              Vous préférez appeler ? L’accueil répond au {office.phone}.
            </p>
          </aside>
        </div>
      </Section>
    </>
  )
}
