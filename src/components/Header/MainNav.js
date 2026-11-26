'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { appointmentLink, mainNavigation } from '@/data/navigation'
import { cx } from '@/lib/classNames'
import MenuToggle from './MenuToggle'
import styles from './MainNav.module.css'

function isCurrentSection(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function MainNav() {
  const pathname = usePathname()
  const [openedOn, setOpenedOn] = useState(null)
  const isOpen = openedOn === pathname

  useEffect(() => {
    if (!isOpen) return

    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpenedOn(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setOpenedOn(null)

  return (
    <>
      <MenuToggle
        isOpen={isOpen}
        controls="navigation-principale"
        onToggle={() => setOpenedOn(isOpen ? null : pathname)}
      />

      <nav
        id="navigation-principale"
        className={cx(styles.nav, isOpen && styles.open)}
        aria-label="Navigation principale"
      >
        <ul className={styles.links}>
          {mainNavigation.map(({ href, label }) => {
            const isCurrent = isCurrentSection(pathname, href)

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cx(styles.link, isCurrent && styles.current)}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link href={appointmentLink.href} className={styles.cta} onClick={closeMenu}>
          {appointmentLink.label}
        </Link>
      </nav>
    </>
  )
}
