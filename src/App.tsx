import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Scorecard from './components/Scorecard';
import TargetMarket from './components/TargetMarket';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Scorecard />
      <TargetMarket />
      <Stats />
      <Pricing />
      <Comparison />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
