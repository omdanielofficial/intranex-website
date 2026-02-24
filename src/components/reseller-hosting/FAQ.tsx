import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What is Reseller Hosting?",
        answer: "Reseller Hosting allows you to purchase hosting resources (disk space, bandwidth, etc.) from us and redistribute them to your own clients. You act as the hosting provider, set your own prices, and keep 100% of the profits."
    },
    {
        question: "Is it 100% White Label?",
        answer: "Yes, our Reseller Hosting is 100% white label. Your clients will never see Voltera Cloud branding. You can use your own logo, private nameservers, and customize the cPanel interface to match your brand."
    },
    {
        question: "How do I manage my clients?",
        answer: "You will be provided with a WHM (Web Host Manager) control panel. From WHM, you can create cPanel accounts for your clients, set resource limits (plans), and manage their accounts easily without needing technical expertise."
    },
    {
        question: "Can I upgrade my reseller plan?",
        answer: "Absolutely! You can upgrade your reseller hosting plan at any time as your business grows. The upgrade process is seamless, instantly increasing your resources (disk space, accounts limit) with no downtime."
    },
    {
        question: "Do you provide client support?",
        answer: "We support you, the reseller. You are responsible for providing first-line support to your direct clients. If you encounter technical issues you cannot resolve, our 24/7 expert support team is available to assist you."
    },
    {
        question: "Are SSL certificates free?",
        answer: "Yes, we provide free AutoSSL certificates for all domains and subdomains hosted under your reseller account. They are installed and renewed automatically ensuring site security."
    }
];

export const ResellerHostingFAQ = () => {
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
                        Everything you need to know about starting your hosting business.
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
