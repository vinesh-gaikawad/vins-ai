import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import VideoSection from './components/VideoSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TwinklingStars from './components/TwinklingStars';
import StickyPricing from './components/StickyPricing';
import DiwaliBanner from './components/DiwaliBanner';
import type { Plan } from './types';


function App() {
  const [plan, setPlan] = useState<Plan>('yearly');

  return (
    <div className="bg-[#020829] overflow-hidden">
      <TwinklingStars />
      {/* <DiwaliBanner /> */}
      <Header />
      <main>
        
        <Hero />
        <Features />
        <Pricing plan={plan} setPlan={setPlan} />
        <Workflow />
        <VideoSection />
        <FAQ />
      </main>
      <Footer />
      
      <StickyPricing plan={plan} setPlan={setPlan} />
    </div>
  );
}

export default App;