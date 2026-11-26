import Link from 'next/link'
import Photo from '@/components/Photo/Photo'
import { photos } from '@/data/photos'
import styles from './RoleBand.module.css'

export default function RoleBand() {
  return (
    <section className={styles.band} aria-label="Le rôle du notaire">
      <Photo photo={photos.greenLamp} sourceWidth={2000} alt="" className={styles.photo} />
      <div className={`container ${styles.content}`}>
        <p className={styles.statement}>
          Officier public nommé par le garde des Sceaux, le notaire confère aux actes qu’il reçoit
          le caractère authentique et doit à chacune des parties un conseil impartial.
        </p>
        <Link href="/office#role-du-notaire" className={styles.link}>
          Le rôle du notaire
        </Link>
      </div>
    </section>
  )
}
