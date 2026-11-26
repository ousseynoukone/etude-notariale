import { notaries } from '@/data/team'
import NotaryCard from '@/components/NotaryCard/NotaryCard'
import styles from './NotaryList.module.css'

export default function NotaryList({ showBio = false }) {
  return (
    <ul className={styles.list}>
      {notaries.map((notary) => (
        <li key={notary.id}>
          <NotaryCard notary={notary} showBio={showBio} />
        </li>
      ))}
    </ul>
  )
}
