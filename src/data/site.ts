import {
  BadgeCheck,
  Banknote,
  Beaker,
  Boxes,
  Building2,
  Calculator,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FlaskConical,
  HeartHandshake,
  Leaf,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react'
import type { BlogPost, Faq, Industry, NavItem, Service } from '../types'

export const company = {
  name: 'SkyHigh PEO',
  phone: '(800) 420-7931',
  phoneHref: 'tel:+18004207931',
  email: 'ceo@skyhighpeo.com',
  emailHref: 'mailto:ceo@skyhighpeo.com',
  address: '1026 SW 9th St, Suite F, Ocala, FL 34471',
  hours: 'Monday through Friday, 8:00 a.m. to 5:00 p.m.',
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'PEO Overview', to: '/peo-overview' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const services: Service[] = [
  {
    title: 'Payroll and Tax Administration',
    shortTitle: 'Payroll',
    description: 'Accurate payroll, tax filings and practical reporting for growing, multi-location teams.',
    details: ['Payroll processing and direct deposit', 'Payroll tax administration', 'W-2 and 1099 support', 'Location-level and job-cost reporting'],
    icon: Calculator,
  },
  {
    title: 'HR and People Operations',
    shortTitle: 'People Operations',
    description: 'A stronger employee lifecycle, from recruiting and onboarding to policies and daily HR support.',
    details: ['Offer letters and onboarding workflows', 'Employee handbooks and policy support', 'PTO, leave and attendance guidance', 'Employee relations support'],
    icon: UsersRound,
  },
  {
    title: 'Benefits and Enrollment',
    shortTitle: 'Benefits',
    description: 'Organized enrollment and employee support designed to help you attract and retain talent.',
    details: ['Plan access through PEO scale', 'Open enrollment coordination', 'Eligibility tracking', 'COBRA administration support'],
    icon: HeartHandshake,
  },
  {
    title: "Workers' Compensation",
    shortTitle: "Workers' Comp",
    description: 'Coverage administration, incident procedures and claims coordination built around the realities of your workplace.',
    details: ['Policy administration', 'Claims coordination', 'Return-to-work planning', 'Incident documentation workflows'],
    icon: ShieldCheck,
  },
  {
    title: 'Risk and Workplace Safety',
    shortTitle: 'Risk and Safety',
    description: 'Practical safety programs that make expectations clearer and records easier to maintain.',
    details: ['Safety program development', 'Required posting guidance', 'Supervisor procedures', 'Recordkeeping support'],
    icon: ClipboardCheck,
  },
  {
    title: 'Compliance Reviews',
    shortTitle: 'Compliance',
    description: 'Structured reviews that help identify policy gaps and prepare your people operations for closer scrutiny.',
    details: ['HR audits and policy gap analysis', 'Wage and hour practice review', 'Documentation checklists', 'Audit preparation support'],
    icon: FileCheck2,
  },
  {
    title: 'Retirement Plans',
    shortTitle: 'Retirement',
    description: 'A coordinated path to retirement benefits that fits into the rest of your people operations.',
    details: ['Plan coordination', 'Employee education support', 'Enrollment administration', 'Payroll integration'],
    icon: Banknote,
  },
  {
    title: 'Recruiting and Onboarding',
    shortTitle: 'Onboarding',
    description: 'Repeatable hiring workflows that keep new employees moving and documentation organized.',
    details: ['Candidate and offer workflows', 'New-hire packets', 'Background check coordination where compliant', 'Policy acknowledgments'],
    icon: UserRoundCheck,
  },
]

export const industries: Industry[] = [
  { title: 'Retail Dispensaries', description: 'Multi-location staffing, payroll and policy support for customer-facing teams.', icon: Store },
  { title: 'Delivery Services', description: 'Organized workforce practices for mobile teams and permitted delivery operations.', icon: Truck },
  { title: 'Cultivators and Growers', description: 'People operations for production environments, seasonal needs and specialized roles.', icon: Leaf },
  { title: 'Product Manufacturers', description: 'Workforce structure for processing, packaging and quality-focused operations.', icon: Factory },
  { title: 'Testing Laboratories', description: 'HR and compliance support for technical, research and laboratory teams.', icon: FlaskConical },
  { title: 'Ancillary Businesses', description: 'Scalable HR infrastructure for service providers supporting the industry.', icon: Building2 },
]

export const proofPoints = [
  { title: 'Florida-focused support', icon: Sparkles },
  { title: 'Multi-location payroll', icon: ReceiptText },
  { title: 'HR compliance guidance', icon: BadgeCheck },
  { title: 'Benefits administration', icon: HeartHandshake },
  { title: 'Workplace safety support', icon: ShieldCheck },
]

export const processSteps = [
  { number: '01', title: 'Assess', text: 'Share your locations, headcount, roles, current workflows and priorities.' },
  { number: '02', title: 'Configure', text: 'We shape the service plan around payroll, benefits and compliance needs.' },
  { number: '03', title: 'Launch', text: 'Implementation is coordinated around your payroll cycle and operating rhythm.' },
  { number: '04', title: 'Support', text: 'Ongoing guidance stays available as your workforce and operation change.' },
]

export const faqs: Faq[] = [
  {
    category: 'PEO Basics',
    question: 'What is a PEO?',
    answer: 'A professional employer organization partners with your business to help administer payroll, HR, benefits and workers’ compensation through a co-employment model. You continue to control daily operations and business decisions while the PEO supports the people-operations infrastructure.',
  },
  {
    category: 'PEO Basics',
    question: 'Who does SkyHigh PEO serve?',
    answer: 'SkyHigh PEO is focused on CBD retailers, licensed cannabis operators, cultivation and processing businesses, manufacturers, laboratories, permitted delivery operations, multi-location groups and ancillary businesses that support the industry.',
  },
  {
    category: 'Payroll',
    question: 'Can you support multiple locations and different pay structures?',
    answer: 'Yes. The service model can support multi-location payroll, reporting, overtime, garnishments and role-specific pay practices. The final setup depends on your workforce, systems and operating locations.',
  },
  {
    category: 'HR and Compliance',
    question: 'Can SkyHigh PEO help with onboarding and employee documents?',
    answer: 'Yes. Support may include offer letters, new-hire packets, policy acknowledgments, onboarding workflows and background check coordination where permitted and appropriate.',
  },
  {
    category: 'HR and Compliance',
    question: 'Do you provide legal or tax advice?',
    answer: 'SkyHigh PEO provides HR compliance guidance and operational best practices, but it is not a law firm or accounting firm. Your attorney or tax professional should provide final legal and tax advice.',
  },
  {
    category: 'Benefits',
    question: 'Can you help organize employee benefits and enrollment?',
    answer: 'Yes. SkyHigh PEO can coordinate enrollment, eligibility tracking, employee support and related administration based on available plans and your company’s needs.',
  },
  {
    category: "Workers' Compensation",
    question: "What support is available for workers' compensation and safety?",
    answer: 'Support may include policy administration, claims coordination, incident procedures, return-to-work planning, safety programs and recordkeeping guidance.',
  },
  {
    category: 'Getting Started',
    question: 'How long does onboarding take?',
    answer: 'Many onboarding projects can be completed in a few weeks. Timing depends on employee count, locations, payroll cycles, benefits timing and how quickly required information is provided.',
  },
  {
    category: 'Getting Started',
    question: 'What information should we prepare?',
    answer: 'Typical setup information includes entity details, FEIN, recent payroll reports, employee census data, current workers’ compensation and benefits information, operating locations, pay frequencies and approval contacts.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'peo-before-first-hire',
    title: 'Why Cannabis Startups Should Partner With a PEO Before the First Hire',
    excerpt: 'Build payroll, onboarding and compliance workflows before rapid growth turns small gaps into expensive problems.',
    category: 'Startups',
    date: 'April 10, 2026',
    readTime: '6 min read',
    content: [
      'The first hire changes a business. Payroll deadlines begin, documents multiply and the company becomes responsible for a growing set of employment obligations.',
      'A PEO can help a new operator build repeatable workflows before the team expands. That can include payroll timing, onboarding packets, policy acknowledgments, benefits planning and incident procedures.',
      'Starting early also makes it easier to select systems that work together. Instead of rebuilding the same process after every growth spurt, the company begins with a structure designed to scale.',
    ],
  },
  {
    slug: 'workplace-culture-cannabis',
    title: 'How to Build a Thriving Workplace Culture in the Cannabis Sector',
    excerpt: 'Clear expectations, consistent management and dependable people systems create room for employees to do strong work.',
    category: 'People Operations',
    date: 'February 7, 2025',
    readTime: '5 min read',
    content: [
      'Culture is not a poster in the break room. It is the pattern employees experience when they are hired, trained, scheduled, paid and supported.',
      'Operators can strengthen culture by documenting expectations, training supervisors and creating reliable channels for questions and concerns.',
      'Consistent payroll and benefits administration also matter. Trust is easier to build when employees know the basics will be handled accurately and on time.',
    ],
  },
  {
    slug: 'navigating-hr-challenges',
    title: 'Navigating HR Challenges in a Fast-Moving Industry',
    excerpt: 'A practical framework for reducing administrative friction while keeping documentation and policies organized.',
    category: 'Compliance',
    date: 'December 8, 2024',
    readTime: '7 min read',
    content: [
      'Fast-growing businesses often develop people processes one emergency at a time. The result can be inconsistent records, unclear approvals and uneven employee experiences.',
      'The first step is to map the employee lifecycle from recruiting through separation. Each handoff should have a clear owner, required documentation and a defined system of record.',
      'Regular reviews help identify gaps before a payroll deadline, claim or audit brings them into sharper focus.',
    ],
  },
  {
    slug: 'workers-comp-claims',
    title: "A More Organized Approach to Workers' Compensation Claims",
    excerpt: 'Preparation, timely reporting and return-to-work planning can make difficult moments easier to manage.',
    category: 'Risk and Safety',
    date: 'November 2, 2024',
    readTime: '5 min read',
    content: [
      'A workplace incident requires calm, clear action. Employees and supervisors should know who to contact, what to document and how to report the event promptly.',
      'A written incident process helps reduce confusion. It should cover immediate care, internal notification, documentation and follow-up responsibilities.',
      'Return-to-work planning can also support a safer, more structured recovery when appropriate for the employee and the role.',
    ],
  },
  {
    slug: 'employee-incentive-programs',
    title: 'Designing Employee Incentive Programs That Support the Business',
    excerpt: 'Incentives work best when goals are measurable, understandable and connected to the employee’s real responsibilities.',
    category: 'People Operations',
    date: 'August 1, 2024',
    readTime: '4 min read',
    content: [
      'A useful incentive program starts with a clear business goal. It should reward outcomes employees can influence and avoid creating pressure to cut corners.',
      'Document eligibility, measurement periods, approvals and payment timing. Managers should be able to explain the program consistently.',
      'Review the program after each cycle to determine whether it improved the intended outcome and remained practical to administer.',
    ],
  },
  {
    slug: 'simplify-hr-processes',
    title: 'How to Simplify Human Resources Processes Without Losing Control',
    excerpt: 'Centralized systems and clear ownership can reduce repetitive work while keeping leadership informed.',
    category: 'Operations',
    date: 'October 5, 2023',
    readTime: '6 min read',
    content: [
      'Simplification begins by reducing duplicate entry and unclear handoffs. Payroll, onboarding, benefits and employee records should connect through a documented process.',
      'Leadership still keeps control of hiring decisions, scheduling, performance and business direction. The administrative layer becomes easier to manage and measure.',
      'The goal is not to remove human judgment. It is to give that judgment better information and fewer avoidable interruptions.',
    ],
  },
]

export const resourceCards = [
  { title: 'PEO Overview', type: 'Guide', description: 'A concise introduction to the PEO model, shared responsibilities and common service areas.', icon: Boxes },
  { title: 'Cannabis HR Readiness Checklist', type: 'Checklist', description: 'A practical list for reviewing employee files, policies, payroll and workplace postings.', icon: PackageCheck },
  { title: 'Payroll Transition Worksheet', type: 'Worksheet', description: 'Organize locations, pay frequencies, employee data and approval contacts before implementation.', icon: ReceiptText },
  { title: 'Incident Response Quick Guide', type: 'Guide', description: 'A simple framework for immediate response, documentation and internal follow-up.', icon: ShieldCheck },
  { title: 'New-Hire Documentation Map', type: 'Checklist', description: 'Track offer, onboarding, policy acknowledgement and system access steps in one place.', icon: UserRoundCheck },
  { title: 'Compliance Review Planner', type: 'Worksheet', description: 'Prepare for a structured review of policies, wage practices, records and required notices.', icon: FileCheck2 },
]

export const serviceIconSet = { Beaker, Boxes, ShoppingBag }
