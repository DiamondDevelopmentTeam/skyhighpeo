import { motion } from 'framer-motion'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <motion.div
        className="container page-hero__inner"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.span className="eyebrow" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.52 } } }}>{eyebrow}</motion.span>
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.64 } } }}>{title}</motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.58 } } }}>{description}</motion.p>
      </motion.div>
    </section>
  )
}
