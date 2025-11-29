import React from 'react';
import * as Icons from '../constants/icons';

const workflowSteps = [
    {
        name: '1. Upload Your Image',
        description: 'Drag and drop your photo or select it from your device.',
        icon: <Icons.UploadIcon />,
    },
    {
        name: '2. Apply AI Magic',
        description: 'Choose from our suite of AI tools - enhance, remove background, apply styles, and more.',
        icon: <Icons.MagicIcon />,
    },
    {
        name: '3. Download & Share',
        description: 'Export your high-resolution edited photo and share your creation with the world.',
        icon: <Icons.DownloadIcon />,
    },
];


const Workflow = () => {
  return (
    <section id="workflow" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">
              A Simple Workflow to<br/>Stunning Photos
            </h2>
            <div className="space-y-6">
              {workflowSteps.map((step) => (
                <div key={step.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full border border-white/20">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{step.name}</h3>
                    <p className="text-gray-400 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> 
          <div className="hidden lg:block"> <br /><br /><br /> <br /> <br />
            <img 
              src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689db3bbb0af85b789b9c107_Group%201171275008.avif"
              alt="AI Workflow"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;