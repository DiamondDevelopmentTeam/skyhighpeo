import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, navItems, services } from '../../data/site'
import { Logo } from '../ui/Logo'

export function Footer() {
  const companyLinks = navItems.filter((item) => ['/', '/about', '/peo-overview', '/contact'].includes(item.to))
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>Payroll, HR, benefits, workers' compensation and compliance support for modern cannabis, CBD and regulated businesses.</p>
          <Link className="text-link" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div>
          <h3>Company</h3>
          <ul>{companyLinks.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>{services.slice(0, 6).map((service) => <li key={service.shortTitle}><Link to="/services">{service.shortTitle}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul><li><Link to="/resources">Resource Center</Link></li><li><Link to="/faqs">FAQs</Link></li><li><Link to="/blog">Insights</Link></li><li><Link to="/privacy">Privacy Policy</Link></li><li><Link to="/terms">Terms of Use</Link></li></ul>
        </div>
        <div className="site-footer__contact">
          <h3>Contact</h3>
          <a href={company.phoneHref}><Phone size={17} /> {company.phone}</a>
          <a href={company.emailHref}><Mail size={17} /> {company.email}</a>
          <span><MapPin size={17} /> {company.address}</span>
          <p>{company.hours}</p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} SkyHigh PEO. All rights reserved.</span>
        <div><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link></div>
      </div>
    </footer>
  )
}
