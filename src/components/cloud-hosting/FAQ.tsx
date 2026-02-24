import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What makes Cloud Hosting different from Shared Hosting?",
        answer: "While both use cPanel, Cloud Hosting provides dedicated resources (CPU & RAM) to your account. This means your website's performance is isolated and guaranteed, unlike Shared Hosting where resources are shared with other users."
    },
    {
        question: "Can I run Node.js, Python, or Ruby applications?",
        answer: "Yes! Our Cloud Hosting plans are Developer Friendly. You can easily deploy Node.js, Python, Ruby, Go, and Rust applications. We also support modern frameworks like Nuxt.js and Next.js (via custom server)."
    },
    {
        question: "Is SSH Access included?",
        answer: "Yes, SSH Access is included with all Cloud Hosting plans. You can securely manage your files, run commands, and use tools like Git, Composer, and WP-CLI directly from the terminal."
    },
    {
        question: "How do Remote Backups work?",
        answer: "We provide Remote Backups to an off-site location to ensure your data is always safe. These automated backups allow you to restore your files, databases, or email accounts quickly in case of any issues."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely. You can scale your resources (RAM and CPU) instantly from your client area as your website grows. You only pay the difference for the upgrade."
    },
    {
        question: "Do you offer free migration?",
        answer: "Yes, we offer Free Website Migration. Our expert team will move your files, databases, and emails from your old provider to Voltera Cloud with zero downtime."
    }
];

export const CloudHostingFAQ = () => {
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
                        Have questions? We have answers. If you can't find what you're looking for, our support team is just a click away.
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
