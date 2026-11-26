import { ButtonLink } from '@/components/Button/Button'
import NotaryList from '@/components/NotaryList/NotaryList'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import styles from './TeamPreview.module.css'

export default function TeamPreview() {
  return (
    <Section tone="tint" aria-labelledby="notaires-titre">
      <SectionHeading id="notaires-titre" eyebrow="Les notaires" title="Trois notaires associés">
        <p>
          Chaque dossier est suivi par un notaire et un collaborateur référent, de la première
          rencontre à la signature.
        </p>
      </SectionHeading>
      <NotaryList />
      <div className={styles.footer}>
        <ButtonLink href="/office" variant="secondary">
          L’office et son équipe
        </ButtonLink>
      </div>
    </Section>
  )
}
