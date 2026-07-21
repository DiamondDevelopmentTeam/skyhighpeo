import { useEffect } from 'react'

type SeoProps = { title: string; description: string }

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | SkyHigh PEO`
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', description)
  }, [title, description])

  return null
}
