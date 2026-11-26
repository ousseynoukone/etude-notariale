import { ButtonLink } from '@/components/Button/Button'
import Photo from '@/components/Photo/Photo'
import { office } from '@/data/office'
import { photos } from '@/data/photos'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="accueil-titre">
      <Photo photo={photos.officeBuilding} sourceWidth={2400} priority className={styles.photo} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>
          {office.tagline} depuis {office.foundedIn}
        </p>
        <h1 id="accueil-titre" className={styles.title}>
          Office notarial <span className={styles.titleNames}>Marceau, Lenglet &amp; Brard</span>
        </h1>
        <p className={styles.lead}>
          Trois notaires et leurs collaborateurs vous reçoivent rue des Tanneurs pour les actes de
          la vie familiale, immobilière et professionnelle.
        </p>
        <div className={styles.actions}>
          <ButtonLink href="/rendez-vous">Prendre rendez-vous</ButtonLink>
          <ButtonLink href="/domaines" variant="light">
            Nos domaines
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
