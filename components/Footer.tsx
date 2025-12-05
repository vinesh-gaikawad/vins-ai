import React from 'react';
import * as Icons from '../constants/icons';

const Footer = () => {
    return (
        <footer className="relative py-20 sm:py-32 overflow-hidden">
             <img src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/68970adf290da41fbf139d75_Frame%201261156548.avif" alt="Footer background" className="absolute inset-0 w-full h-full object-cover -z-10" />
             <img src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689708b744254b632373cd81_66e9378cafa649d4aa63e9a7_Star%20(5)%201.png" alt="Stars" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter">
                        Ready to Transform Your Photos?
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Start creating stunning images with the power of AI. Sign up now and unleash your creativity.
                    </p>
                    <div className="mt-10">
                        <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-lg">
                            Get Started Now <Icons.ArrowIcon />
                        </a>
                    </div>
                </div>
                <div className="mt-20 sm:mt-32 pt-10 border-t border-white/10 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Icons.VinsAILogo large/>
                            <span className="text-xl font-bold">Vins AI</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
                             <div className="flex items-center gap-2">
                                <Icons.EmailIcon/>
                                <a href="mailto:support@vins.ai" className="text-gray-300 hover:text-white">support@vins.ai</a>
                            </div>
                            <div className="hidden sm:block text-gray-500">|</div>
                            <div className="flex gap-4">
                                <a href="#" target="_blank" className="text-gray-300 hover:text-white">Privacy Policy</a>
                                <a href="#" target="_blank" className="text-gray-300 hover:text-white">Terms & Conditions</a>
                            </div>
                        </div>
                         <div className="text-sm text-gray-400">© 2025 Vins AI. All rights reserved. <br /> Develope by Vinesh Gaikawad  </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;