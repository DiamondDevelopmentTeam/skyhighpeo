import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void; theme: string }) => string
      remove: (widgetId: string) => void
    }
  }
}

type TurnstileProps = { onToken: (token: string) => void }

export function Turnstile({ onToken }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey || !containerRef.current) return
    const scriptId = 'cloudflare-turnstile-script'
    let widgetId = ''

    const render = () => {
      if (window.turnstile && containerRef.current && !containerRef.current.dataset.rendered) {
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onToken,
          'expired-callback': () => onToken(''),
          theme: 'dark',
        })
        containerRef.current.dataset.rendered = 'true'
      }
    }

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null
    if (existing) render()
    else {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.onload = render
      document.head.appendChild(script)
    }

    return () => {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
    }
  }, [onToken, siteKey])

  if (!siteKey) {
    return <div className="turnstile-placeholder">Cloudflare Turnstile will appear here after a site key is added.</div>
  }

  return <div ref={containerRef} className="turnstile-widget" />
}
