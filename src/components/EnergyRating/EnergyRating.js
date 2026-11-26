import { cx } from '@/lib/classNames'
import styles from './EnergyRating.module.css'

export default function EnergyRating({ dpe, ges }) {
  return (
    <ul className={styles.ratings}>
      <li className={cx(styles.badge, styles[`dpe${dpe}`])}>
        <span className={styles.label}>DPE</span>
        <span aria-hidden="true">{dpe}</span>
        <span className="visually-hidden">classe énergie {dpe}</span>
      </li>
      <li className={cx(styles.badge, styles[`ges${ges}`])}>
        <span className={styles.label}>GES</span>
        <span aria-hidden="true">{ges}</span>
        <span className="visually-hidden">classe climat {ges}</span>
      </li>
    </ul>
  )
}
