import { CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { useCallback, useState, type FormEvent } from 'react'
import { submitContactForm, type ContactPayload } from '../../services/contact'
import { Turnstile } from './Turnstile'

const initialForm: ContactPayload = {
  firstName: '', lastName: '', company: '', zip: '', email: '', phone: '', employees: '', industry: '', referral: '', message: '', consent: false, website: '', turnstileToken: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const setTurnstileToken = useCallback((token: string) => setForm((current) => ({ ...current, turnstileToken: token })), [])

  const update = (field: keyof ContactPayload, value: string | boolean) => setForm((current) => ({ ...current, [field]: value }))

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await submitContactForm(form)
      setStatus('success')
      setMessage(result.demo ? 'Your form is working in demo mode. Connect VITE_CONTACT_API_URL before launch to deliver submissions.' : 'Thank you. Your request has been sent successfully.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>First name</span><input required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} autoComplete="given-name" /></label>
        <label><span>Last name</span><input required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} autoComplete="family-name" /></label>
        <label><span>Company name</span><input required value={form.company} onChange={(e) => update('company', e.target.value)} autoComplete="organization" /></label>
        <label><span>ZIP code</span><input required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" value={form.zip} onChange={(e) => update('zip', e.target.value)} autoComplete="postal-code" /></label>
        <label><span>Email</span><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" /></label>
        <label><span>Phone</span><input required type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} autoComplete="tel" /></label>
        <label><span>Number of employees</span><select required value={form.employees} onChange={(e) => update('employees', e.target.value)}><option value="">Select</option><option>0-4</option><option>5-24</option><option>25-49</option><option>50-99</option><option>100-199</option><option>200-499</option><option>500+</option></select></label>
        <label><span>Industry</span><select required value={form.industry} onChange={(e) => update('industry', e.target.value)}><option value="">Select</option><option>Retail dispensary</option><option>Cultivation or growing</option><option>Manufacturing or processing</option><option>Testing laboratory</option><option>Delivery services</option><option>Ancillary business</option><option>Other regulated business</option></select></label>
        <label className="form-grid__wide"><span>How did you hear about SkyHigh PEO?</span><select required value={form.referral} onChange={(e) => update('referral', e.target.value)}><option value="">Select</option><option>Internet search</option><option>Email campaign</option><option>Existing client referral</option><option>Social media</option><option>Other</option></select></label>
        <label className="form-grid__wide"><span>Tell us about your operation</span><textarea required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Locations, headcount, roles and what you would like help with." /></label>
        <label className="honeypot" aria-hidden="true"><span>Website</span><input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)} /></label>
      </div>
      <Turnstile onToken={setTurnstileToken} />
      <label className="consent"><input required type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} /><span>I agree that SkyHigh PEO may contact me about this request. Message and data rates may apply.</span></label>
      <button className="button button--submit" disabled={status === 'loading'} type="submit">{status === 'loading' ? <LoaderCircle className="spin" size={18} /> : <Send size={18} />} {status === 'loading' ? 'Sending...' : 'Send request'}</button>
      {message && <div className={`form-status form-status--${status}`} role="status">{status === 'success' && <CheckCircle2 size={19} />}{message}</div>}
    </form>
  )
}
