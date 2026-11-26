import { ButtonLink } from '@/components/Button/Button'
import Photo from '@/components/Photo/Photo'
import { photos } from '@/data/photos'
import styles from './not-found.module.css'

export const metadata = {
  title: 'Page introuvable',
}

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <Photo
        photo={photos.panelledRoom}
        alt=""
        sourceWidth={2000}
        priority
        className={styles.photo}
      />
      <div className={`container ${styles.content}`}>
        <p className={styles.code}>Erreur 404</p>
        <h1 className={styles.title}>Cette page est introuvable</h1>
        <p className={styles.text}>
          L’adresse saisie ne correspond à aucune page du site. Elle a pu être déplacée ou comporter
          une faute de frappe.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/contact" variant="light">
            Contacter l’office
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
