import Link from 'next/link'
import { office } from '@/data/office'
import Monogram from '@/components/Monogram/Monogram'
import MainNav from './MainNav'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Monogram />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{office.shortName}</span>
            <span className={styles.brandTagline}>{office.tagline}</span>
          </span>
        </Link>
        <MainNav />
      </div>
    </header>
  )
}
