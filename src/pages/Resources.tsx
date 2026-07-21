import { ArrowDownToLine, FileText } from 'lucide-react'
import { Reveal } from '../components/motion/Reveal'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { resourceCards } from '../data/site'

export default function Resources() {
  return (
    <>
      <Seo title="Resources" description="Browse SkyHigh PEO guides, checklists and planning resources for payroll, onboarding, compliance and workplace safety." />
      <PageHero eyebrow="Resources" title="Useful tools for cleaner people operations." description="A modern resource center prepared for approved SkyHigh PEO brochures, flyers, checklists and educational downloads." />
      <section className="section">
        <div className="container resource-grid">
          {resourceCards.map((resource, index) => {
            const Icon = resource.icon
            return <Reveal className="resource-card" key={resource.title} delay={(index % 3) * 0.06}><div className="resource-card__top"><Icon /><span>{resource.type}</span></div><h3>{resource.title}</h3><p>{resource.description}</p><button type="button" disabled title="Add the approved PDF to enable this download"><ArrowDownToLine size={17} /> Coming soon</button></Reveal>
          })}
        </div>
      </section>
      <section className="section section--soft">
        <div className="container resource-note"><FileText /><div><span className="eyebrow">Ready for approved files</span><h2>No broken download buttons.</h2><p>Place approved PDFs in <code>public/downloads</code>, then update the resource links in <code>src/data/site.ts</code>. The current cards stay clearly marked as coming soon until real files are supplied.</p></div></div>
      </section>
      <CallToAction />
    </>
  )
}
