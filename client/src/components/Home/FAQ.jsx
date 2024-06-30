
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
    const faqs = [
        {
            question: "How do I post a job?",
            answer: "To post a job on our job board, you need to create an account if you haven't already. Once logged in, navigate to the 'Post a Job' section where you can fill out the job details and submit it for review. Once approved, your job listing will be visible to job seekers."
        },
        {
            question: "How can I edit or delete my job listing?",
            answer: "You can edit or delete your job listing by logging into your account and navigating to the 'Manage Jobs' section. From there, you'll have options to edit the job details or remove the listing entirely."
        },
        {
            question: "Do you offer job promotion services?",
            answer: "Yes, we offer job promotion services to increase the visibility of your job listing. You can choose from various promotion packages during the job posting process or upgrade your existing job listing to a promoted position."
        },
        {
            question: "How do job seekers apply for jobs?",
            answer: "Job seekers can apply for jobs directly through our job board platform. They can browse job listings, view details, and apply using the application method specified by the employer, such as through our platform or an external link provided."
        },
        {
            question: "Can I search for resumes of job seekers?",
            answer: "Yes, as an employer, you have access to search for resumes of job seekers who have opted to make their resumes visible to employers. You can use our search filters to find candidates with specific skills or experience."
        },
        {
            question: "What types of jobs are listed on your job board?",
            answer: "Our job board features a wide range of job types across various industries and locations. You can find full-time, part-time, remote, freelance, and contract positions, among others."
        },
        {
            question: "How do I contact support for assistance?",
            answer: "If you need help with using our job board, posting jobs, or any other inquiries, you can contact our support team through the 'Contact Us' section on our website or by emailing support@jobboard.com."
        },
        {
            question: "Do you offer discounts or packages for bulk job postings?",
            answer: "Yes, we offer discounts and packages for bulk job postings. Please contact our sales team at sales@jobboard.com to discuss your needs and explore available options."
        },
        {
            question: "How do I renew or extend my job listing?",
            answer: "To renew or extend your job listing, log in to your account and navigate to the 'Manage Jobs' section. You'll find options to renew an expired listing or extend the duration of an active job posting."
        }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-g4 animate__animated animate__flash my-1 font-bold text-indigo-600 text-3xl title-font mb-4">
                        FAQ - Job Board
                    </h2>
                    <p className="text-neutral-500 text-lg mx-auto">
                        Frequently asked questions about our job board
                    </p>
                </div>
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-3">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>{faq.question}</span>
                                    <span className="transition group-open:rotate-180">
                                        <FiChevronDown />
                                    </span>
                                </summary>
                                <p className="text-sm text-gray-500 mt-1 group-open:block">
                                    {faq.answer}
                                </p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;

