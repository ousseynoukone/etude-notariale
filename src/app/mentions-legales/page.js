import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { office } from '@/data/office'
import styles from './page.module.css'

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site de démonstration : office fictif, coordonnées réservées à la fiction, photographies Unsplash.',
}

export default function LegalPage() {
  const { street, postalCode, city } = office.address

  return (
    <>
      <PageHeader title="Mentions légales" />

      <Section narrow>
        <div className={styles.notice} role="note">
          <h2 className={styles.noticeTitle}>Site de démonstration</h2>
          <p>
            Ce site est une réalisation fictive, conçue dans le cadre d’une étude de cas. L’office
            notarial, les notaires, les collaborateurs, les biens immobiliers, l’adresse et les
            coordonnées n’existent pas. Toute ressemblance avec un office existant serait fortuite.
          </p>
        </div>

        <div className={styles.content}>
          <h2>Coordonnées fictives</h2>
          <p>
            Les numéros de téléphone utilisés appartiennent à la tranche 01 99 00 xx xx, que l’Arcep
            réserve aux œuvres de fiction : ils ne sont attribués à aucun abonné. Les adresses
            électroniques utilisent le domaine « .example », réservé à la documentation et aux
            exemples ; aucun message ne peut y être distribué. Le code postal 49999 et la commune de
            Valcourt-sur-Loire sont imaginaires.
          </p>

          <h2>Éditeur</h2>
          <p>
            {office.legalEntity}, {street}, {postalCode} {city} (éditeur fictif).
          </p>

          <h2>Photographies</h2>
          <p>
            Les photographies sont de véritables prises de vue, publiées sur Unsplash par leurs
            auteurs et utilisées selon la licence Unsplash. Aucune image n’a été générée par un
            outil d’intelligence artificielle. Les portraits illustrent des personnages fictifs :
            ils ne représentent pas les personnes nommées sur ce site.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Le formulaire de demande de rendez-vous ne transmet aucune donnée : les informations
            saisies restent dans votre navigateur et disparaissent à la fermeture de la page. Le
            site ne dépose aucun cookie. Les polices de caractères sont chargées depuis Google Fonts
            et les photographies depuis Unsplash ; ces services reçoivent, comme tout serveur,
            l’adresse IP du visiteur.
          </p>

          <h2>Médiation</h2>
          <p>
            Dans un office réel, le client peut saisir gratuitement le médiateur du notariat en cas
            de litige, après une réclamation écrite restée sans réponse satisfaisante.
          </p>
        </div>
      </Section>
    </>
  )
}
