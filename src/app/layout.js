export const metadata = {
  title: 'Office notarial Marceau, Lenglet & Brard',
  description: 'Office notarial fictif à Valcourt-sur-Loire, réalisé pour une étude de cas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
