import { ButtonLink } from '@/components/Button/Button'
import Photo from '@/components/Photo/Photo'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { photos } from '@/data/photos'
import styles from './IntroSection.module.css'

const keyFigures = [
  { value: '1924', label: 'ouverture de l’étude' },
  { value: '3', label: 'notaires associés' },
  { value: '11', label: 'collaborateurs' },
]

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Photo
            photo={photos.officeInterior}
            sizes="(min-width: 900px) 50vw, 100vw"
            ratio={4 / 5}
            className={styles.photo}
          />
        </div>

        <div className={styles.text}>
          <SectionHeading eyebrow="L’office" title="Rue des Tanneurs, depuis 1924">
            <p>
              Maître Albert Marceau ouvre l’étude en 1924 au rez-de-chaussée du 8 rue des Tanneurs.
              L’office n’a jamais quitté l’immeuble : il en occupe aujourd’hui les trois niveaux.
            </p>
          </SectionHeading>
          <p>
            Trois notaires associés et onze collaborateurs reçoivent particuliers, entreprises et
            collectivités pour leurs actes immobiliers, le droit de la famille, les successions et
            le conseil patrimonial.
          </p>
          <p>
            Les rendez-vous ont lieu à l’office ou en visioconférence. La signature électronique et
            l’acte authentique à distance sont possibles selon la nature du dossier.
          </p>

          <dl className={styles.figures}>
            {keyFigures.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/office" variant="secondary">
            Découvrir l’office
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
