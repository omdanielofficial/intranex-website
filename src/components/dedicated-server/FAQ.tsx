import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to provision a Dedicated Server?",
        answer: "Most of our standard Dedicated Server configurations are provisioned automatically and delivered within 1-4 hours. Custom configurations or servers requiring specific hardware may take up to 24-48 hours depending on availability."
    },
    {
        question: "Do I get full IPMI/KVM access?",
        answer: "Yes, every dedicated server comes with full IPMI/KVM access (via VPN or direct link), allowing you to manage the server BIOS, perform remote installs, and troubleshoot issues even if the OS is unreachable."
    },
    {
        question: "Can I customize the hardware?",
        answer: "Absolutely. We offer customizable RAM, storage (NVMe/SSD/HDD), and network uplink options. If you don't see the specific configuration you need on our pricing page, please contact our sales team for a custom quote."
    },
    {
        question: "Is DDoS protection included?",
        answer: "Yes, all dedicated servers include free standard DDoS protection (up to 10Gbps). For mission-critical applications requiring higher mitigation capacity or specific game filtering, we offer advanced DDoS protection add-ons."
    },
    {
        question: "Are the network ports dedicated or shared?",
        answer: "All dedicated servers come with a dedicated network uplink (1Gbps, 10Gbps, or 25Gbps depending on the plan). We do not throttle your speed, ensuring you get the full bandwidth capacity available to your port."
    },
    {
        question: "Do you offer managed support?",
        answer: "Our dedicated servers are unmanaged by default, giving you full control. However, we offer Managed Support add-ons if you need assistance with OS patching, security hardening, or control panel management (cPanel/Plesk)."
    }
];

export const DedicatedServerFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Dedicated Server FAQ
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Common questions about our high-performance dedicated infrastructure.
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
