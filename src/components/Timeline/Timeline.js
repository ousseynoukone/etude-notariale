import styles from './Timeline.module.css'

export default function Timeline({ milestones }) {
  return (
    <ol className={styles.timeline}>
      {milestones.map(({ year, title, text }) => (
        <li key={year} className={styles.item}>
          <p className={styles.year}>{year}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ol>
  )
}
