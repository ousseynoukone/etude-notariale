import DomainCard from '@/components/DomainCard/DomainCard'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { domains } from '@/data/domains'
import styles from './DomainsOverview.module.css'

export default function DomainsOverview() {
  return (
    <Section tone="tint" aria-labelledby="domaines-titre">
      <SectionHeading
        id="domaines-titre"
        eyebrow="Domaines d’intervention"
        title="Les actes qui jalonnent une vie"
      >
        <p>
          L’office conseille et rédige les actes des particuliers, des entreprises et des
          collectivités, de l’achat d’un logement à la transmission d’un patrimoine.
        </p>
      </SectionHeading>

      <ul className={styles.grid}>
        {domains.map((domain) => (
          <li key={domain.id}>
            <DomainCard domain={domain} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
