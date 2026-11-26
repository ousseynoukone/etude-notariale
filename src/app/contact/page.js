import { ButtonLink } from '@/components/Button/Button'
import CopyButton from '@/components/CopyButton/CopyButton'
import PageHeader from '@/components/PageHeader/PageHeader'
import Photo from '@/components/Photo/Photo'
import Section from '@/components/Section/Section'
import { office } from '@/data/office'
import { photos } from '@/data/photos'
import { toMailHref, toTelHref } from '@/lib/format'
import styles from './page.module.css'

export const metadata = {
  title: 'Contact et accès',
  description:
    'Adresse, téléphone, horaires d’ouverture et accès de l’office notarial Marceau, Lenglet & Brard, 8 rue des Tanneurs à Valcourt-sur-Loire.',
}

const accessDetails = [
  {
    label: 'En train',
    text: 'Gare SNCF à 400 m, soit cinq minutes à pied par la rue de la République.',
  },
  { label: 'En voiture', text: 'Parking de la place du Marché, gratuit le samedi.' },
  {
    label: 'Accessibilité',
    text: 'Accueil et salles de signature de plain-pied, accessibles aux personnes à mobilité réduite.',
  },
]

export default function ContactPage() {
  const { street, postalCode, city } = office.address

  return (
    <>
      <PageHeader
        title="Contact et accès"
        crumb="Contact"
        lead="L’accueil répond aux appels et aux messages pendant les heures d’ouverture."
        photo={photos.officeBuilding}
      />

      <Section>
        <div className={styles.grid}>
          <div className={styles.details}>
            <h2 className={styles.heading}>Nous joindre</h2>
            <address className={styles.address}>
              <strong>{office.name}</strong>
              <br />
              {street}
              <br />
              {postalCode} {city}
            </address>

            <dl className={styles.contactList}>
              <div>
                <dt>Téléphone</dt>
                <dd className={styles.phoneRow}>
                  <a href={toTelHref(office.phone)} className={styles.phone}>
                    {office.phone}
                  </a>
                  <CopyButton value={office.phone} label={`Copier le numéro ${office.phone}`} />
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={toMailHref(office.email)}>{office.email}</a>
                </dd>
              </div>
            </dl>

            <h2 className={styles.heading}>Accès</h2>
            <dl className={styles.accessList}>
              {accessDetails.map(({ label, text }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.aside}>
            <div className={styles.hours}>
              <h2 className={styles.heading}>Horaires d’ouverture</h2>
              <table className={styles.hoursTable}>
                <caption className="visually-hidden">Horaires d’ouverture de l’office</caption>
                <tbody>
                  {office.hours.map(({ days, time }) => (
                    <tr key={days}>
                      <th scope="row">{days}</th>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ButtonLink href="/rendez-vous" className={styles.cta}>
                Demander un rendez-vous
              </ButtonLink>
            </div>
            <div className={styles.media}>
              <Photo
                photo={photos.stoneFacades}
                sizes="(min-width: 900px) 40vw, 100vw"
                ratio={3 / 2}
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
