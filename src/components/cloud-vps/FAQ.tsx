import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What virtualisation technology do you use?",
        answer: "We use KVM (Kernel-based Virtual Machine) virtualisation. This ensures that your resources (CPU, RAM, Storage) are dedicated to your VPS and not shared with others, providing better performance, security, and stability. Control your servers through our innovative VirtFusion panel."
    },
    {
        question: "Can I upgrade my VPS later?",
        answer: "Yes, you can scale your VPS resources vertically at any time. Plan upgrades are instant and can be done directly from your client account. Please contact us if you wish to increase individual settings."
    },
    {
        question: "Do you provide root access?",
        answer: "Absolutely. All our VPS plans come with full root access (SSH for Linux, RDP for Windows). You have complete control over your server environment to install any software or configure settings as needed."
    },
    {
        question: "Are backups included?",
        answer: "We offer an automated snapshot and backup system. You can schedule automatic backups or take manual snapshots before critical changes. Backups are stored on a separate storage cluster for maximum reliability."
    },
    {
        question: "Where are your servers located?",
        answer: "We currently operate in data centres across London (UK) and New York City (US). You can select your preferred location during checkout to minimise latency for your target audience."
    },
    {
        question: "What operating systems are available?",
        answer: "We offer a wide range of Linux distributions including Ubuntu, Debian, CentOS, AlmaLinux, and Rocky Linux. You can also choose to use Windows, or alternatively upload your own Custom ISO if you need a specific OS or version. Our Windows plans cost a little extra due to its high resource usage."
    }
];

export const CloudVPSFAQ = () => {
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
