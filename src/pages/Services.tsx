import { Check, ChevronRight } from 'lucide-react'
import { Reveal } from '../components/motion/Reveal'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { services } from '../data/site'

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Explore SkyHigh PEO services for payroll, HR, benefits, workers' compensation, workplace safety, compliance, retirement and onboarding." />
      <PageHero eyebrow="Services" title="One service model. Every major people-operations lane." description="Coordinate the systems surrounding your workforce without losing control of daily business decisions." />
      <section className="section">
        <div className="container service-detail-list">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal className={`service-detail ${index % 2 ? 'service-detail--reverse' : ''}`} key={service.title}>
                <div className="service-detail__visual"><Icon /><span>0{index + 1}</span><i /></div>
                <div className="service-detail__copy"><span className="eyebrow">{service.shortTitle}</span><h2>{service.title}</h2><p>{service.description}</p><ul>{service.details.map((detail) => <li key={detail}><Check size={17} />{detail}</li>)}</ul><a className="text-link" href="#service-note">How implementation works <ChevronRight size={16} /></a></div>
              </Reveal>
            )
          })}
        </div>
      </section>
      <section className="section section--soft" id="service-note">
        <div className="container note-panel"><div><span className="eyebrow">Service note</span><h2>Scope is shaped around your operation.</h2></div><p>Available services, carriers, integrations and implementation timing may vary based on location, employee population, current systems and business requirements. SkyHigh PEO will confirm the final scope during the assessment process.</p></div>
      </section>
      <CallToAction />
    </>
  )
}
