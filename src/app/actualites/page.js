import NewsItem from '@/components/NewsItem/NewsItem'
import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import { news } from '@/data/news'
import { photos } from '@/data/photos'
import styles from './page.module.css'

export const metadata = {
  title: 'Actualités',
  description:
    'Informations pratiques et vie de l’office : diagnostics immobiliers, donations, statuts de SCI, horaires de fin d’année.',
}

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="Actualités de l’office"
        crumb="Actualités"
        lead="Points de droit utiles et informations pratiques sur la vie de l’office."
        photo={photos.fountainPenSigning}
      />

      <Section narrow>
        <ul className={styles.list}>
          {news.map((article) => (
            <li key={article.id}>
              <NewsItem article={article} />
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>
          Informations générales, à vérifier selon votre situation lors d’un rendez-vous.
        </p>
      </Section>
    </>
  )
}
