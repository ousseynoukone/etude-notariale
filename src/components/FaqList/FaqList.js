import styles from './FaqList.module.css'

export default function FaqList({ questions }) {
  return (
    <div className={styles.list}>
      {questions.map(({ question, answer }) => (
        <details key={question} className={styles.item}>
          <summary className={styles.question}>
            <span>{question}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <p className={styles.answer}>{answer}</p>
        </details>
      ))}
    </div>
  )
}
