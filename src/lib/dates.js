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

export function addDays(date, days) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

export function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6
}

function easterSunday(year) {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month - 1, day)
}

export function isPublicHoliday(date) {
  const year = date.getFullYear()
  const easter = easterSunday(year)
  const fixedHolidays = ['01-01', '05-01', '05-08', '07-14', '08-15', '11-01', '11-11', '12-25']
  const movableHolidays = [addDays(easter, 1), addDays(easter, 39), addDays(easter, 50)]

  const isoDate = toIsoDate(date)
  return (
    fixedHolidays.some((day) => isoDate === `${year}-${day}`) ||
    movableHolidays.some((holiday) => toIsoDate(holiday) === isoDate)
  )
}
