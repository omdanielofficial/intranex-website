import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How do I ship my hardware to your data center?",
        answer: "Once your order is confirmed, we will provide you with a shipping label and specific instructions. You can ship your pre-configured hardware directly to our facility, or schedule a time to drop it off personally."
    },
    {
        question: "Do you offer Remote Hands support?",
        answer: "Yes, we offer 24/7/365 Remote Hands support. Our on-site technicians can assist with racking/stacking, cable management, hardware replacements, and visual inspections."
    },
    {
        question: "What power configurations are available?",
        answer: "We support a wide range of power densities. Standard racks come with 2x 30A 120V or 208V feeds (A+B redundant). High-density racks (20kW+) and 3-phase power are available upon request."
    },
    {
        question: "Is network bandwidth dedicated or shared?",
        answer: "We provide dedicated, unmetered uplink ports (1Gbps, 10Gbps, or 40Gbps/100Gbps). The bandwidth is fully committed to your rack and is not oversubscribed."
    },
    {
        question: "Can I access the data center physically?",
        answer: "Yes, customers with Full Rack or Private Cage deployments can request escorted or unescorted 24/7 physical access, subject to security clearance and biometric enrollment."
    },
    {
        question: "What compliance standards do you meet?",
        answer: "Our facilities are SOC 2 Type II, ISO 27001, PCI-DSS, and HIPAA compliant, ensuring your infrastructure meets strict regulatory requirements."
    }
];

export const ColocationFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Colocation FAQ
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Frequently asked questions about housing your hardware with Voltera Cloud.
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
