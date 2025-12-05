import React from 'react';
import * as Icons from '../constants/icons';

const featureData = [
  {
    title: 'AI-Powered Image Editing',
    description: 'Transform your photos effortlessly using simple text prompts. Our AI understands your instructions and edits your image exactly as you imagine.',
    pointers: [
      'Edit images just by typing what you want',
      'Change backgrounds, styles, or objects instantly',
      'Enhance creativity with smart, prompt-based editing'
    ],
    image: '../assets/img/vins-aa.jpg',
    icons: [<Icons.MagicIcon />],
    bgClass: 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 '
  },
  {
    title: 'AI-Powered Enhancement',
    description: 'Instantly improve your photos with a single click. Our AI analyzes your image and applies optimal adjustments for color, brightness, and sharpness.',
    pointers: [
      'One-click auto-enhance',
      'Fix lighting and color issues',
      'Sharpen details and reduce noise'
    ],
    image: '../assets/img/vins-en.jpg',
    icons: [<Icons.EnhanceIcon />],
    bgClass: 'bg-gradient-to-br from-pink-900/30 to-blue-900/30'
  },
  {
    title: 'Effortless Background Removal',
    description: 'Remove backgrounds from any image with incredible precision. Perfect for product photos, portraits, and creative compositions.',
    pointers: [
        'AI-powered subject detection',
        'Clean, smooth edges',
        'Transparent or custom backgrounds',
    ],
    image: '../assets/img/vins-bc.jpg',
    icons: [<Icons.BackgroundRemovalIcon />],
    bgClass: 'bg-gradient-to-br from-green-900/30 to-blue-900/30'
  },
    {
    title: 'Creative Style Transfer',
    description: 'Transform your photos into works of art. Apply the style of famous paintings or create unique artistic effects.',
    pointers: [
      'Huge library of art styles',
      'Adjust style intensity',
      'Create your own unique look.'
    ],
    image: '../assets/img/vins-cc.jpg',
    icons: [<Icons.StyleTransferIcon />],
    bgClass: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30'
  },
  {
    title: 'Smart Object Removal',
    description: 'Remove unwanted objects, people, or elements from your images simply by describing them. Our smart AI understands your text prompts and seamlessly erases distractions.',
    pointers: [
        'Remove objects using natural language prompts',
        'Intelligent background reconstruction',
        'Perfect for quick, precise photo cleanup',
    ],
    image: '../assets/img/vins-or.jpg',
    icons: [<Icons.ObjectRemovalIcon />],
    bgClass: 'bg-gradient-to-br from-indigo-900/30 to-blue-900/30'
  },
];

const Features = () => {
  return (
    <section id="Features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter">
            Powerful AI Editing Tools. <br /> Incredibly Simple.
          </h2>
          <p className="mt-4 text-lg text-gray-400">Every feature is designed to give you professional results in seconds.</p>
        </div>
        <div className="space-y-8">
          {featureData.map((feature, index) => (
            <div key={index} className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 grid md:grid-cols-2 gap-8 items-center ${feature.bgClass}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icons.map((icon, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20">
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.pointers.map((pointer, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20">
                        <Icons.CheckIcon/>
                      </div>
                      <span className="text-gray-200">{pointer}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="bg-black/20 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;