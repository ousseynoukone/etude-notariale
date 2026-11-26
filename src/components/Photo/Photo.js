import Image from 'next/image'
import { unsplashUrl } from '@/lib/unsplash'

export default function Photo({
  photo,
  alt = photo.alt,
  sizes = '100vw',
  sourceWidth = 1600,
  ratio,
  crop,
  priority = false,
  className,
}) {
  return (
    <Image
      src={unsplashUrl(photo.id, { width: sourceWidth, ratio, crop })}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
