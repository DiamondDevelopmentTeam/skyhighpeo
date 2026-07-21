import { ArrowUpRight, CheckCircle2, Compass, Leaf, Network, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutOrbit from '../assets/images/about-orbit.svg'
import { Reveal } from '../components/motion/Reveal'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

export default function About() {
  return (
    <>
      <Seo title="About" description="Learn about SkyHigh PEO's Florida-focused approach to HR, payroll, benefits and compliance support for cannabis and CBD operators." />
      <PageHero eyebrow="About SkyHigh PEO" title="Florida roots. Cannabis-savvy people operations." description="Enterprise-level payroll, HR, benefits and compliance support for single-location operators and growing multi-location brands." />
      <section className="section">
        <div className="container split-grid">
          <Reveal className="split-copy">
            <span className="eyebrow">A more practical PEO relationship</span>
            <h2>Clear guidance, consistent execution and fewer surprises on payday.</h2>
            <p>SkyHigh PEO was built to bring coordinated people operations to Florida's CBD, cannabis and regulated-business community.</p>
            <p>Instead of stitching together disconnected vendors and spreadsheets, clients gain a more organized framework for payroll, employee records, benefits, workplace safety and ongoing HR support.</p>
            <Link className="button button--outline" to="/contact">Talk with our team <ArrowUpRight size={18} /></Link>
          </Reveal>
          <Reveal className="split-visual about-visual" delay={0.1}><img src={aboutOrbit} alt="Illustration of connected business systems" loading="lazy" /></Reveal>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container values-grid">
          {[
            { icon: Compass, title: 'Florida-first', text: 'Support shaped around operating realities in the Sunshine State and the locations where your team works.' },
            { icon: Leaf, title: 'Cannabis-ready', text: 'Familiarity with specialized roles, documentation needs and the pace of regulated businesses.' },
            { icon: Network, title: 'People plus platform', text: 'A dedicated support relationship backed by modern, repeatable tools and workflows.' },
            { icon: ShieldCheck, title: 'Compliance-focused', text: 'Clearer ownership, stronger records and practical review points throughout the employee lifecycle.' },
          ].map(({ icon: Icon, title, text }, index) => <Reveal className="value-card" key={title} delay={index * 0.07}><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>
      <section className="section section--dark">
        <div className="container why-grid">
          <Reveal><span className="eyebrow">Why a PEO</span><h2>A single operational backbone for the systems surrounding your people.</h2></Reveal>
          <Reveal delay={0.1}><p>Running a plant-touching or CBD business means balancing growth with tight controls, changing expectations and demanding partners. A PEO can consolidate key workforce functions into one managed relationship.</p><ul className="check-list">{['Reduce repetitive administrative work', 'Create more consistent employee experiences', 'Support hiring and retention with organized benefits', 'Improve documentation and policy discipline', 'Give leadership better visibility into workforce operations'].map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul></Reveal>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
