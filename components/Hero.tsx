import React from 'react';
import * as Icons from '../constants/icons';
import VinsAI from '@/assets/img/vins-ai.jpg';

const Hero = () => {

  return (
    
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
      
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-sm mb-4">
              Built by Y Combinator Alumni
            </div>
            <div className="font-sora text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              <h1 className="leading-tight">Unleash Your Creativity.</h1>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <h1 className="leading-tight">AI to</h1>
                <div className="h-[4.5rem] overflow-hidden">
                    <div className="animate-marquee-vertical">
                        <div className="h-[4.5rem] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#39D47A] to-[#009CD0]">Create.</div>
                        <div className="h-[4.5rem] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#39D47A] to-[#009CD0]">Enhance.</div>
                        <div className="h-[4.5rem] flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#39D47A] to-[#009CD0]">Create.</div>
                    </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-300 max-w-lg">
              Vins AI is a powerful AI-powered photo editing tool that helps you transform your images with professional-grade effects, enhancements, and creative tools. Effortlessly remove backgrounds, enhance quality, and apply artistic styles with a single click.
            </p>
            <div className="mt-8">
              <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                Get Started Now
                <Icons.ArrowIcon />
              </a>
              <p className="text-sm mt-3 text-gray-400">Bring your creative vision to life.</p>
            </div>
          </div>
          <div className="relative">
             <div className="relative z-10 aspect-video rounded-2xl overflow-hidden border-2 border-white/10 flex">
                <div className="w-auto h-full overflow-hidden">
                    <img src={VinsAI} alt="Before editing" className="w-full h-full object-cover filter "/>
                </div>
                {/* <div className="w-1/2 h-full overflow-hidden">
                    <img src="../assets/img/vins-after.jpg" alt="After editing" className="w-full h-full object-cover filter saturate-150"/>
                </div>
                 <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded-md">BEFORE</div>
                 <div className="absolute top-2 left-1 ml-2 bg-black/50 text-white px-2 py-1 text-xs rounded-md">AFTER</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;