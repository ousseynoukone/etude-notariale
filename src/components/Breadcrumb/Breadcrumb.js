import Link from 'next/link'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ current }) {
  return (
    <nav aria-label="Fil d’Ariane" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}
