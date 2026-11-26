'use client'

import { useEffect, useState } from 'react'
import { nextFirstThursday, toIsoDate } from '@/lib/dates'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function NextPermanence({ className }) {
  const [date, setDate] = useState(null)

  useEffect(() => {
    setDate(nextFirstThursday())
  }, [])

  if (!date) return null

  return (
    <p className={className}>
      Prochaine permanence : <time dateTime={toIsoDate(date)}>{dateFormatter.format(date)}</time>
    </p>
  )
}
