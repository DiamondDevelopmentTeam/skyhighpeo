import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import type { CSSProperties, PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import heroNetwork from '../assets/images/hero-network.svg'
import { Reveal } from '../components/motion/Reveal'
import { CallToAction } from '../components/ui/CallToAction'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Seo } from '../components/ui/Seo'
import { blogPosts, company, industries, processSteps, proofPoints, services } from '../data/site'

const ease = [0.22, 1, 0.36, 1] as const

const heroSequence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease } },
}

const cardSequence = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.72 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease } },
}

const workflow = [
  ['01', 'Review the operation', 'Map the current payroll, HR, benefits, and compliance workflows.'],
  ['02', 'Define clear ownership', 'Build a practical service plan around the people and systems already in place.'],
  ['03', 'Create a steady rhythm', 'Coordinate implementation around payroll timing and business priorities.'],
  ['04', 'Stay ready to adapt', 'Keep documentation, processes, and support aligned as the operation grows.'],
]

const complianceItems = [
  ['Employee handbook', 'Current', 'Reviewed'],
  ['Required workplace notices', 'Current', 'Verified'],
  ['Safety procedures', 'In review', 'Scheduled'],
  ['Policy acknowledgments', 'Current', 'Tracked'],
]

type ParallaxStyle = CSSProperties & {
  '--parallax-x': string
  '--parallax-y': string
}

