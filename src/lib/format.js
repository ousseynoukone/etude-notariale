const euroFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

const percentFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
})

const longDateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function formatEuros(amount) {
  return euroFormatter.format(amount)
}

export function formatPercent(ratio) {
  return percentFormatter.format(ratio)
}

export function formatLongDate(isoDate) {
  return longDateFormatter.format(new Date(`${isoDate}T12:00:00`))
}

export function toTelHref(phone) {
  return `tel:+33${phone.replace(/\s/g, '').slice(1)}`
}

export function toMailHref(email) {
  return `mailto:${email}`
}
