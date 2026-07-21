import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  useEffect(() => {
    const updateVisibility = () => {
      document.documentElement.toggleAttribute('data-page-hidden', document.hidden)
    }
    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  )
}
