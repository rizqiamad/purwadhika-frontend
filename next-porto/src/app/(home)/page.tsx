import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Experience from "@/components/languageExperience";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
