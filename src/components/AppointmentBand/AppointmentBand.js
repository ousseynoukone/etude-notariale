import { ButtonLink } from '@/components/Button/Button'
import Photo from '@/components/Photo/Photo'
import { photos } from '@/data/photos'
import NextPermanence from './NextPermanence'
import styles from './AppointmentBand.module.css'

export default function AppointmentBand() {
  return (
    <section className={styles.band} aria-labelledby="rendez-vous-titre">
      <Photo photo={photos.tableSigning} alt="" sourceWidth={2000} className={styles.photo} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Rendez-vous</p>
          <h2 id="rendez-vous-titre" className={styles.title}>
            Préparer votre premier rendez-vous
          </h2>
          <p>
            Munissez-vous d’une pièce d’identité en cours de validité. Selon votre dossier, apportez
            aussi votre livret de famille, votre contrat de mariage ou le titre de propriété du bien
            concerné. La liste exacte vous est adressée avec la confirmation.
          </p>
          <p className={styles.note}>
            Le premier rendez-vous d’information, de 30 minutes, est sans frais.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/rendez-vous">Prendre rendez-vous</ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Contact et accès
            </ButtonLink>
          </div>
        </div>

        <aside className={styles.permanence} aria-labelledby="permanence-titre">
          <h3 id="permanence-titre" className={styles.permanenceTitle}>
            Permanence sans rendez-vous
          </h3>
          <p>
            Le premier jeudi de chaque mois, de 17 h à 19 h, un notaire de l’office répond aux
            questions de droit de la famille et d’immobilier.
          </p>
          <NextPermanence className={styles.nextDate} />
        </aside>
      </div>
    </section>
  )
}
