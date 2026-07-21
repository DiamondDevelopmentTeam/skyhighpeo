import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/ui/Seo'
import { blogPosts } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return <Navigate to="/blog" replace />
  const related = blogPosts.filter((item) => item.slug !== slug).slice(0, 2)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <article className="article-page">
        <header className="article-hero"><div className="container article-hero__inner"><Link to="/blog"><ArrowLeft size={17} /> Back to insights</Link><span className="eyebrow">{post.category}</span><h1>{post.title}</h1><p>{post.excerpt}</p><div><span>{post.date}</span><span>{post.readTime}</span></div></div></header>
        <div className="container article-body">{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="article-note"><strong>Important note</strong><p>This article provides general information and is not legal, tax or accounting advice. Consult the appropriate licensed professional for guidance specific to your organization.</p></div></div>
        <section className="container related-posts"><h2>Continue reading</h2><div>{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.category}</span><h3>{item.title}</h3><ArrowRight /></Link>)}</div></section>
      </article>
    </>
  )
}
