import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

type LegalProps = { type: 'privacy' | 'terms' }

export default function Legal({ type }: LegalProps) {
  const privacy = type === 'privacy'
  return (
    <>
      <Seo title={privacy ? 'Privacy Policy' : 'Terms of Use'} description={`${privacy ? 'Privacy policy' : 'Website terms'} for the SkyHigh PEO website.`} />
      <PageHero eyebrow="Website information" title={privacy ? 'Privacy Policy' : 'Terms of Use'} description="A launch-ready placeholder that should be reviewed and approved by company counsel before publication." />
      <section className="section"><div className="container legal-copy">{privacy ? <><h2>Information collected</h2><p>This website may collect information that you submit through forms, including your name, company, email address, phone number and details about your request.</p><h2>How information may be used</h2><p>Submitted information may be used to respond to inquiries, prepare service discussions, improve website performance and maintain appropriate business records.</p><h2>Security and retention</h2><p>Reasonable administrative and technical safeguards should be used. Final retention periods and data-handling practices must be confirmed before launch.</p><h2>Contact</h2><p>Questions about privacy practices may be directed to ceo@skyhighpeo.com.</p></> : <><h2>Website use</h2><p>This website provides general business information. Content may change and should not be treated as legal, tax, accounting, insurance or employment advice.</p><h2>No guarantees</h2><p>Descriptions of services do not guarantee availability, coverage, pricing or a specific outcome. Final terms are established through applicable agreements and carrier documents.</p><h2>Intellectual property</h2><p>SkyHigh PEO names, marks, approved content and assets remain the property of their respective owners. Unauthorized reuse may be prohibited.</p><h2>Governing documents</h2><p>These placeholder terms should be replaced or approved by company counsel before the production launch.</p></>}</div></section>
    </>
  )
}
