import { Link } from 'react-router-dom'

type LogoProps = { compact?: boolean }

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link className={`brand ${compact ? 'brand--compact' : ''}`} to="/" aria-label="SkyHigh PEO home">
      <svg className="brand__mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="18" />
        <g className="brand__leaf">
          <path d="M32 53V30" />
          <path d="M32 31C28 24 28 14 32 7C36 14 36 24 32 31Z" />
          <path d="M29.5 34C22 30 17 22 17 15C24 18 29 26 29.5 34Z" />
          <path d="M34.5 34C42 30 47 22 47 15C40 18 35 26 34.5 34Z" />
          <path d="M29 37C20 36 13 31 10 24C19 24 26 30 29 37Z" />
          <path d="M35 37C44 36 51 31 54 24C45 24 38 30 35 37Z" />
          <path d="M29.5 40C22 43 15 41 11 36C19 33 26 35 29.5 40Z" />
          <path d="M34.5 40C42 43 49 41 53 36C45 33 38 35 34.5 40Z" />
        </g>
      </svg>
      <span className="brand__copy">
        <strong>SkyHigh</strong>
        <span>PEO</span>
      </span>
    </Link>
  )
}
