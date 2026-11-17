import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { getNextProject, getProject, projects } from "@/content/portfolio";
import { DeviceFrame } from "@/components/portfolio/project-art";
import { siteUrl, site } from "@/content/seo";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export const dynamicParams = false;
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) notFound();
  const title = `${project.title} | ${site.name}`;
  const url = `${siteUrl}/projects/${project.slug}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    robots: project.status === "ready" ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: "article",
      url,
      title,
      description: project.summary,
      images: project.desktop ? [{ url: project.desktop.src, alt: project.desktop.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: project.desktop ? [project.desktop.src] : undefined,
    },
  };
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug); if (!project) notFound();
  const next = getNextProject(project.slug)!;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteUrl}/projects/${project.slug}` },
    ],
  };
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: { "@type": "Organization", name: "Zyra Digitals" },
    keywords: project.stack.join(", "),
    about: project.role,
  };
  return <main id="main" className="case-study grid-surface" data-character="detail" style={{ "--section-color": project.color, "--section-ink": project.ink } as CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }} />
    <header className="case-header"><Link className="pill" href="/#work"><span aria-hidden="true">←</span> All work</Link><div className="case-external-links">{project.repositories?.map((link) => <a key={link.url} href={link.url} className="pill" target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}{project.repositoryUrl && <a href={project.repositoryUrl} className="pill" target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>}{project.url && <a href={project.url} className="pill" target="_blank" rel="noopener noreferrer">Visit site <span aria-hidden="true">↗</span></a>}</div></header>
    <div className="case-title"><p className="eyebrow">SELECTED WORK</p><h1>{project.title}</h1><dl className="case-facts">{project.year && <div><dt>Year</dt><dd>{project.year}</dd></div>}<div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Stack</dt><dd>{project.stack.join(", ")}</dd></div></dl></div>
    <div className="case-hero"><DeviceFrame project={project} /></div>{!project.desktop && <p className="case-media-note">Illustrative preview. Project screenshots are still to come.</p>}
    <div className="case-intro" data-reveal><p>{project.summary}</p>{project.contributions.length > 0 && <ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>}</div>
    {project.sections.map((section, index) => <section className="case-section" key={section.title}><div className="case-text" data-reveal><span className="eyebrow">0{index + 1}</span><h2>{section.title}</h2><p>{section.body}</p></div>{section.media ? <div className="case-custom-media"><Image src={section.media.src} alt={section.media.alt} width={1600} height={1000} sizes="95vw" /></div> : <div className={`case-devices case-devices-${index}`} data-reveal><DeviceFrame project={project} variant={index} /><DeviceFrame project={project} mobile variant={index} /></div>}</section>)}
    <Link href={`/projects/${next.slug}`} className="next-project"><span>Next project</span><strong>{next.title}</strong><span aria-hidden="true">↗</span></Link>
  </main>;
}
