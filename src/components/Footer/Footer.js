import Link from 'next/link'
import { appointmentLink, mainNavigation } from '@/data/navigation'
import { office } from '@/data/office'
import { toMailHref, toTelHref } from '@/lib/format'
import Monogram from '@/components/Monogram/Monogram'
import styles from './Footer.module.css'

export default function Footer() {
  const { street, postalCode, city } = office.address

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.identity}>
          <Monogram className={styles.monogram} />
          <p className={styles.name}>{office.name}</p>
          <address className={styles.address}>
            {street}
            <br />
            {postalCode} {city}
          </address>
        </div>

        <div>
          <h2 className={styles.heading}>Nous joindre</h2>
          <ul className={styles.list}>
            <li>
              <a href={toTelHref(office.phone)}>{office.phone}</a>
            </li>
            <li>
              <a href={toMailHref(office.email)}>{office.email}</a>
            </li>
            <li>
              <Link href={appointmentLink.href}>{appointmentLink.label}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Horaires</h2>
          <ul className={styles.list}>
            {office.hours.map(({ days, time }) => (
              <li key={days}>
                <span className={styles.days}>{days}</span> {time}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Plan du site">
          <h2 className={styles.heading}>Plan du site</h2>
          <ul className={styles.list}>
            {mainNavigation.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className={styles.fineprint}>
          <p>
            © {new Date().getFullYear()} {office.legalEntity}
          </p>
        </div>
      </div>
    </footer>
  )
}
