import { Mail, MessageSquare, BookCheckIcon, MedalIcon } from 'lucide-react';

export const ContactHero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
                        <span className="text-brand-primary">
                            Contact Us
                        </span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                        Choose the most convenient way to reach us. Our experienced team is available around the clock to assist customers with all kinds of enquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            icon: MessageSquare,
                            title: "Tickets",
                            desc: "Create a ticket for sales enquiries, technical support, and billing assistance.",
                            action: "Create Ticket",
                            theme: "emerald",
                            link: "https://client.intranex.org/submitticket.php"
                        },
                        {
                            icon: Mail,
                            title: "Email",
                            desc: "Send us an email for general requests, sponsorships, and business enquiries.",
                            action: "Send Email",
                            theme: "sky",
                            link: "mailto:hello@intranex.org"
                        },
                        {
                            icon: BookCheckIcon,
                            title: "Support Docs",
                            desc: "Browse our extensive technical and API documentation to help you manage your services.",
                            action: "Read Docs",
                            theme: "amber",
                            link: "https://docs.intranex.org"
                        },
                        {
                            icon: MedalIcon,
                            title: "Enterprise Support",
                            desc: "Enterprise clients receive priority support and have direct contact with our engineers.",
                            action: "Learn More",
                            theme: "gray",
                            link: "/enterprise"
                        }
                    ].map((item, idx) => {
                        const isLiveChat = item.title === "Live Chat";
                        const ActionComponent = isLiveChat ? 'button' : 'a';

                        const checkColors: Record<string, string> = {
                            gray: "text-gray-400",
                            emerald: "text-emerald-500",
                            amber: "text-amber-500",
                            sky: "text-sky-500",
                        };

                        const checkBgColors: Record<string, string> = {
                            gray: "bg-gray-100 dark:bg-gray-800",
                            emerald: "bg-emerald-100 dark:bg-emerald-900/30",
                            amber: "bg-amber-100 dark:bg-amber-900/30",
                            sky: "bg-sky-100 dark:bg-sky-900/30",
                        };

                        const iconColor = checkColors[item.theme] || checkColors.gray;
                        const iconBg = checkBgColors[item.theme] || "bg-gray-100";

                        return (
                            <div key={idx} className="relative bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 transition-all duration-200">

                                <div className={`inline-block px-5 py-2 rounded-full font-bold text-xs mb-6 ${iconBg} ${iconColor} uppercase tracking-wider`}>
                                    {item.title}
                                </div>

                                <div className="mb-6 flex-grow">
                                    <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${iconBg} ${iconColor}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-6"></div>

                                <ActionComponent
                                    {...(isLiveChat
                                        ? { onClick: () => (window as any).$crisp.push(['do', 'chat:open']) }
                                        : { href: item.link }
                                    )}
                                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 rounded-lg transition-all duration-300 transform active:scale-95 text-sm"
                                >
                                    {item.action}
                                </ActionComponent>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
