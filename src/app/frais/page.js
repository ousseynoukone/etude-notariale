import FeeCalculator from '@/components/FeeCalculator/FeeCalculator'
import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { photos } from '@/data/photos'
import styles from './page.module.css'

export const metadata = {
  title: 'Frais d’acquisition',
  description:
    'Simulateur des frais d’acquisition d’un bien immobilier : droits de mutation, émoluments du notaire au tarif réglementé, contribution de sécurité immobilière et débours.',
}

export default function FeesPage() {
  return (
    <>
      <PageHeader
        title="Calculer les frais d’acquisition"
        crumb="Frais d’acquisition"
        lead="Les « frais de notaire » sont pour l’essentiel des taxes reversées à l’État et aux collectivités. Ce simulateur applique le tarif réglementé des notaires et les taux de droits en vigueur."
        photo={photos.keysOnTable}
      />

      <Section>
        <FeeCalculator />

        <div className={styles.notes}>
          <h2 className={styles.notesTitle}>Comment lire cette estimation</h2>
          <ul>
            <li>
              Les émoluments sont fixés par le tarif réglementé : 3,870&nbsp;% jusqu’à 6 500&nbsp;€,
              1,596&nbsp;% de 6 500 à 17 000&nbsp;€, 1,064&nbsp;% de 17 000 à 60 000&nbsp;€ et
              0,799&nbsp;% au-delà, TVA de 20&nbsp;% en sus.
            </li>
            <li>
              Dans l’ancien, les droits de mutation comprennent la taxe départementale (4,50&nbsp;%
              ou 5,00&nbsp;% selon le département et la situation de l’acquéreur), la taxe communale
              de 1,20&nbsp;% et des frais d’assiette égaux à 2,37&nbsp;% de la taxe départementale.
            </li>
            <li>
              Dans le neuf vendu par un promoteur, seule la taxe de publicité foncière de
              0,715&nbsp;% est due ; la TVA immobilière est comprise dans le prix.
            </li>
            <li>
              Les débours, avancés par l’office pour obtenir les documents nécessaires, sont estimés
              au forfait. Le montant exact figure sur le décompte remis avant la signature.
            </li>
          </ul>
        </div>
      </Section>
    </>
  )
}
