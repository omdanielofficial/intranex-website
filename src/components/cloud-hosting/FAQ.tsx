import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "What is a hybrid dedicated server?",
        answer: "A hybrid dedicated server (also known as a virtual dedicated server) is a hosting solution that bridges the gap between a traditional bare metal dedicated server and a virtual private server. It uses virtualisation technology to provide you with guaranteed, exclusive resources while offering cost-efficiency and management flexibility."
    },
    {
        question: "Is DDoS protection included?",
        answer: "Yes, all dedicated servers include free standard DDoS protection. For mission-critical applications requiring higher mitigation capacity or specific game filtering, this provides excellent attack mitigation."
    },
    {
        question: "How long does setup take?",
        answer: "As soon as you purchase a server with us, you will receive an email with your login information to access your server. The benefit of hybrid servers is that they are usually provisioned within minutes."
    },
    {
        question: "Are there any limitations to a hybrid server?",
        answer: "Hybrid servers are an excellent option for most people, however some use cases have limitations. It is not recommended to setup virtual private servers on a hybrid server due to instability stemming from multiple virtualisation layers."
    },
    {
        question: "Do I get full root access?",
        answer: "Absolutely! You get to choose which operating system is installed, and we provide full root access. You have full control over your server, so there's no need to worry about being restricted."
    },
    {
        question: "Do you offer managed support?",
        answer: "Our dedicated servers are self-managed by default, giving you full control. However, our enterprise solutions offerings include full server management, systems administration, software installs, and more."
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
