import Link from 'next/link'
import { cx } from '@/lib/classNames'
import styles from './Button.module.css'

function buttonClassName(variant, size, className) {
  return cx(styles.button, styles[variant], size === 'small' && styles.small, className)
}

export function Button({ variant = 'primary', size, className, type = 'button', ...props }) {
  return <button type={type} className={buttonClassName(variant, size, className)} {...props} />
}

export function ButtonLink({ variant = 'primary', size, className, ...props }) {
  return <Link className={buttonClassName(variant, size, className)} {...props} />
}
