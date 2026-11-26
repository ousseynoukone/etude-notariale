import { cx } from '@/lib/classNames'
import styles from './Section.module.css'

export default function Section({ tone = 'plain', narrow = false, className, children, ...props }) {
  return (
    <section className={cx(styles.section, styles[tone], className)} {...props}>
      <div className={cx('container', narrow && 'container-narrow')}>{children}</div>
    </section>
  )
}
