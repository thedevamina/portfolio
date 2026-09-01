import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Skills } from "@/components/site/skills";
import { Projects } from "@/components/site/projects";
import { Experience, Education } from "@/components/site/experience";
import { Services, Marquee } from "@/components/site/services";
import { Contact, Footer } from "@/components/site/contact";
import { Divider } from "@/components/site/primitives";
import {
  AmbientBackground,
  BackToTop,
  CursorGlow,
  LoadingScreen,
  ScrollProgress,
} from "@/components/site/effects";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <AmbientBackground />
      <Navbar />

      <main id="main">
        <Hero />


        <Marquee />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Education />
        <Divider />
        <Services />
        <Divider />
       
        <Divider />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
