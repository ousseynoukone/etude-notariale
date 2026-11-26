import { cx } from '@/lib/classNames'
import styles from './Monogram.module.css'

export default function Monogram({ className }) {
  return (
    <svg className={cx(styles.monogram, className)} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="0.75" y="0.75" width="54.5" height="54.5" fill="none" strokeWidth="1.5" />
      <rect x="4.5" y="4.5" width="47" height="47" fill="none" strokeWidth="0.75" />
      <text x="28" y="35" textAnchor="middle">
        MLB
      </text>
    </svg>
  )
}
