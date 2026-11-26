'use client'

import { useId, useState } from 'react'
import { DEPARTMENT_RATES, MINIMUM_PRICE, computeAcquisitionFees } from '@/lib/fees'
import { formatEuros } from '@/lib/format'
import FeeBreakdown from './FeeBreakdown'
import styles from './FeeCalculator.module.css'

const DEFAULT_PRICE = '240000'

function parsePrice(input) {
  const digits = input.replace(/[\s  €]/g, '').replace(',', '.')
  return digits === '' ? NaN : Number(digits)
}

export default function FeeCalculator() {
  const [priceInput, setPriceInput] = useState(DEFAULT_PRICE)
  const [isNewBuild, setIsNewBuild] = useState(false)
  const [departmentRate, setDepartmentRate] = useState(DEPARTMENT_RATES[0].value)
  const errorId = useId()

  const price = parsePrice(priceInput)
  const isPriceValid = Number.isFinite(price) && price >= MINIMUM_PRICE
  const fees = isPriceValid ? computeAcquisitionFees({ price, isNewBuild, departmentRate }) : null

  return (
    <div className={styles.calculator}>
      <form className={styles.form} onSubmit={(event) => event.preventDefault()} noValidate>
        <div className={styles.field}>
          <label htmlFor="prix" className={styles.label}>
            Prix d’achat hors frais
          </label>
          <div className={styles.priceInput}>
            <input
              id="prix"
              name="prix"
              inputMode="numeric"
              autoComplete="off"
              value={priceInput}
              onChange={(event) => setPriceInput(event.target.value)}
              aria-invalid={!isPriceValid}
              aria-describedby={isPriceValid ? undefined : errorId}
              className={styles.input}
            />
            <span className={styles.unit} aria-hidden="true">
              €
            </span>
          </div>
          {!isPriceValid && (
            <p id={errorId} className={styles.error}>
              Indiquez un prix d’au moins {formatEuros(MINIMUM_PRICE)}, en chiffres.
            </p>
          )}
        </div>

        <fieldset className={styles.field}>
          <legend className={styles.label}>Type de bien</legend>
          <div className={styles.choices}>
            <label className={styles.choice}>
              <input
                type="radio"
                name="type"
                checked={!isNewBuild}
                onChange={() => setIsNewBuild(false)}
              />
              <span>
                Ancien
                <small>Construit depuis plus de cinq ans</small>
              </span>
            </label>
            <label className={styles.choice}>
              <input
                type="radio"
                name="type"
                checked={isNewBuild}
                onChange={() => setIsNewBuild(true)}
              />
              <span>
                Neuf
                <small>Vendu par un promoteur</small>
              </span>
            </label>
          </div>
        </fieldset>

        {!isNewBuild && (
          <div className={styles.field}>
            <label htmlFor="taux-departemental" className={styles.label}>
              Taux départemental
            </label>
            <select
              id="taux-departemental"
              value={departmentRate}
              onChange={(event) => setDepartmentRate(Number(event.target.value))}
              className={styles.input}
            >
              {DEPARTMENT_RATES.map(({ value, label, description }) => (
                <option key={value} value={value}>
                  {label} ({description})
                </option>
              ))}
            </select>
          </div>
        )}

        <p className={styles.hint}>Le calcul se met à jour à chaque modification.</p>
      </form>

      <div className={styles.results}>
        {fees ? (
          <FeeBreakdown fees={fees} price={price} />
        ) : (
          <p className={styles.placeholder}>Saisissez un prix pour afficher l’estimation.</p>
        )}
      </div>
    </div>
  )
}
