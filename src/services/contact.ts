export type ContactPayload = {
  firstName: string
  lastName: string
  company: string
  zip: string
  email: string
  phone: string
  employees: string
  industry: string
  referral: string
  message: string
  consent: boolean
  website?: string
  turnstileToken?: string
}

export async function submitContactForm(payload: ContactPayload) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL

  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 900))
    return { ok: true, demo: true }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('The request could not be sent. Please try again or call our office.')
  }

  return { ok: true, demo: false }
}
