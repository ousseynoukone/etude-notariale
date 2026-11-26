import { cx } from '@/lib/classNames'
import styles from './ChoiceGroup.module.css'

export default function ChoiceGroup({ legend, name, options, value, onChange, compact = false }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={cx(styles.options, compact && styles.compact)}>
        {options.map((option) => (
          <label
            key={option.value}
            className={cx(styles.option, option.disabled && styles.disabled)}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={option.disabled}
              onChange={() => onChange(option.value)}
              className={styles.radio}
            />
            <span className={styles.text}>
              <span className={styles.value}>{option.label ?? option.value}</span>
              {option.hint && <span className={styles.hint}>{option.hint}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
