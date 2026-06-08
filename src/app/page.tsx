import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TechStrip } from "@/components/TechStrip";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TechStrip />
        <Projects />
        <Stats />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
