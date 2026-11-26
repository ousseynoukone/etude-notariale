'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/Button/Button'
import { locations, notaryChoices, subjects } from '@/data/booking'
import { getBookableDays, getTimeSlots, validateContactDetails } from '@/lib/booking'
import BookingConfirmation from './BookingConfirmation'
import ChoiceGroup from './ChoiceGroup'
import StepIndicator from './StepIndicator'
import TextField from './TextField'
import styles from './BookingFlow.module.css'

const STEPS = ['Objet du rendez-vous', 'Date et heure', 'Coordonnées']
const BOOKABLE_DAYS_COUNT = 10

const EMPTY_REQUEST = {
  subject: '',
  notary: '',
  location: '',
  day: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  message: '',
}

const FIELD_IDS = { name: 'nom', email: 'email', phone: 'telephone' }

function firstMissingChoice(request) {
  if (!request.subject) return 'Choisissez l’objet du rendez-vous.'
  if (!request.notary) return 'Choisissez un notaire, ou « Sans préférence ».'
  if (!request.location) return 'Choisissez le lieu du rendez-vous.'
  return ''
}

export default function BookingFlow() {
  const [step, setStep] = useState(1)
  const [request, setRequest] = useState(EMPTY_REQUEST)
  const [days, setDays] = useState([])
  const [stepError, setStepError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const headingRef = useRef(null)
  const shouldMoveFocus = useRef(false)

  useEffect(() => {
    if (shouldMoveFocus.current) {
      headingRef.current?.focus()
    }
  }, [step, isSubmitted])

  const selectedDay = days.find((day) => day.value === request.day)

  function update(field) {
    return (value) => {
      setStepError('')
      setRequest((current) => ({ ...current, [field]: value }))
    }
  }

  function selectDay(value) {
    setStepError('')
    setRequest((current) => ({ ...current, day: value, time: '' }))
  }

  function goToStep(nextStep) {
    shouldMoveFocus.current = true
    setStepError('')
    setStep(nextStep)
  }

  function continueToSchedule() {
    const error = firstMissingChoice(request)
    if (error) {
      setStepError(error)
      return
    }
    if (days.length === 0) {
      setDays(getBookableDays(new Date(), BOOKABLE_DAYS_COUNT))
    }
    goToStep(2)
  }

  function continueToDetails() {
    if (!request.day || !request.time) {
      setStepError('Choisissez un jour, puis un horaire disponible.')
      return
    }
    goToStep(3)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (step !== 3) return

    const errors = validateContactDetails(request)
    setFieldErrors(errors)

    const firstInvalidField = Object.keys(errors)[0]
    if (firstInvalidField) {
      document.getElementById(FIELD_IDS[firstInvalidField])?.focus()
      return
    }

    shouldMoveFocus.current = true
    setIsSubmitted(true)
  }

  function reset() {
    shouldMoveFocus.current = true
    setRequest(EMPTY_REQUEST)
    setFieldErrors({})
    setStepError('')
    setIsSubmitted(false)
    setStep(1)
  }

  if (isSubmitted) {
    return (
      <BookingConfirmation
        request={request}
        dayLabel={selectedDay.label}
        onReset={reset}
        headingRef={headingRef}
      />
    )
  }

  return (
    <form className={styles.flow} onSubmit={handleSubmit} noValidate>
      <StepIndicator steps={STEPS} currentStep={step} />

      <h2 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
        <span className={styles.stepCount}>
          Étape {step} sur {STEPS.length}
        </span>
        {STEPS[step - 1]}
      </h2>

      {step === 1 && (
        <>
          <ChoiceGroup
            legend="Objet"
            name="objet"
            options={subjects}
            value={request.subject}
            onChange={update('subject')}
          />
          <ChoiceGroup
            legend="Notaire"
            name="notaire"
            options={notaryChoices}
            value={request.notary}
            onChange={update('notary')}
          />
          <ChoiceGroup
            legend="Lieu"
            name="lieu"
            options={locations}
            value={request.location}
            onChange={update('location')}
          />
        </>
      )}

      {step === 2 && (
        <>
          <ChoiceGroup
            legend="Jour"
            name="jour"
            options={days.map(({ value, label }) => ({ value, label }))}
            value={request.day}
            onChange={selectDay}
          />
          {selectedDay ? (
            <ChoiceGroup
              legend={`Horaire, ${selectedDay.label}`}
              name="horaire"
              options={getTimeSlots(selectedDay.date).map(({ value, isTaken }) => ({
                value,
                disabled: isTaken,
                hint: isTaken ? 'Indisponible' : undefined,
              }))}
              value={request.time}
              onChange={update('time')}
              compact
            />
          ) : (
            <p className={styles.hint}>Choisissez d’abord un jour pour afficher les horaires.</p>
          )}
        </>
      )}

      {step === 3 && (
        <>
          <div className={styles.fields}>
            <TextField
              id={FIELD_IDS.name}
              label="Nom et prénom"
              autoComplete="name"
              value={request.name}
              onChange={(event) => update('name')(event.target.value)}
              error={fieldErrors.name}
            />
            <TextField
              id={FIELD_IDS.email}
              label="E-mail"
              type="email"
              autoComplete="email"
              value={request.email}
              onChange={(event) => update('email')(event.target.value)}
              error={fieldErrors.email}
            />
            <TextField
              id={FIELD_IDS.phone}
              label="Téléphone"
              type="tel"
              autoComplete="tel"
              value={request.phone}
              onChange={(event) => update('phone')(event.target.value)}
              error={fieldErrors.phone}
            />
          </div>
          <TextField
            id="precisions"
            label="Précisions"
            optional
            multiline
            rows={4}
            value={request.message}
            onChange={(event) => update('message')(event.target.value)}
          />
          <p className={styles.privacy}>
            Vos données servent uniquement à traiter cette demande et sont couvertes par le secret
            professionnel.
          </p>
        </>
      )}

      <p className={styles.error} role="alert">
        {stepError}
      </p>

      <div className={styles.actions}>
        {step > 1 && (
          <Button variant="secondary" onClick={() => goToStep(step - 1)}>
            Retour
          </Button>
        )}
        {step === 1 && <Button onClick={continueToSchedule}>Continuer</Button>}
        {step === 2 && <Button onClick={continueToDetails}>Continuer</Button>}
        {step === 3 && <Button type="submit">Envoyer la demande</Button>}
      </div>
    </form>
  )
}
