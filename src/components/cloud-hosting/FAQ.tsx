import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Can I upgrade my plan later if I need more resources?",
        answer: "Absolutely! You can upgrade or downgrade your game server plan at any time in your client dashboard. We understand that circumstances change, and sometimes you might need a little bit more or a little bit less. Alternatively, you can also reach out to our support team to create a custom plan for any of our game servers to fit your needs."
    },
    {
        question: "Do you support mods and plugins?",
        answer: "Of course we do! All of our game hosting plans allow you to install the best modpacks in one click. We want you to be able to craft the server of your dreams, so we also have a built-in plugin installer which means you can install everything from the comfort of your control panel."
    },
    {
        question: "How long does setup take?",
        answer: "s soon as you purchase a server with us, you will receive an email with your login information to access your server's control panel. Just login, select a server type and connect to your server!"
    },
    {
        question: "Will my game server be online 24/7?",
        answer: "Yes, all game servers remain online 24/7 so that your players can connect around the clock. There's no queue when starting a server, meaning that you won't have to wait before connecting."
    },
    {
        question: "Do you support switching versions and games?",
        answer: "You can switch versions using our one-click version installer through the control panel. If you'd like to switch games entirely, just reach out to our team and we'll be more than happy to help."
    },
    {
        question: "Do you offer dedicated ports?",
        answer: "We offer a paid addon where you can use the default ports for your game (e.g. Minecraft ports are 25565 & 19132). Just select the addon at checkout if you wish to take advantage of this."
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
