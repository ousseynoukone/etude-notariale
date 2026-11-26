import { toMailHref, toTelHref } from '@/lib/format'
import styles from './StaffTable.module.css'

export default function StaffTable({ staff }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className="visually-hidden">Services de l’office et interlocuteurs</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Interlocuteur</th>
            <th scope="col">Ligne directe</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.service}>
              <th scope="row">{member.service}</th>
              <td data-label="Interlocuteur">{member.contact}</td>
              <td data-label="Ligne directe">
                <a href={toTelHref(member.phone)} className={styles.phone}>
                  {member.phone}
                </a>
              </td>
              <td data-label="E-mail">
                <a href={toMailHref(member.email)}>{member.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
