import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  to: string
}

export type Service = {
  title: string
  shortTitle: string
  description: string
  details: string[]
  icon: LucideIcon
}

export type Industry = {
  title: string
  description: string
  icon: LucideIcon
}

export type Faq = {
  category: string
  question: string
  answer: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content: string[]
}
