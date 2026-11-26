import Photo from '@/components/Photo/Photo'
import { formatLongDate } from '@/lib/format'
import styles from './NewsItem.module.css'

export default function NewsItem({ article }) {
  return (
    <article className={styles.item}>
      <div className={styles.media}>
        <Photo
          photo={article.photo}
          alt=""
          sizes="(min-width: 700px) 280px, 100vw"
          ratio={4 / 3}
          sourceWidth={800}
          className={styles.photo}
        />
      </div>
      <div>
        <p className={styles.meta}>
          <time dateTime={article.date}>{formatLongDate(article.date)}</time>
          <span className={styles.category}>{article.category}</span>
        </p>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.excerpt}>{article.excerpt}</p>
      </div>
    </article>
  )
}
