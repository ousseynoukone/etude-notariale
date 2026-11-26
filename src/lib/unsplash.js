const BASE_URL = 'https://images.unsplash.com'

export function unsplashUrl(id, { width, ratio, crop }) {
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(width), q: '80' })

  if (ratio) {
    params.set('h', String(Math.round(width / ratio)))
  }
  if (crop) {
    params.set('crop', crop)
  }

  return `${BASE_URL}/photo-${id}?${params}`
}
