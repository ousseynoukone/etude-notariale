import styles from './TextField.module.css'

export default function TextField({
  id,
  label,
  error,
  optional = false,
  multiline = false,
  ...props
}) {
  const errorId = `${id}-erreur`
  const Control = multiline ? 'textarea' : 'input'

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}> (facultatif)</span>}
      </label>
      <Control
        id={id}
        name={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  )
}
