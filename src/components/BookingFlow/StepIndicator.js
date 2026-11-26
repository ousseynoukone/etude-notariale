import { cx } from '@/lib/classNames'
import styles from './StepIndicator.module.css'

export default function StepIndicator({ steps, currentStep }) {
  return (
    <ol className={styles.steps} aria-label="Étapes de la demande">
      {steps.map((label, index) => {
        const step = index + 1
        const status = step < currentStep ? 'done' : step === currentStep ? 'current' : 'upcoming'

        return (
          <li
            key={label}
            className={cx(styles.step, styles[status])}
            aria-current={status === 'current' ? 'step' : undefined}
          >
            <span className={styles.number} aria-hidden="true">
              {step}
            </span>
            <span>
              {label}
              {status === 'done' && <span className="visually-hidden"> (terminée)</span>}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
