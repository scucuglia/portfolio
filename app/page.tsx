import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import PublicationsSection from "@/components/PublicationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <PublicationsSection />
      </main>
      <Footer />
    </>
  );
}
