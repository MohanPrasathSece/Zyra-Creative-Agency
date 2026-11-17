export type ProjectMedia = { src: string; alt: string };
export type Project = {
  slug: string;
  title: string;
  year?: string;
  role: string;
  stack: string[];
  summary: string;
  contributions: string[];
  color: string;
  ink: string;
  illustration: "orb" | "terrain" | "type";
  status: "placeholder" | "draft" | "ready";
  previewCopy: { firstLine: string; emphasis: string };
  url?: string;
  repositoryUrl?: string;
  repositories?: { label: string; url: string }[];
  thumbnail?: ProjectMedia;
  desktop?: ProjectMedia;
  mobile?: ProjectMedia;
  tablet?: ProjectMedia;
  comparison?: ProjectMedia;
  sections: { title: string; body: string; media?: ProjectMedia }[];
};

// Agency identity and homepage copy follow the Zyra Digitals brief. Project
// records keep their original slugs and links so existing routes keep working.
export const portfolio = {
  name: "Zyra Digitals",
  shortName: "Zyra",
  title: "Creative Digital Agency",
  headline: { firstLine: "We build websites", secondLine: "that make businesses", emphasis: "stand out." },
  biography: "Good design. Clean code. Websites that actually do their job.",
  availability: "Got a business that needs a website? An idea for a new brand? Or just something you want to make happen? Let’s talk. We’ll figure it out together.",
  email: "zyradigitalsofficial@gmail.com",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/zyradigitals.co/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/zyra-digitals/" },
  ],
  resume: {
    url: "/resume/Sufyaan_resume_fullstack.pdf", label: "Résumé", date: "September 2026",
    variants: {
      fullstack: {
        label: "Software engineering", route: "/resume", url: "/resume/Sufyaan_resume_fullstack.pdf",
        filename: "Sufyaan_resume_fullstack.pdf",
        pages: [
          { src: "/resume/fullstack-1.jpg", alt: "Software engineering résumé page 1: backend summary and Wells Fargo and CAST Software experience" },
          { src: "/resume/fullstack-2.jpg", alt: "Software engineering résumé page 2: technical skills and education" },
        ],
      },
      data: {
        label: "Data engineering", route: "/resume/data", url: "/resume/Sufyaan_resume_data.pdf",
        filename: "Sufyaan_resume_data.pdf",
        pages: [{ src: "/resume/data-1.jpg", alt: "Data engineering résumé: summary, Wells Fargo and CAST Software experience, technical skills and education" }],
      },
    },
  },
  founder: {
    name: "Mohan Prasath",
    role: "Founder - Zyra Digitals",
    paragraphs: [
      "Building websites, figuring things out and making businesses look better online.",
      "Started Zyra Digitals with one simple idea: build better websites for businesses.",
      "40+ websites later, still building and always learning.",
    ],
  },
  services: [
    { title: "Web development", description: "Websites that look good, work smoothly and don't make visitors want to leave." },
    { title: "SEO", description: "Helping your website get noticed by the people searching for your business." },
    { title: "Branding", description: "Logos and visual identities that make your business look like a brand, not just another business." },
  ],
  approach: "Straightforward communication. Good design. Work that speaks for itself.",
  skills: [],
  dialogue: {
    welcome: "Hey! I’m Mohan, founder of Zyra Digitals. We build websites for businesses. Pretty simple, right? Have a look around!",
    returning: "Hey, you’re back! Ready for another look?",
    intro: "From business websites to e-commerce stores, branding and AI automations.",
    work: "A few things we’ve been building.",
    contact: "That’s us! Got something in mind? Mohan’s just one message away.",
    error: "Something’s missing. My accessories, too!",
  },
};

export const projects: Project[] = [
  {
    slug: "placement-app", title: "Endodontic Clinic", role: "Design & development",
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],
    color: "#173344", ink: "#f8f9f2", illustration: "orb", status: "draft",
    previewCopy: { firstLine: "Care you can", emphasis: "trust." },
    url: "https://www.precisionrct.co.uk/",
    summary: "A calm, trustworthy website for a London dental clinic - clear treatment information and easy booking.",
    contributions: [
      "Designed and built a clean, responsive website for a London dental clinic.",
      "Made treatments easy to understand and appointments easy to book.",
    ],
    sections: [
      { title: "Trust from the first click", body: "A calm, trustworthy website for a London dental clinic. Clear treatment information and easy booking." },
      { title: "Simple and reassuring", body: "Straightforward pages, helpful details and a layout that works just as well on a phone as it does on a desktop." },
    ],
  },
  {
    slug: "real-time-chat", title: "Marketing Agency Website", role: "Design & development",
    stack: ["HTML", "CSS", "JavaScript", "WordPress"],
    color: "#bca8eb", ink: "#121212", illustration: "terrain", status: "draft",
    previewCopy: { firstLine: "Marketing that", emphasis: "moves numbers." },
    url: "https://www.apex-revops.com/",
    summary: "A digital marketing agency website built to explain complex services clearly and turn visitors into enquiries.",
    contributions: [
      "Built a website for a digital marketing agency.",
      "Clear service pages and a straightforward path to getting in touch.",
    ],
    sections: [
      { title: "Clear on what we do", body: "A digital marketing agency website built to explain complex services clearly and turn visitors into enquiries." },
      { title: "Built to convert", body: "Strong structure, clear messaging and calls to action that make it easy for visitors to take the next step." },
    ],
  },
  {
    slug: "portfolio", title: "Fine Jewellery Store", role: "Design & development",
    stack: ["WooCommerce", "Online Stores", "Payment Integration", "Store Management"],
    color: "#fae767", ink: "#121212", illustration: "type", status: "ready",
    previewCopy: { firstLine: "Something", emphasis: "worth wearing." },
    url: "https://www.xivi.in/",
    thumbnail: { src: "/projects/portfolio/desktop-1920.jpg", alt: "Xivi jewellery store preview" },
    desktop: { src: "/projects/portfolio/desktop-1920.jpg", alt: "Desktop view of the Xivi jewellery store" },
    mobile: { src: "/projects/portfolio/mobile.jpg", alt: "Mobile view of the Xivi jewellery store" },
    summary: "An online jewellery store for Xivi - where beautiful product displays meet a smooth, simple shopping experience.",
    contributions: [
      "Built an online jewellery store for Xivi.",
      "From browsing products to placing an order, every step is made simple.",
    ],
    sections: [
      { title: "Made for browsing", body: "An online jewellery store for Xivi. Beautiful product displays meet a smooth, simple shopping experience." },
      { title: "Every step counts", body: "From browsing products to placing an order, we make every step count." },
    ],
  },
];

// Stable scene IDs preserve choreography while project URLs reflect the real work.
export const scenes = projects.slice(0, 3).map((project, index) => ({
  id: `project-${["one", "two", "three"][index]}`,
  projectSlug: project.slug,
  side: index === 1 ? "right" : "left",
  demo: (["compare", "scratch", "variants"] as const)[index],
  dialogue: [
    ["First up, a dental clinic in London.", "A calm website with clear treatments and easy booking.", "From the first click to the final scroll, every detail matters."],
    ["Next, a digital marketing agency.", "A website that explains the work and turns visitors into enquiries.", "Scratch to reveal the preview, then explore the project."],
    ["And here’s an online jewellery store for Xivi.", "Beautiful product displays with a smooth, simple shopping experience.", "Switch the views to explore how the experience looks across devices."],
  ][index],
}));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return index < 0 ? undefined : projects[(index + 1) % projects.length];
}
