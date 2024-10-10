import Home from "@/components/Home";
import About from "@/components/About";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { Newsletter } from "@/components/Newsletter";

export default function LandingPage() {
  return (
    <main>
      <Home />
      <About />
      <Features />
      <Services />
      <Contact />
      <Newsletter />
    </main>
  );
}
