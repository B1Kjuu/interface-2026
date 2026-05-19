import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
  import About from "@/app/components/About";
  import Speakers from "@/app/components/Speakers";
  import Agenda from "@/app/components/Agenda";
  import Venue from "@/app/components/Venue";
  import Registration from "@/app/components/Registration";
  import Footer from "@/app/components/Footer";
import ScrollReveal from "@/shared/ScrollReveal";
  import TargetCursor from "@/shared/TargetCursor";
  import ScrollToTopButton from "@/shared/ScrollToTopButton";

  export default function Home() {
    return (
      <main className="min-h-screen selection:bg-accent-pink selection:text-white">
        <div id="top" />
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <ScrollToTopButton />
        <Navbar />
        <ScrollReveal className="reveal-section" delay={0}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal className="reveal-section" delay={75}>
          <About />
        </ScrollReveal>
        <ScrollReveal className="reveal-section" delay={75}>
          <Speakers />
        </ScrollReveal>
        <ScrollReveal className="reveal-section" delay={75}>
          <Agenda />
        </ScrollReveal>
        <ScrollReveal className="reveal-section" delay={75}>
          <Venue />
        </ScrollReveal>
        <ScrollReveal className="reveal-section" delay={75}>
          <Registration />
        </ScrollReveal>
        <Footer />
      </main>
    );
  }