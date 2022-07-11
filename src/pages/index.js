import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import About from "./About";

export default function IndexPage() {
  return (
    <>
      <Seo title="Anuradha Aggarwal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <AboutSection sectionId="about" heading="About Me" /> */}
        <About />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Get In Touch" />
      </Page>
    </>
  );
}
