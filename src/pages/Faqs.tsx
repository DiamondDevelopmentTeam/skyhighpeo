import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CallToAction } from '../components/ui/CallToAction'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { faqs } from '../data/site'

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(0)
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => faqs.filter((faq) => `${faq.category} ${faq.question} ${faq.answer}`.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <>
      <Seo title="Frequently Asked Questions" description="Answers to common questions about PEO services, payroll, HR, benefits, compliance, workers' compensation and onboarding." />
      <PageHero eyebrow="Frequently asked questions" title="Clear answers, minus the alphabet soup." description="Learn how the PEO relationship works and what to expect when exploring a partnership with SkyHigh PEO." />
      <section className="section">
        <div className="container faq-layout">
          <aside><span className="eyebrow">Search the library</span><h2>What would you like to know?</h2><label className="faq-search"><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search questions" aria-label="Search frequently asked questions" /></label><p>Still not finding it? The SkyHigh PEO team can walk through your specific operation.</p></aside>
          <div className="faq-list">
            {filtered.map((faq) => {
              const index = faqs.indexOf(faq)
              const isOpen = open === index
              return <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={faq.question}><button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}><span><small>{faq.category}</small>{faq.question}</span><ChevronDown /></button><AnimatePresence initial={false}>{isOpen && <motion.div className="faq-item__answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence></div>
            })}
            {!filtered.length && <div className="empty-state">No questions matched “{query}”. Try a broader phrase.</div>}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
