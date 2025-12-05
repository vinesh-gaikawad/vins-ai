import React from 'react';

const VideoSection = () => {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter">
                        See Vins AI in Action
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        From simple tweaks to stunning transformations.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto mt-12">
                    <img 
                        src="../assets/img/vins-bc.jpg" 
                        loading="lazy" 
                        alt="VIDEO-BG" 
                        className="absolute inset-0 w-full h-full -z-10"
                    />
                    <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
                        <img 
                            src="../assets/img/vins-ai.jpg" 
                            alt="Vins AI Interface" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="text-center mt-12">
                     <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block">
                        Start Editing with Vins AI
                    </a>
                    <p className="text-sm mt-3 text-gray-400">Unleash your creativity today.</p>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;