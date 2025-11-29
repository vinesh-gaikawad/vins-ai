import React from 'react';
import type { Plan } from '../types';
import * as Icons from '../constants/icons';

interface PricingProps {
    plan: Plan;
    setPlan: React.Dispatch<React.SetStateAction<Plan>>;
}

const Pricing: React.FC<PricingProps> = ({ plan, setPlan }) => {

    return (
        <section className="py-20 sm:py-32 bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/68dfd7681f2131238491845f_Frame%201261156551.avif')` }}>
            <div className="container mx-auto px-4 relative">
                <div id="pricing-div" className="max-w-xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter">
                            Simple, Powerful Pricing
                        </h2>
                        <div className="mt-4 inline-flex items-center gap-2 text-lg">
                            <span className="text-2xl">🔥</span>
                            <span className="text-gray-300">Choose the plan that fits your creative needs.</span>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Icons.VinsAILogo />
                                <span className="text-xl font-bold">Vins AI</span>
                            </div>
                        </div>
                        <br />
                        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white text-center px-1 py-4 shadow-lg">
                            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg">
                                THIS AI IS ON TESTING MODE, <span className= "text-red font-bold"> NOW IT IS FREE </span>
                            </h1>
                        </nav>
                        <div className="flex gap-2 mt-4">
                            <div onClick={() => setPlan('monthly')} className={`cursor-pointer flex-1 p-4 rounded-lg border-2 transition-all ${plan === 'monthly' ? 'border-green-400 bg-white/10' : 'border-transparent bg-white/5 hover:bg-white/10'}`}>
                                <h3 className="text-2xl font-bold">₹<strong>499</strong><span className="text-lg font-normal">/Month</span></h3>
                                <p className="text-sm text-gray-400">Monthly</p>
                            </div>
                            <div onClick={() => setPlan('yearly')} className={`cursor-pointer flex-1 p-4 rounded-lg border-2 transition-all relative overflow-hidden ${plan === 'yearly' ? 'border-green-400 bg-green-900/30' : 'border-transparent bg-white/5 hover:bg-white/10'}`}>
                                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-bl-lg">SAVE 16%</div>
                                <h3 className="text-2xl font-bold">₹<strong>4,999</strong><span className="text-lg font-normal">/Year</span></h3>
                                <p className="text-sm text-gray-400">Yearly</p>
                            </div>
                        </div>

                        <div className="space-y-3 mt-6">
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>Unlimited AI Photo Edits</span></div>
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>High-resolution exports</span></div>
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>Access to all AI tools</span></div>
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>Batch processing for multiple images</span></div>
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>Cloud storage for your projects</span></div>
                            <div className="flex items-center gap-3"><div className="bg-white/10 p-1.5 rounded-full"><Icons.CheckIcon /></div><span>Priority support</span></div>
                        </div>

                        <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="mt-6 block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                            Get Started Now
                        </a>
                        <p className="text-xs text-center mt-2 text-gray-400">🔒 Payments are processed by TagMango using Razorpay & Stripe</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;