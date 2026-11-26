import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import UtilityBar from '@/components/UtilityBar/UtilityBar'
import { office } from '@/data/office'
import styles from './layout.module.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    template: `%s · ${office.name}`,
    default: office.name,
  },
  description:
    'Office notarial Marceau, Lenglet & Brard, notaires associés à Valcourt-sur-Loire : immobilier, famille, successions, patrimoine et entreprise.',
}

export const viewport = {
  themeColor: '#16203a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body>
        <a className={styles.skipLink} href="#contenu">
          Aller au contenu
        </a>
        <UtilityBar />
        <Header />
        <main id="contenu" tabIndex={-1} className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
