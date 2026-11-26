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
      <p className={styles.demo}>
        <strong>Démonstration.</strong> Ce site est fictif : aucune demande n’a été envoyée et
        aucune donnée n’a quitté votre navigateur.
      </p>

      <h2 ref={headingRef} tabIndex={-1} className={styles.title}>
        Votre demande est prête
      </h2>
      <p>
        Sur un site réel, l’accueil de l’office confirmerait ce créneau par téléphone ou par e-mail
        sous un jour ouvré, à l’adresse {request.email}.
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
