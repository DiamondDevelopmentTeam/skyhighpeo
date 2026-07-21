import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { company, navItems } from '../../data/site'
import { Logo } from '../ui/Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const focusable = menu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        requestAnimationFrame(() => toggleRef.current?.focus())
        return
      }
      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Logo compact={scrolled} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="header-phone" href={company.phoneHref}><Phone size={17} /> <span>{company.phone}</span></a>
          <NavLink className="button button--small" to="/contact">Free quote</NavLink>
          <button ref={toggleRef} className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div ref={menuRef} id="mobile-navigation" className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.24 }}>
            <nav className="container" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                  <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'is-active' : ''}>{item.label}</NavLink>
                </motion.div>
              ))}
              <a className="mobile-menu__phone" href={company.phoneHref}><Phone size={18} /> {company.phone}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
