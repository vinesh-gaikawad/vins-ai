import React, { useState } from 'react';

const faqData = [
    {
        question: 'What is Vins AI?',
        answer: 'Vins AI is a powerful, AI-driven photo editing platform designed to help you create stunning images with ease. It offers a suite of intelligent tools for enhancing, retouching, and transforming your photos.'
    },
    {
        question: 'What kind of photo editing can I do?',
        answer: 'You can perform a wide range of edits, including one-click enhancements, precise background removal, artistic style transfers, and smart object removal. Our tools are designed for both beginners and professionals.'
    },
    {
        question: 'Is there a free trial?',
        answer: 'Yes, you can try our basic features for free to see the power of Vins AI for yourself. For unlimited access to all our advanced tools, we recommend choosing one of our affordable subscription plans.'
    },
    {
        question: 'What file formats are supported?',
        answer: 'We support all major image formats, including JPEG, PNG, WEBP, and HEIC. You can export your edited images in high resolution.'
    },
    {
        question: 'Can I use Vins AI on my phone?',
        answer: 'Absolutely! Vins AI is a fully responsive web application that works seamlessly on any modern web browser, including on your mobile phone and tablet. No app installation is required.'
    },
    {
        question: 'How do I cancel my subscription?',
        answer: 'You can easily manage or cancel your subscription at any time from your account settings page. Your access will continue until the end of your current billing period.'
    }
];

// Fix: Defined a type alias for the component props to resolve the issue with the `key` prop.
type FaqItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
};

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
    return (
        <div className="border-b border-white/10">
            <button onClick={onClick} className="w-full text-left py-6 px-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{question}</h3>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M20.031 10.0027L12.531 17.5027C12.4614 17.5725 12.3787 17.6278 12.2876 17.6655C12.1966 17.7033 12.099 17.7227 12.0004 17.7227C11.9019 17.7227 11.8043 17.7033 11.7132 17.6655C11.6222 17.6278 11.5394 17.5725 11.4698 17.5027L3.96979 10.0027C3.82906 9.86199 3.75 9.67112 3.75 9.4721C3.75 9.27307 3.82906 9.0822 3.96979 8.94147C4.11052 8.80074 4.30139 8.72168 4.50042 8.72168C4.69944 8.72168 4.89031 8.80074 5.03104 8.94147L12.0004 15.9118L18.9698 8.94147C19.0395 8.87179 19.1222 8.81651 19.2132 8.7788C19.3043 8.74109 19.4019 8.72168 19.5004 8.72168C19.599 8.72168 19.6965 8.74109 19.7876 8.7788C19.8786 8.81651 19.9614 8.87179 20.031 8.94147C20.1007 9.01115 20.156 9.09388 20.1937 9.18492C20.2314 9.27597 20.2508 9.37355 20.2508 9.4721C20.2508 9.57064 20.2314 9.66822 20.1937 9.75927C20.156 9.85031 20.1007 9.93304 20.031 10.0027Z" fill="white"></path>
                    </svg>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 pb-6 text-gray-300" dangerouslySetInnerHTML={{ __html: answer }}></div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-sora text-4xl md:text-5xl font-extrabold tracking-tighter text-center mb-12">
                        Frequently Asked Questions (FAQs)
                    </h2>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                        {faqData.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer.replace(/<a/g, '<a class="text-blue-400 hover:underline"')}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;