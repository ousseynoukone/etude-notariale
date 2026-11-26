import Link from 'next/link'
import Photo from '@/components/Photo/Photo'
import styles from './DomainCard.module.css'

export default function DomainCard({ domain }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Photo
          photo={domain.photo}
          alt=""
          sizes="(min-width: 1100px) 380px, (min-width: 700px) 50vw, 100vw"
          ratio={3 / 2}
          className={styles.photo}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`/domaines#${domain.id}`} className={styles.link}>
            {domain.title}
          </Link>
        </h3>
        <p className={styles.summary}>{domain.summary}</p>
        <span className={styles.more} aria-hidden="true">
          En savoir plus
        </span>
      </div>
    </article>
  )
}
