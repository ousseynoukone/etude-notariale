import { closures, timeSlots } from '@/data/booking'
import { addDays, isPublicHoliday, isWeekend, startOfDay, toIsoDate } from '@/lib/dates'

const FRIDAY = 5
const FRIDAY_CLOSING_SLOT = '17 h 00'

const dayFormatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

function isClosed(date) {
  const isoDate = toIsoDate(date)
  return closures.some(({ from, to }) => isoDate >= from && isoDate <= to)
}

function isOpenDay(date) {
  return !isWeekend(date) && !isPublicHoliday(date) && !isClosed(date)
}

export function getBookableDays(from, count) {
  const days = []
  let date = addDays(startOfDay(from), 1)

  while (days.length < count) {
    if (isOpenDay(date)) {
      days.push({ value: toIsoDate(date), label: dayFormatter.format(date), date })
    }
    date = addDays(date, 1)
  }

  return days
}

export function getTimeSlots(date) {
  const isFriday = date.getDay() === FRIDAY
  const seed = date.getDate() * 7 + date.getMonth() * 3

  return timeSlots
    .filter((slot) => !(isFriday && slot === FRIDAY_CLOSING_SLOT))
    .map((slot, index) => ({ value: slot, isTaken: (seed + index * 5) % 3 === 0 }))
}

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function normalizePhone(phone) {
  const digits = phone.replace(/[\s.\-()]/g, '')
  return digits.replace(/^(\+33|0033)/, '0')
}

export function validateContactDetails({ name, email, phone }) {
  const errors = {}

  if (name.trim().length < 2) {
    errors.name = 'Indiquez votre nom et votre prénom.'
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = 'Indiquez une adresse e-mail complète, par exemple nom@domaine.fr.'
  }
  if (!/^0\d{9}$/.test(normalizePhone(phone))) {
    errors.phone = 'Indiquez un numéro de téléphone français à 10 chiffres.'
  }

  return errors
}
