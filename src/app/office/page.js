import AppointmentBand from '@/components/AppointmentBand/AppointmentBand'
import NotaryList from '@/components/NotaryList/NotaryList'
import PageHeader from '@/components/PageHeader/PageHeader'
import Photo from '@/components/Photo/Photo'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import StaffTable from '@/components/StaffTable/StaffTable'
import Timeline from '@/components/Timeline/Timeline'
import { milestones } from '@/data/history'
import { notaryRole } from '@/data/notaryRole'
import { office } from '@/data/office'
import { photos } from '@/data/photos'
import { staff } from '@/data/team'
import styles from './page.module.css'

export const metadata = {
  title: 'L’office',
  description:
    'Histoire de l’office depuis 1924, rôle du notaire, présentation des trois notaires associés et annuaire des services.',
}

export default function OfficePage() {
  return (
    <>
      <PageHeader
        title="L’office et ses notaires"
        crumb="L’office"
        lead="Une étude familiale devenue société de trois notaires associés, installée dans le même immeuble depuis 1924."
        photo={photos.panelledRoom}
      />

      <Section aria-labelledby="historique-titre">
        <div className={styles.split}>
          <div>
            <SectionHeading
              id="historique-titre"
              eyebrow="Historique"
              title="Un siècle rue des Tanneurs"
            >
              <p>
                Quatre générations de notaires se sont succédé au 8 rue des Tanneurs.{' '}
                {office.legalEntity}, exerce aujourd’hui sur les trois niveaux de l’immeuble.
              </p>
            </SectionHeading>
            <Timeline milestones={milestones} />
          </div>
          <div className={styles.historyMedia}>
            <Photo
              photo={photos.streetPerspective}
              sizes="(min-width: 900px) 45vw, 100vw"
              ratio={3 / 4}
              className={styles.photo}
            />
          </div>
        </div>
      </Section>

      <Section tone="dark" id="role-du-notaire" aria-labelledby="role-titre">
        <div className={styles.roleGrid}>
          <div className={styles.roleMedia}>
            <Photo
              photo={photos.embossingSeal}
              sizes="(min-width: 900px) 40vw, 100vw"
              ratio={4 / 5}
              className={styles.photo}
            />
          </div>
          <div>
            <SectionHeading
              id="role-titre"
              eyebrow="Le rôle du notaire"
              title="Un officier public au service des parties"
              tone="light"
            >
              <p>
                Le notaire est à la fois un juriste et le délégataire d’une parcelle de l’autorité
                de l’État : les actes qu’il signe engagent la puissance publique.
              </p>
            </SectionHeading>
            <dl className={styles.roleList}>
              {notaryRole.map(({ title, text }) => (
                <div key={title} className={styles.roleItem}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="tint" aria-labelledby="equipe-titre">
        <SectionHeading id="equipe-titre" eyebrow="Les notaires" title="Les associés">
          <p>
            Chaque notaire reçoit l’ensemble des dossiers et suit plus particulièrement certains
            domaines.
          </p>
        </SectionHeading>
        <NotaryList showBio />
      </Section>

      <Section aria-labelledby="services-titre">
        <SectionHeading id="services-titre" eyebrow="Annuaire" title="Les services de l’office">
          <p>
            Onze collaborateurs préparent les dossiers avec les notaires. Pour un dossier en cours,
            vous pouvez joindre directement le service concerné.
          </p>
        </SectionHeading>
        <StaffTable staff={staff} />
      </Section>

      <AppointmentBand />
    </>
  )
}
