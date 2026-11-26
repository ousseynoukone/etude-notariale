import styles from './MenuToggle.module.css'

export default function MenuToggle({ isOpen, controls, onToggle }) {
  return (
    <button
      type="button"
      className={styles.toggle}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onToggle}
    >
      <span className={styles.bars} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className={styles.label}>{isOpen ? 'Fermer' : 'Menu'}</span>
    </button>
  )
}
