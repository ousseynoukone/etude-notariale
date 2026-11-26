'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/Button/Button'
import styles from './CopyButton.module.css'

const FEEDBACK_DURATION = 3000

export default function CopyButton({ value, label }) {
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (!feedback) return
    const timeout = setTimeout(() => setFeedback(''), FEEDBACK_DURATION)
    return () => clearTimeout(timeout)
  }, [feedback])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setFeedback('Numéro copié')
    } catch {
      setFeedback('Copie impossible : sélectionnez le numéro manuellement')
    }
  }

  return (
    <span className={styles.wrapper}>
      <Button variant="secondary" size="small" onClick={copy} aria-label={label}>
        Copier
      </Button>
      <span className={styles.feedback} role="status">
        {feedback}
      </span>
    </span>
  )
}
