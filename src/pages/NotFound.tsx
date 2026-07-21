import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'

export default function NotFound() {
  return <section className="not-found"><Seo title="Page Not Found" description="The requested SkyHigh PEO page could not be found." /><div><span>404</span><h1>This page drifted out of range.</h1><p>The link may have changed, but the main site is still ready for takeoff.</p><Link className="button" to="/"><ArrowLeft size={18} /> Back to home</Link></div></section>
}
