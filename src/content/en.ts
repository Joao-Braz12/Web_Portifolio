/**
 * All visible copy lives here as a typed dictionary. This is the i18n seam:
 * to add Portuguese, create `pt.ts` exporting the same shape and switch on locale.
 */
export const content = {
  meta: {
    locale: "en",
  },

  nav: {
    links: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "CV",
  },

  hero: {
    label: "Backend-focused developer · Almada, PT",
    headlinePre: "João",
    headlineAccent: "Braz",
    headlinePost: "Dev",
    subhead:
      "Backend developer who lives in Java and Spring, chats with PostgreSQL all day, ships in Docker, and happily wanders into Next.js and React when the frontend needs some love.",
    primary: { label: "View my work", href: "#work" },
    secondary: { label: "Download CV", href: "/joao_braz_en_cv.pdf" },
  },

  tech: {
    label: "Tech I build with",
    items: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Next.js",
      "React",
      "TypeScript",
      "C#",
      "C",
    ],
  },

  work: {
    label: "001 / Selected work",
    title: "Things I've built",
    subtitle:
      "A bit of everything: backend systems, full-stack apps, and a few client sites. From a Spring REST API to pages real people actually paid for.",
    moreLabel: "More on GitHub",
    moreHref: "https://github.com/Joao-Braz12",
  },

  stats: {
    label: "002 / By the numbers",
    title: "The short version",
    items: [
      { value: 7, suffix: "+", label: "Years writing code (since 2018)" },
      { value: 5, suffix: "", label: "Featured projects shipped" },
      { value: 2, suffix: "", label: "Web-dev internships" },
      { value: 4, suffix: "", label: "Programs & certifications" },
    ],
    note: "English C1, Portuguese native. I can debug, and complain about bugs, in both.",
  },

  about: {
    label: "003 / About",
    title: "Who I am",
    bio: [
      "I'm João Pedro Braz, a developer in Almada, Portugal, by way of São Paulo, Brazil, where I was born in 2004. The backend is my happy place: data models, APIs, and all the unglamorous plumbing that keeps an app from quietly falling over. I'm doubling down on it with a Computer Engineering degree at ISTEC.",
      "I came up through multimedia and web design, so I can take a project from a tidy interface all the way down to the database without losing the plot. Java and Spring are home turf, PostgreSQL and Docker keep me company most days, and I get a little friendlier with React and Next.js every week.",
    ],
    photoAlt: "Portrait of João Pedro Braz",
    timelineLabel: "Education & experience",
    timeline: [
      {
        when: "2025 - now",
        role: "BSc Computer Engineering",
        org: "ISTEC, Lisboa",
        kind: "edu",
      },
      {
        when: "2025",
        role: "Web Designer",
        org: "IsecLisboa",
        note: "Redesigned a legacy WordPress site; built & deployed a Next.js app.",
        kind: "work",
      },
      {
        when: "2023 - now",
        role: "Multimedia Product Development",
        org: "ISTEC, Lisboa",
        note: "Final grade 17/20 · thesis “Shuffling”.",
        kind: "edu",
      },
      {
        when: "2022 - 2023",
        role: "Web Design",
        org: "iEFP, Almada",
        kind: "edu",
      },
      {
        when: "2022",
        role: "Web Designer",
        org: "Simbiose",
        note: "Built Drupal 9 sites; custom pages and CSS.",
        kind: "work",
      },
      {
        when: "2018 - 2022",
        role: "IT Systems Management & Programming",
        org: "Esc. Sec. Cacilhas Tejo",
        kind: "edu",
      },
    ],
  },

  skills: {
    label: "004 / Skills",
    title: "The toolkit",
    groups: [
      {
        name: "Backend",
        tag: "focus",
        items: ["Java", "Spring / Spring Boot", "REST APIs", "PostgreSQL", "Maven"],
      },
      {
        name: "DevOps & cloud",
        tag: "",
        items: ["Docker", "Vercel deploy", "CI/CD basics", "Git"],
      },
      {
        name: "Frontend",
        tag: "learning",
        items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
      },
      {
        name: "Other languages",
        tag: "",
        items: ["C", "C++", "C#", "WordPress", "Drupal"],
      },
    ],
  },

  contact: {
    label: "005 / Contact",
    title: "Let's build something.",
    subtitle:
      "Open to backend and full-stack roles, plus freelance work. Email is the fastest way to reach me, and I usually reply quicker than my CI pipeline.",
    email: "joaobraz1204@gmail.com",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joao-braz12/" },
      { label: "GitHub", href: "https://github.com/Joao-Braz12" },
    ],
    cta: { label: "Download CV", href: "/joao_braz_en_cv.pdf" },
  },

  footer: {
    name: "João Pedro Braz",
    tagline: "Backend-focused developer · Almada, Portugal",
  },
} as const;

export type Content = typeof content;
