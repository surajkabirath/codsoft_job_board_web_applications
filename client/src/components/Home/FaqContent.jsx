import  { useState } from 'react';

const FaqContent = () => {
    const faqs = [
        {
            question: 'How do I get started?',
            answer: 'Start by creating an account and exploring our platform. Our comprehensive guides will help you get up and running quickly.',
        },
        {
            question: 'Can I integrate with other tools?',
            answer: 'Yes, our platform supports integration with a wide range of third-party tools and services. Check our documentation for details.',
        },
        {
            question: 'What kind of support do you offer?',
            answer: 'We provide 24/7 customer support via live chat and email. Our support team is dedicated to assisting you with any questions or issues.',
        },
        {
            question: 'Is there a free trial period?',
            answer: 'Yes, we offer a 30-day free trial period for new users. You can explore all our features and functionalities during this trial period.',
        },
        {
            question: 'How secure is my data?',
            answer: 'We prioritize the security and privacy of your data. Our platform employs industry-standard security measures and encryption protocols to safeguard your information.',
        },
        {
            question: 'Do you offer customization options?',
            answer: 'Yes, our platform allows for extensive customization to meet your specific needs. You can configure workflows, layouts, and integrations according to your preferences.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className="max-w-screen-md mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4 bg-white shadow-md rounded-lg">
                    <button
                        className="flex justify-between items-center w-full p-4 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-lg font-semibold">{faq.question}</span>
                        <svg
                            className={`w-5 h-5 transition-transform ${
                                activeIndex === index ? 'transform rotate-180' : ''
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a.75.75 0 0 1-.53-.22l-8-8a.75.75 0 1 1 1.06-1.06L10 15.94l7.47-7.47a.75.75 0 0 1 1.06 1.06l-8 8A.75.75 0 0 1 10 18z"
                            />
                        </svg>
                    </button>
                    {activeIndex === index && (
                        <div className="p-4 bg-gray-100">
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqContent;
