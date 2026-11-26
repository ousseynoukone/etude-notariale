import { cx } from '@/lib/classNames'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Photo from '@/components/Photo/Photo'
import styles from './PageHeader.module.css'

export default function PageHeader({ title, crumb = title, lead, photo }) {
  return (
    <header className={cx(styles.pageHeader, photo && styles.withPhoto)}>
      {photo && <Photo photo={photo} sourceWidth={2000} alt="" priority className={styles.photo} />}
      <div className={`container ${styles.content}`}>
        <Breadcrumb current={crumb} />
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </header>
  )
}
