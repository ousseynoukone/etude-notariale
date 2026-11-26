import Link from 'next/link'
import ListingsBrowser from '@/components/ListingsBrowser/ListingsBrowser'
import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { photos } from '@/data/photos'
import { staff } from '@/data/team'
import styles from './page.module.css'

export const metadata = {
  title: 'Annonces immobilières',
  description:
    'Maisons et appartements confiés au service de négociation de l’office à Valcourt-sur-Loire et alentour. Prix honoraires de négociation inclus.',
}

const negotiator = staff.find((member) => member.service === 'Négociation immobilière')

export default function ListingsPage() {
  return (
    <>
      <PageHeader
        title="Annonces immobilières"
        crumb="Annonces"
        lead={`Biens confiés au service de négociation de l’office. Visites sur rendez-vous auprès de ${negotiator.contact}, au ${negotiator.phone}.`}
        photo={photos.domedBuilding}
      />

      <Section>
        <ListingsBrowser />
        <div className={styles.notes}>
          <p>
            Prix affichés honoraires de négociation inclus. Les honoraires sont à la charge de
            l’acquéreur ; leur montant TTC et leur part du prix net vendeur figurent sur chaque
            annonce. Les frais d’acte s’ajoutent au prix : le{' '}
            <Link href="/frais">simulateur de frais d’acquisition</Link> en donne une estimation.
          </p>
          <p>
            Les dépenses d’énergie sont estimées par le diagnostic de performance énergétique, pour
            un usage standard.
          </p>
        </div>
      </Section>
    </>
  )
}
