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

const title = "Amina Ali — Software Engineer & UI/UX Designer";
const description =
  "Portfolio of Amina Ali, a software engineer and UI/UX designer building modern web applications and intuitive digital experiences with React, Next.js and Laravel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Amina Ali",
          jobTitle: "Software Engineer & UI/UX Designer",
          description:
            "Building modern web applications and intuitive digital experiences.",
          address: { "@type": "PostalAddress", addressCountry: "PK" },
          knowsAbout: ["React", "Next.js", "TypeScript", "Laravel", "UI/UX Design"],
          alumniOf: { "@type": "CollegeOrUniversity", name: "University of Gujrat" },
        }),
      },
    ],
  }),
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
