import { Button } from '@/components/Button/Button'
import styles from './BookingConfirmation.module.css'

export default function BookingConfirmation({ request, dayLabel, onReset, headingRef }) {
  const summary = [
    { label: 'Objet', value: request.subject },
    { label: 'Notaire', value: request.notary },
    { label: 'Lieu', value: request.location },
    { label: 'Créneau', value: `${dayLabel} à ${request.time}` },
    { label: 'Nom', value: request.name },
    { label: 'E-mail', value: request.email },
    { label: 'Téléphone', value: request.phone },
  ]

  return (
    <div className={styles.confirmation}>
      <h2 ref={headingRef} tabIndex={-1} className={styles.title}>
        Votre demande a bien été enregistrée
      </h2>
      <p>
        L’accueil de l’office vous confirmera ce créneau par téléphone ou par e-mail sous un jour
        ouvré, à l’adresse {request.email}.
      </p>

      <dl className={styles.summary}>
        {summary.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <Button variant="secondary" onClick={onReset}>
        Faire une nouvelle demande
      </Button>
    </div>
  )
}
