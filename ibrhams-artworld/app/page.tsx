import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsPreview from "@/components/ProjectsPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsPreview />
      <Footer />
    </main>
  );
}