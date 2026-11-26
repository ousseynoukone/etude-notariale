const THURSDAY = 4

export function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function toIsoDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

function firstThursdayOfMonth(year, month) {
  const firstDay = new Date(year, month, 1)
  const offset = (THURSDAY - firstDay.getDay() + 7) % 7
  return new Date(year, month, 1 + offset)
}

export function nextFirstThursday(from = new Date()) {
  const today = startOfDay(from)
  const thisMonth = firstThursdayOfMonth(today.getFullYear(), today.getMonth())

  return thisMonth >= today
    ? thisMonth
    : firstThursdayOfMonth(today.getFullYear(), today.getMonth() + 1)
}
