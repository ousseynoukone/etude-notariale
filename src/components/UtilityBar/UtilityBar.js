import { office } from '@/data/office'
import { toTelHref } from '@/lib/format'
import styles from './UtilityBar.module.css'

export default function UtilityBar() {
  const { street, postalCode, city } = office.address

  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.address}>
          {street}, {postalCode} {city}
        </p>
        <p className={styles.contact}>
          <span className={styles.hours}>{office.hoursSummary}</span>
          <a className={styles.phone} href={toTelHref(office.phone)}>
            Tél. {office.phone}
          </a>
        </p>
      </div>
    </div>
  )
}
