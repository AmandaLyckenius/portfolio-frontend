import AboutSection from "~/components/features/about/AboutSection";
import type { Route } from "./+types/home";
import Header from "~/components/nav/Header";
import ProjectSection from "~/components/features/projects/ProjectSection";
import ContactSection from "~/components/features/contact/ContactSection";
import Footer from "~/components/nav/Footer";
import HeroSection from "~/components/features/hero/HeroSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amanda Lyckenius - Portfolio" },
    { name: "description", content: "Software Developer. Projects, competens and contact" },
  ];
}

export default function Home() {
  return <main>
    <h1>Portfolio under construction</h1>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    <ContactSection/>
    <Footer/>
  </main>;
}
