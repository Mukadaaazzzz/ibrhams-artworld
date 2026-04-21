import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import About from "@/components/About";
import GalleryPreview from "@/components/GalleryPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsPreview />
      <About />
      <GalleryPreview />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}