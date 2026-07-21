import { ArrowDown, Building2, Check, Handshake, UserCog, Users } from 'lucide-react'
import { Reveal } from '../components/motion/Reveal'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

export default function PeoOverview() {
  return (
    <>
      <Seo title="PEO Overview" description="Understand the PEO co-employment model, shared responsibilities and how a PEO can support payroll, HR, benefits and risk administration." />
      <PageHero eyebrow="PEO overview" title="A simpler explanation of co-employment." description="You run the business. The PEO supports the administrative infrastructure surrounding your workforce." />
      <section className="section">
        <div className="container overview-flow">
          <Reveal className="overview-node overview-node--client"><Building2 /><span>Your company</span><p>Strategy, operations, customers and daily employee direction.</p></Reveal>
          <div className="overview-connector"><Handshake /><span>Co-employment relationship</span></div>
          <Reveal className="overview-node overview-node--peo" delay={0.1}><UserCog /><span>SkyHigh PEO</span><p>Payroll administration, HR support, benefits and risk services.</p></Reveal>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container responsibility-grid">
          <Reveal className="responsibility-card"><Users /><h2>You continue to control</h2><ul>{['Hiring and termination decisions', 'Daily supervision and scheduling', 'Products, services and customer experience', 'Business strategy and operating decisions', 'Worksite direction and performance expectations'].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></Reveal>
          <div className="responsibility-arrow"><ArrowDown /></div>
          <Reveal className="responsibility-card responsibility-card--green" delay={0.08}><UserCog /><h2>The PEO helps administer</h2><ul>{['Payroll processing and related tax administration', 'HR workflows, records and policy support', 'Benefits enrollment and administration', "Workers' compensation administration", 'Risk, safety and compliance support'].map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container benefit-tiles">
          {[
            ['More consistent systems', 'Replace improvised handoffs with documented, repeatable workflows.'],
            ['Less administrative drag', 'Give internal leaders more time to focus on operations and growth.'],
            ['Access to specialized support', 'Bring experienced payroll, HR, benefits and risk resources into the relationship.'],
            ['A stronger growth foundation', 'Create people infrastructure that can adapt as headcount and locations change.'],
          ].map(([title, text], index) => <Reveal className="benefit-tile" key={title} delay={index * 0.07}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>
      <CallToAction />
    </>
  )
}
