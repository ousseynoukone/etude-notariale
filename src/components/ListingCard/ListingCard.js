import { formatEuros, formatPercent } from '@/lib/format'
import EnergyRating from '@/components/EnergyRating/EnergyRating'
import Photo from '@/components/Photo/Photo'
import styles from './ListingCard.module.css'

export default function ListingCard({ listing }) {
  const { netSellerPrice, negotiationFees, energy } = listing
  const price = netSellerPrice + negotiationFees

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Photo
          photo={listing.photo}
          sizes="(min-width: 1100px) 380px, (min-width: 700px) 50vw, 100vw"
          ratio={4 / 3}
          className={styles.photo}
        />
        <span className={styles.type}>{listing.type}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.reference}>Réf. {listing.reference}</p>
        <h3 className={styles.title}>{listing.title}</h3>
        <p className={styles.location}>{listing.location}</p>

        <ul className={styles.facts}>
          <li>{listing.surface} m²</li>
          <li>{listing.rooms} pièces</li>
          <li>{listing.outdoor}</li>
        </ul>

        <div className={styles.pricing}>
          <p className={styles.price}>
            {formatEuros(price)}
            <span className={styles.priceNote}>honoraires de négociation inclus</span>
          </p>
          <dl className={styles.priceDetails}>
            <div>
              <dt>Prix net vendeur</dt>
              <dd>{formatEuros(netSellerPrice)}</dd>
            </div>
            <div>
              <dt>Honoraires TTC à la charge de l’acquéreur</dt>
              <dd>
                {formatEuros(negotiationFees)}, soit{' '}
                {formatPercent(negotiationFees / netSellerPrice)} du prix net vendeur
              </dd>
            </div>
          </dl>
        </div>

        <div className={styles.energy}>
          <EnergyRating dpe={energy.dpe} ges={energy.ges} />
          <p className={styles.energyCost}>
            Dépenses annuelles d’énergie estimées entre {formatEuros(energy.costMin)} et{' '}
            {formatEuros(energy.costMax)}
          </p>
        </div>
      </div>
    </article>
  )
}
