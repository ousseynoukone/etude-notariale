import { ButtonLink } from '@/components/Button/Button'
import ListingGrid from '@/components/ListingGrid/ListingGrid'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { getLatestListings } from '@/data/listings'
import styles from './LatestListings.module.css'

export default function LatestListings() {
  return (
    <Section aria-labelledby="annonces-titre">
      <div className={styles.header}>
        <SectionHeading
          id="annonces-titre"
          eyebrow="Annonces"
          title="Biens récemment confiés à l’office"
        >
          <p>Prix affichés honoraires de négociation inclus, à la charge de l’acquéreur.</p>
        </SectionHeading>
        <ButtonLink href="/annonces" variant="secondary" className={styles.allLink}>
          Toutes les annonces
        </ButtonLink>
      </div>
      <ListingGrid listings={getLatestListings(3)} />
    </Section>
  )
}
