import React, { useEffect, useState } from 'react';
import type { Plan } from '../types';
import * as Icons from '../constants/icons';


interface StickyPricingProps {
  plan: Plan;
  setPlan: React.Dispatch<React.SetStateAction<Plan>>;
}

const StickyPricing: React.FC<StickyPricingProps> = ({ plan, setPlan }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pricingSection = document.getElementById('pricing-div');
    if (!pricingSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide sticky bar when pricing section is in view
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const checkVisibility = () => {
      const pricingRect = pricingSection.getBoundingClientRect();
      const footer = document.querySelector('footer');
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();

      // Show if scrolled past hero and before footer
      if (window.scrollY > window.innerHeight && footerRect.top > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // also hide if pricing section is visible
      if (pricingRect.top < window.innerHeight && pricingRect.bottom > 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // initial check

    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 backdrop-blur-lg transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-0'}`}>
      <div className="container mx-auto">
        {/* <div className="flex items-center justify-center sm:justify-between gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <div
              onClick={() => setPlan('monthly')}
              className={`cursor-pointer rounded-lg p-2 px-4 transition-all flex items-center gap-2 bg-white/5 border-2 ${plan === 'monthly' ? 'border-green-400' : 'border-transparent'}`}
            >
              <div>
                <p className="text-sm text-gray-300">Subscribe Monthly</p>
                <p className="font-bold text-lg">₹<strong>499</strong></p>
              </div>
              {plan === 'monthly' ? <Icons.CheckCircleIcon /> : <Icons.UncheckCircleIcon />}
            </div>
            <div
              onClick={() => setPlan('yearly')}
              className={`cursor-pointer rounded-lg p-2 px-4 transition-all flex items-center gap-2 bg-white/5 border-2 relative ${plan === 'yearly' ? 'border-green-400' : 'border-transparent'}`}
            >
              <div className="absolute -top-3 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-md">SAVE 16%</div>
              <div>
                <p className="text-sm text-gray-300">Subscribe Yearly</p>
                <p className="font-bold text-lg">₹<strong>4,999</strong></p>
              </div>
              {plan === 'yearly' ? <Icons.CheckCircleIcon /> : <Icons.UncheckCircleIcon />}
            </div>
          </div>

          <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Get Started <Icons.ArrowIcon />
          </a>
        </div> */}

        <nav className="  text-center ">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide ">
            THIS AI IS ON TESTING MODE, NOW IT IS FREE
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default StickyPricing;