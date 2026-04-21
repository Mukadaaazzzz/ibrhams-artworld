import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import About from "@/components/About";
import Footer from "@/components/Footer";
import GalleryPreview from "@/components/GalleryPreview";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsPreview />
      <About />
      <GalleryPreview />
      <Footer />
    </main>
  );
}