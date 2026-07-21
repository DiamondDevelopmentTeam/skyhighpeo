import { ArrowUpRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data/site'
import { Reveal } from '../motion/Reveal'

export function CallToAction() {
  return (
    <section className="section section--cta">
      <div className="container">
        <Reveal className="cta-panel">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>Make compliance the easiest part of your day.</h2>
            <p>Tell us about your locations, headcount and goals. We will help map a practical path forward.</p>
          </div>
          <div className="cta-panel__actions">
            <Link className="button button--light" to="/contact">Request a free quote <ArrowUpRight size={18} /></Link>
            <a className="cta-panel__phone" href={company.phoneHref}><Phone size={17} /> Or call {company.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
