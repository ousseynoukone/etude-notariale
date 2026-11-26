import AppointmentBand from '@/components/AppointmentBand/AppointmentBand'
import DomainSection from '@/components/DomainSection/DomainSection'
import FaqList from '@/components/FaqList/FaqList'
import PageHeader from '@/components/PageHeader/PageHeader'
import Section from '@/components/Section/Section'
import SectionHeading from '@/components/SectionHeading/SectionHeading'
import { domains } from '@/data/domains'
import { faq } from '@/data/faq'
import { photos } from '@/data/photos'
import styles from './page.module.css'

export const metadata = {
  title: 'Domaines d’intervention',
  description:
    'Immobilier, famille, succession, donation et testament, patrimoine, entreprise et rural : les actes reçus par l’office et les questions fréquentes.',
}

export default function DomainsPage() {
  return (
    <>
      <PageHeader
        title="Domaines d’intervention"
        crumb="Domaines"
        lead="Les notaires de l’office reçoivent les actes de la vie familiale, immobilière et professionnelle, et conseillent chaque partie avant la signature."
        photo={photos.lawBooks}
      />

      <div className="container">
        <nav aria-label="Domaines" className={styles.index}>
          <ul>
            {domains.map((domain) => (
              <li key={domain.id}>
                <a href={`#${domain.id}`}>{domain.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {domains.map((domain, index) => (
          <DomainSection key={domain.id} domain={domain} index={index} reversed={index % 2 === 1} />
        ))}
      </div>

      <Section tone="tint" narrow aria-labelledby="faq-titre">
        <SectionHeading id="faq-titre" eyebrow="Questions fréquentes" title="Vos questions">
          <p>Réponses générales, à vérifier selon votre situation lors d’un rendez-vous.</p>
        </SectionHeading>
        <FaqList questions={faq} />
      </Section>

      <AppointmentBand />
    </>
  )
}
