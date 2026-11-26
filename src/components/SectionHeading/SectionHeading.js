import { cx } from '@/lib/classNames'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, id, children, tone, align }) {
  return (
    <div
      className={cx(
        styles.heading,
        tone === 'light' && styles.light,
        align === 'center' && styles.center,
      )}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {children && <div className={styles.intro}>{children}</div>}
    </div>
  )
}