export default function Home() {
  const reduceMotion = useReducedMotion()

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10
    event.currentTarget.style.setProperty('--parallax-x', `${x.toFixed(2)}px`)
    event.currentTarget.style.setProperty('--parallax-y', `${y.toFixed(2)}px`)
  }

  const resetParallax = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--parallax-x', '0px')
    event.currentTarget.style.setProperty('--parallax-y', '0px')
  }

  return (
    <>
      <Seo title="Florida Cannabis PEO" description="SkyHigh PEO centralizes payroll, HR, benefits, workers' compensation and compliance support for Florida cannabis and CBD businesses." />
      <section className="hero">
        <div className="container hero__grid">
          <motion.div className="hero__content" variants={heroSequence} initial="hidden" animate="visible">
            <motion.span className="eyebrow" variants={heroItem}>
              <span className="eyebrow__dot" /> Florida's CBD and cannabis PEO
            </motion.span>
            <motion.h1 aria-label="Built for compliance. Ready for growth." variants={heroItem}>
              <span className="hero__heading-line">Built for compliance.</span>
              <span className="hero__heading-line hero__heading-line--green">Ready for growth.</span>
            </motion.h1>
            <motion.p variants={heroItem}>
              From Miami to Jacksonville, SkyHigh PEO keeps HR, payroll, benefits and workplace compliance organized so your business can grow with confidence.
            </motion.p>
            <motion.div className="hero__actions" variants={heroItem}>
              <Link className="button" to="/contact">Get a free quote <ArrowUpRight size={18} /></Link>
              <Link className="button button--ghost" to="/services">Explore services <ArrowRight size={17} /></Link>
            </motion.div>
            <motion.div className="hero__trust" variants={heroItem}>
              <ShieldCheck size={20} />
              <span>Florida-focused support for regulated businesses</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.78, delay: 0.18, ease }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetParallax}
            style={{ '--parallax-x': '0px', '--parallax-y': '0px' } as ParallaxStyle}
          >
            <div className="hero__illustration">
              <div className="hero__visual-label"><span>Workforce operations</span><strong>Florida · Active</strong></div>
              <div className="hero__leaf-layer">
                <img src={heroNetwork} alt="A line-drawn cannabis leaf representing SkyHigh PEO's industry focus" />
              </div>
              <motion.div className="hero__cards" variants={cardSequence} initial="hidden" animate="visible">
                <motion.div className="float-card float-card--payroll" variants={cardItem}>
                  <div className="float-card__parallax">
                    <div className="float-card__top"><span>Payroll</span><i className="status-dot" /></div>
                    <strong>Next run · Ready</strong>
                    <small>42 employees · 2 locations</small>
                    <div className="mini-bars" aria-hidden="true"><i /><i /><i /><i /></div>
                  </div>
                </motion.div>
                <motion.div className="float-card float-card--compliance" variants={cardItem}>
                  <div className="float-card__parallax">
                    <div className="float-card__top"><span>Compliance review</span><FileCheck2 size={14} /></div>
                    <strong>Policies organized</strong>
                    <small><CheckCircle2 size={13} /> Review queue on track</small>
                  </div>
                </motion.div>
                <motion.div className="float-card float-card--benefits" variants={cardItem}>
                  <div className="float-card__parallax">
                    <div className="float-card__top"><span>Benefits</span><Clock3 size={14} /></div>
                    <strong>Enrollment active</strong>
                    <div className="progress-line"><i /></div>
                    <small>18 of 21 complete</small>
                  </div>
                </motion.div>
              </motion.div>
              <div className="hero__visual-caption">
                <span>Coordinated support</span>
                <strong>HR · Payroll · Benefits · Compliance</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="trust-strip" aria-label="SkyHigh PEO capabilities">
        <div className="container trust-strip__grid">
          {proofPoints.map(({ title, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.05} className="trust-item"><Icon size={19} /><span>{title}</span></Reveal>
          ))}
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <Reveal><SectionHeading eyebrow="One connected system" title="HR, payroll, benefits, and compliance in one place." description="Practical support for the systems and responsibilities that keep your workforce running." /></Reveal>
          <div className="service-grid">
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal className="service-card" key={service.title} delay={(index % 3) * 0.06}>
                  <div className="service-card__accent" />
                  <span className="service-card__number">0{index + 1}</span>
                  <div className="service-card__icon"><Icon /></div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.description}</p>
                  <Link to="/services">Learn more <ArrowUpRight size={16} /></Link>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="section-link-wrap"><Link className="button button--outline" to="/services">View all services <ArrowRight size={17} /></Link></Reveal>
        </div>
      </section>

      <section className="section section--dark why-editorial">
        <div className="container why-editorial__grid">
          <Reveal className="why-editorial__intro">
            <span className="eyebrow">Why SkyHigh PEO</span>
            <h2>Support built around your day-to-day operation.</h2>
            <p>SkyHigh PEO brings structure to the employee lifecycle, from the first offer letter to payroll, benefits, safety and ongoing documentation.</p>
            <Link className="text-link text-link--light" to="/about">Our approach <ArrowUpRight size={17} /></Link>
          </Reveal>
          <Reveal className="workflow-panel" delay={0.08}>
            <motion.div className="workflow-panel__line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }} />
            {workflow.map(([number, title, text], index) => (
              <motion.div className="workflow-step" key={title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.5, delay: index * 0.08, ease }}>
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section industries-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Industries served" title="Built for regulated workforces." description="Clear workflows, dependable service, and organized records for specialized teams." /></Reveal>
          <div className="industry-grid">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Reveal className={`industry-card industry-card--${(index % 3) + 1}`} key={industry.title} delay={(index % 3) * 0.06}>
                  <div className="industry-card__visual"><Icon /><span>0{index + 1}</span></div>
                  <div className="industry-card__body"><small>Regulated workforce</small><h3>{industry.title}</h3><p>{industry.description}</p></div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="container proof-grid">
          <Reveal className="proof-intro">
            <span className="eyebrow">Built for steadier operations</span>
            <h2>Clearer processes. Fewer loose ends.</h2>
            <p>SkyHigh PEO helps create a cleaner operating rhythm across the systems and responsibilities that touch your workforce.</p>
          </Reveal>
          {[
            ['One coordinated support team', 'A clearer path for payroll, HR, benefits and risk questions.'],
            ['Multi-location capability', 'Processes that can follow the business as locations and teams expand.'],
            ['Compliance-focused workflows', 'More consistent documentation, ownership and review points.'],
            ['Scalable HR infrastructure', 'A foundation designed to support the next stage of growth.'],
          ].map(([title, text], index) => <Reveal className="proof-card" key={title} delay={index * 0.05}><Check size={18} /><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>

      <section className="section section--compliance">
        <div className="container compliance-grid">
          <Reveal className="compliance-copy">
            <span className="eyebrow">Inspection-ready people operations</span>
            <h2>Keep policies, records, and workplace practices organized.</h2>
            <p>Structured reviews help surface policy gaps, incomplete documentation and inconsistent practices before they become urgent.</p>
            <ul className="check-list">
              {['HR audits and policy gap analysis', 'Wage, scheduling and leave practice reviews', 'Required document and posting checklists', 'Workplace safety and incident procedures', 'Audit and inspection preparation support'].map((item) => <li key={item}><Check size={17} />{item}</li>)}
            </ul>
            <Link className="button button--outline-light" to="/services">Explore compliance support <ArrowRight size={17} /></Link>
          </Reveal>
          <Reveal className="compliance-console" delay={0.1}>
            <div className="compliance-console__header">
              <div><small>Compliance workspace</small><strong>Policy & document review</strong></div>
              <span><i /> Operational</span>
            </div>
            <div className="compliance-console__summary"><ShieldCheck /><div><strong>Review status</strong><span>Core items organized and monitored</span></div></div>
            <motion.div className="compliance-console__list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
              {complianceItems.map(([name, status, action]) => (
                <motion.div key={name} variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } } }}>
                  <CheckCircle2 /><div><strong>{name}</strong><small>{action}</small></div><span className={status === 'In review' ? 'is-review' : ''}>{status}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="compliance-console__footer"><span>Illustrative workflow</span><span>Secure review cadence</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="A clearer way forward" title="A practical onboarding process." description="A clear path from the first conversation through implementation and ongoing support." /></Reveal>
          <div className="process-track">
            <motion.div className="process-track__line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, ease }} />
            {processSteps.map((step, index) => (
              <Reveal className="process-step" key={step.number} delay={index * 0.08}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-preview">
        <div className="container">
          <Reveal className="section-heading-row"><SectionHeading eyebrow="Insights" title="HR guidance for regulated businesses." /><Link className="text-link" to="/blog">View all articles <ArrowUpRight size={16} /></Link></Reveal>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal className="blog-card" key={post.slug} delay={index * 0.06}>
                <div className={`blog-card__art blog-card__art--${index + 1}`}><span>{post.category}</span></div>
                <div className="blog-card__body"><div className="blog-card__meta"><span>{post.date}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <a className="floating-call" href={company.phoneHref} aria-label={`Call SkyHigh PEO at ${company.phone}`}><Phone size={20} /></a>
    </>
  )
}
