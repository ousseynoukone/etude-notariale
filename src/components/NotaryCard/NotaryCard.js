import Photo from '@/components/Photo/Photo'
import styles from './NotaryCard.module.css'

export default function NotaryCard({ notary, showBio = false }) {
  return (
    <article className={styles.card}>
      <div className={styles.portrait}>
        <Photo
          photo={notary.photo}
          sizes="(min-width: 1240px) 380px, (min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
          ratio={4 / 5}
          crop="faces"
          className={styles.photo}
        />
      </div>
      <h3 className={styles.name}>{notary.name}</h3>
      <p className={styles.specialties}>{notary.specialties}</p>
      {showBio && <p className={styles.bio}>{notary.bio}</p>}
    </article>
  )
}
