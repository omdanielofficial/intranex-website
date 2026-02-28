import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What is web hosting and is it right for me?",
        answer: "Web hosting (also known as shared hosting) is a service where multiple websites run on a single physical server, sharing resources like storage, memory, and processing power. It is the most affordable option for beginners, personal blogs, small businesses, and portfolios that don't require immense resources."
    },
    {
        question: "Why does NVMe storage matter?",
        answer: "NVMe (Non-Volatile Memory Express) SSDs are significantly faster than traditional SATA SSDs and HDDs. This means your website's files load much quicker, resulting in faster page load times, better user experience, and improved SEO rankings."
    },
    {
        question: "Can I upgrade my plan as my website grows?",
        answer: "Absolutely! You can seamlessly upgrade your hosting plan at any time through your client account. You simply pay the difference in price for the remaining time on your current billing cycle. No migration or downtime is required."
    },
    {
        question: "Do you offer a money-back guarantee?",
        answer: "Yes, we offer a risk-free 48-hour money-back guarantee on all our web hosting plans. If you're not completely satisfied with our service within the first 48 hours, we'll refund your payment, no questions asked."
    },
    {
        question: "Are SSL certificates included for free?",
        answer: "Yes, we provide unlimited free Let's Encrypt SSL certificates for all domains and subdomains hosted with us. SSL is installed automatically, ensuring your website is secure (HTTPS) and trusted by visitors and search engines. You can also use your own certificates."
    },
    {
        question: "Will you help me migrate my existing website?",
        answer: "Yes! We offer free website migration services. Our expert team will handle the transfer of your files, databases, and emails from your previous provider to us, ensuring a smooth transition with zero downtime."
    }
];

export const SharedHostingFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Find quick answers to the most common questions about our services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:border-brand-primary/50 dark:hover:border-brand-primary/50"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-gray-900 dark:text-white">
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors duration-200 ${openIndex === index ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
                                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
