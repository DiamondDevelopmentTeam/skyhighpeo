import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/forms/ContactForm'
import { Reveal } from '../components/motion/Reveal'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { company } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description="Request a free quote from SkyHigh PEO or contact the Ocala, Florida office by phone or email." />
      <PageHero eyebrow="Contact SkyHigh PEO" title="Tell us about your operation." description="Share your locations, headcount, roles and goals. We will map a right-sized service plan and next steps." />
      <section className="section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-panel"><span className="eyebrow">Get a free quote</span><h2>Start with the details that matter.</h2><p>The more context you provide, the better prepared the team can be for the first conversation.</p><ContactForm /></Reveal>
          <Reveal className="contact-sidebar" delay={0.1}><div className="contact-sidebar__glow" /><span className="eyebrow">Corporate office</span><h2>SkyHigh PEO</h2><div className="contact-method"><Phone /><div><small>Call</small><a href={company.phoneHref}>{company.phone}</a></div></div><div className="contact-method"><Mail /><div><small>Email</small><a href={company.emailHref}>{company.email}</a></div></div><div className="contact-method"><MapPin /><div><small>Visit</small><span>{company.address}</span></div></div><div className="contact-method"><Clock3 /><div><small>Office hours</small><span>{company.hours}</span></div></div><div className="map-placeholder"><MapPin /><span>Ocala, Florida</span><small>Add an approved map embed before launch.</small></div></Reveal>
        </div>
      </section>
    </>
  )
}
