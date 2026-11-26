import Photo from '@/components/Photo/Photo'
import { cx } from '@/lib/classNames'
import styles from './DomainSection.module.css'

export default function DomainSection({ domain, index, reversed = false }) {
  const titleId = `${domain.id}-titre`

  return (
    <section id={domain.id} className={styles.domain} aria-labelledby={titleId}>
      <div className={cx(styles.grid, reversed && styles.reversed)}>
        <div className={styles.media}>
          <Photo
            photo={domain.photo}
            sizes="(min-width: 900px) 45vw, 100vw"
            ratio={4 / 3}
            className={styles.photo}
          />
        </div>
        <div>
          <p className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 id={titleId} className={styles.title}>
            {domain.title}
          </h2>
          <p className={styles.description}>{domain.description}</p>
          <ul className={styles.items}>
            {domain.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
