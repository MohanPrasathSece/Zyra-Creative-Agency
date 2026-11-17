import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { portfolio, projects, scenes } from "@/content/portfolio";
import { ProjectDemo } from "@/components/portfolio/project-demo";
import { DeviceFrame } from "@/components/portfolio/project-art";
import { ContactLink, CopyEmail, TrickButton } from "@/components/portfolio/runtime";
import { ShootingStar } from "@/components/portfolio/shooting-star";
import { Pinwheel } from "@/components/portfolio/pinwheel";
import { site, siteUrl } from "@/content/seo";

export const metadata: Metadata = {
  title: `${site.name} | Website Design & Development Company in Coimbatore`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.name} | Website Design & Development Company in Coimbatore`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Website Design & Development Company in Coimbatore`,
    description: site.description,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: site.name,
  image: `${siteUrl}/icon.svg`,
  description: site.description,
  url: siteUrl,
  telephone: "",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.addressCountry,
  },
  areaServed: [
    { "@type": "City", name: site.location.city },
    { "@type": "State", name: site.location.region },
    { "@type": "Country", name: site.location.country },
  ],
  founder: { "@type": "Person", name: portfolio.founder.name },
  knowsAbout: site.services,
};

export default function Home() {
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
    <section className="hero grid-surface" data-character="hero" data-tour="hero" aria-labelledby="hero-heading">
      <header className="site-header"><a className="identity" href="#main"><Pinwheel className="identity-mark" /><span className="identity-copy"><strong>{portfolio.name}</strong><span>{portfolio.title}</span></span></a><ContactLink className="pill">Get in touch <span aria-hidden="true">↓</span></ContactLink></header>
      <h1 id="hero-heading"><span className="hero-firstline">{portfolio.headline.firstLine}</span><br />{portfolio.headline.secondLine}<br /><em>{portfolio.headline.emphasis}</em></h1>
      <div className="hero-footer"><span>Good websites.<br />Good ideas. No nonsense.</span><a href="#about" className="scroll-cue">Selected work <span aria-hidden="true">↓</span></a></div>
    </section>
    <section id="about" className="introduction grid-surface" data-character="intro" data-tour="left" aria-label="About Zyra Digitals">
      <p className="bio-copy" aria-label={portfolio.biography}>{portfolio.biography.split(" ").map((word, index) => <span className="bio-word" key={index} aria-hidden="true">{word}{" "}</span>)}</p>
      <div className="intro-note"><span>A creative digital agency.</span><span>Selected work ↓</span></div>
    </section>
    {projects.slice(0, 3).map((project, index) => <section key={project.slug} id={scenes[index].id} className={`project-chapter grid-surface chapter-${index}`} data-character={scenes[index].id} data-tour={scenes[index].side} data-side={scenes[index].side} style={{ "--section-color": project.color, "--section-ink": project.ink } as CSSProperties} aria-labelledby={`heading-${project.slug}`}>
      <div className="chapter-sticky"><div className="chapter-header"><div><p className="eyebrow">0{index + 1} / SELECTED WORK {!project.desktop && <span className="draft-tag">Illustrative preview</span>}</p><h2 id={`heading-${project.slug}`}>{project.title}</h2></div><Link href={`/projects/${project.slug}`} className="pill">View project <span aria-hidden="true">↗</span></Link></div><ProjectDemo project={project} sceneId={scenes[index].id} kind={scenes[index].demo} /></div><div className="chapter-lines">{scenes[index].dialogue.map((line, step) => <div className="chapter-line" data-story-step={step} key={step}><div className="chapter-bubble"><p aria-label={line}>{line.split(" ").map((word, wordIndex) => <span className="story-word" aria-hidden="true" key={wordIndex}>{word}{" "}</span>)}</p></div></div>)}</div>
    </section>)}
    <section id="work" className="all-work grid-surface" data-character="work" data-tour="badge" aria-labelledby="work-heading"><div className="work-header"><h2 id="work-heading">All work</h2><span>40+ websites</span></div><div className="work-grid">{projects.map((project, index) => <Link className={`work-card ${index % 3 === 0 ? "card-wide" : ""}`} key={project.slug} href={`/projects/${project.slug}`} data-reveal><div className="work-card-image" style={{ background: project.color }}><div className="work-card-device"><DeviceFrame project={project} /></div><div className="card-dither" aria-hidden="true" /><span className="card-arrow" aria-hidden="true">↗</span></div><div className="work-card-label"><h3>{project.title}</h3><span>{project.year || "View project ↗"}</span></div></Link>)}</div>
      <section id="experience" className="background-section" aria-labelledby="background-heading"><div className="background-heading"><h2 id="background-heading">Behind the work.</h2><a className="pill" href="https://mohanprasath.in/" target="_blank" rel="noopener noreferrer">Meet the founder <span aria-hidden="true">↗</span></a></div><div className="experience-grid"><article className="experience-entry"><p className="eyebrow">{portfolio.founder.role}</p><h3>{portfolio.founder.name}</h3><ul>{portfolio.founder.paragraphs.map((line) => <li key={line}>{line}</li>)}</ul></article>{portfolio.services.map((service, index) => <article className="experience-entry" key={service.title}>{index === 0 && <p className="eyebrow">What we bring to the table</p>}<h3>{service.title}</h3><p>{service.description}</p></article>)}</div><div className="education-note"><p>Our approach<br /><span>{portfolio.approach}</span></p></div></section>
    </section>
    <footer id="contact" tabIndex={-1} className="contact grid-surface" data-character="contact" data-tour="outro"><div className="contact-top"><h2>Let’s build<br /><em>something good.</em></h2><p>{portfolio.availability}</p><CopyEmail email={portfolio.email} /></div><div className="footer-links">{portfolio.socials.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}<Link href="/#work">Explore our work ↗</Link><a href="https://wa.me/919025421149">+91 90254 21149 ↗</a><a href={`mailto:${portfolio.email}`}>Get in touch ↗</a></div><div className="footer-meta"><span>© {new Date().getFullYear()} {portfolio.name}</span><TrickButton /></div><div className="footer-small"><p>Built with care by Mohan. Good design, clean code, every time.</p><a className="back-to-top" href="#main">Back to top <ShootingStar /></a></div></footer>
  </main>;
}
