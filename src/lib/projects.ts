export type Project = {
  id: string;
  no: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  repo: string;
  accent: "olive" | "sand" | "maroon";
};

const GH = "https://github.com/Joao-Braz12";

/** Featured work, in the order João confirmed. */
export const projects: Project[] = [
  {
    id: "safety-manager-next",
    no: "01",
    title: "Safety Manager",
    tagline: "Full-stack safety-management platform",
    description:
      "A workplace safety app for tracking incidents, equipment and compliance. Server-rendered, type-safe from top to bottom, and boxed up in Docker so deploys stay boring.",
    stack: ["Next.js", "TypeScript", "Prisma", "Docker", "Vercel"],
    repo: `${GH}/safety-manager-next`,
    accent: "olive",
  },
  {
    id: "streamberry",
    no: "02",
    title: "Streamberry",
    tagline: "REST API for movies & TV shows",
    description:
      "A Spring Boot REST API for cataloguing movies and series. Clean layered architecture, real persistence, and endpoints I built and tested by hand instead of hoping for the best.",
    stack: ["Java", "Spring", "Maven"],
    repo: `${GH}/Streamberry`,
    accent: "sand",
  },
  {
    id: "cardeal-waterproofing",
    no: "03",
    title: "Cardeal Waterproofing",
    tagline: "Client landing page",
    description:
      "A landing page for a waterproofing business, built to turn visitors into calls. Responsive layout, a clear rundown of services, and an easy way to get in touch. All hand-coded.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: `${GH}/Cardeal-waterproofing`,
    accent: "maroon",
  },
  {
    id: "sala-estudos",
    no: "04",
    title: "Sala de Estudos",
    tagline: "Study-room website",
    description:
      "A site for a study-room space, with schedules, info, and a calm interface that won't stress out students who are already stressed enough. Built from scratch with plain web tech.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: `${GH}/Sala_estudos`,
    accent: "olive",
  },
  {
    id: "men-clothes-website",
    no: "05",
    title: "Men's Clothing Store",
    tagline: "Storefront concept",
    description:
      "A men's clothing storefront with a bold visual identity, tidy product layout, and navigation that gets out of the way so you can just browse.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: `${GH}/Men-clothes-website`,
    accent: "sand",
  },
];

/** Supporting / learning repos for the "more on GitHub" strip. */
export const moreRepos: { name: string; repo: string }[] = [
  { name: "Java_Spring_Learning", repo: `${GH}/Java_Spring_Learning` },
  { name: "DockerLearn", repo: `${GH}/DockerLearn` },
  { name: "TCGOrganizer", repo: `${GH}/TCGOrganizer` },
  { name: "RepairHouseAi", repo: `${GH}/RepairHouseAi` },
  { name: "Libft", repo: `${GH}/Libft` },
  { name: "Printf", repo: `${GH}/Printf` },
  { name: "Get-Next-Line", repo: `${GH}/Get_Next_Line` },
];
