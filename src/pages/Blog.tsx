import { ArrowUpRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/motion/Reveal'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { blogPosts } from '../data/site'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))]
  const posts = useMemo(() => blogPosts.filter((post) => (category === 'All' || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  const featured = blogPosts[0]

  return (
    <>
      <Seo title="Blog" description="SkyHigh PEO insights on payroll, HR, compliance, workplace safety and people operations for regulated businesses." />
      <PageHero eyebrow="Insights" title="People-operations guidance for a fast-moving industry." description="Practical ideas for building cleaner systems, stronger records and a better employee experience." />
      <section className="section blog-page">
        <div className="container">
          <Reveal className="featured-post"><div className="featured-post__art"><span>Featured</span><i /><i /><i /></div><div><span className="eyebrow">{featured.category}</span><h2>{featured.title}</h2><p>{featured.excerpt}</p><div className="blog-card__meta"><span>{featured.date}</span><span>{featured.readTime}</span></div><Link className="button button--outline" to={`/blog/${featured.slug}`}>Read featured article <ArrowUpRight size={18} /></Link></div></Reveal>
          <div className="blog-controls"><label><Search size={18} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" /></label><div>{categories.map((item) => <button type="button" className={category === item ? 'is-active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
          <div className="blog-grid blog-grid--page">{posts.map((post, index) => <Reveal className="blog-card" key={post.slug} delay={(index % 3) * 0.06}><div className={`blog-card__art blog-card__art--${(index % 3) + 1}`}><span>{post.category}</span></div><div className="blog-card__body"><div className="blog-card__meta"><span>{post.date}</span><span>{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link></div></Reveal>)}</div>
        </div>
      </section>
    </>
  )
}
