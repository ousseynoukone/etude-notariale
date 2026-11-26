'use client'

import { useState } from 'react'
import ListingGrid from '@/components/ListingGrid/ListingGrid'
import { listings, listingTypes } from '@/data/listings'
import styles from './ListingsBrowser.module.css'

const ALL_TYPES = 'Tous'

function countLabel(count) {
  return count > 1 ? `${count} biens` : `${count} bien`
}

export default function ListingsBrowser() {
  const [selectedType, setSelectedType] = useState(ALL_TYPES)

  const visibleListings =
    selectedType === ALL_TYPES
      ? listings
      : listings.filter((listing) => listing.type === selectedType)

  const options = [ALL_TYPES, ...listingTypes].map((type) => ({
    type,
    count:
      type === ALL_TYPES
        ? listings.length
        : listings.filter((listing) => listing.type === type).length,
  }))

  return (
    <>
      <div className={styles.toolbar}>
        <fieldset className={styles.filter}>
          <legend className={styles.legend}>Type de bien</legend>
          <div className={styles.options}>
            {options.map(({ type, count }) => (
              <label key={type} className={styles.option}>
                <input
                  type="radio"
                  name="type-de-bien"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className={styles.radio}
                />
                <span>
                  {type} <span className={styles.count}>({count})</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className={styles.results} role="status">
          {countLabel(visibleListings.length)}
        </p>
      </div>

      <ListingGrid listings={visibleListings} />
    </>
  )
}
