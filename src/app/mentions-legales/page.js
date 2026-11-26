import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { office } from '@/data/office'
import styles from './page.module.css'

export const metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site de l’${office.name} : éditeur, hébergement, données personnelles et médiation.`,
}

export default function LegalPage() {
  const { street, postalCode, city } = office.address

  return (
    <>
      <PageHeader title="Mentions légales" />

      <Section narrow>
        <div className={styles.content}>
          <h2>Éditeur du site</h2>
          <p>
            {office.legalEntity}
            <br />
            {street}, {postalCode} {city}
            <br />
            Téléphone : {office.phone} · E-mail : {office.email}
          </p>
          <p>Directrice de la publication : Maître Claire Marceau, notaire associée.</p>

          <h2>Profession réglementée</h2>
          <p>
            Les notaires sont des officiers publics nommés par arrêté du garde des Sceaux, ministre
            de la Justice. Ils exercent dans le respect du règlement national de la profession et
            sont soumis au contrôle de leur chambre départementale.
          </p>

          <h2>Hébergement</h2>
          <p>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p>

          <h2>Crédits photographiques</h2>
          <p>Unsplash.</p>

          <h2>Données personnelles</h2>
          <p>
            Les informations transmises par le formulaire de rendez-vous servent uniquement à
            traiter votre demande. Elles sont couvertes par le secret professionnel et ne sont
            jamais cédées à des tiers. Vous pouvez demander leur consultation, leur rectification ou
            leur suppression en écrivant à {office.email}.
          </p>
          <p>Ce site ne dépose aucun cookie publicitaire ni de mesure d’audience.</p>

          <h2>Médiation</h2>
          <p>
            En cas de litige, après une réclamation écrite restée sans réponse satisfaisante, vous
            pouvez saisir gratuitement le médiateur du notariat.
          </p>
        </div>
      </Section>
    </>
  )
}
