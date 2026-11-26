import ListingCard from '@/components/ListingCard/ListingCard'
import styles from './ListingGrid.module.css'

export default function ListingGrid({ listings }) {
  return (
    <ul className={styles.grid}>
      {listings.map((listing) => (
        <li key={listing.reference}>
          <ListingCard listing={listing} />
        </li>
      ))}
    </ul>
  )
}
