import {
    Zap,
    UserCog,
    History,
    Code2,
    Rocket,
    LayoutDashboard,
    HardDrive,
    LinkIcon
} from 'lucide-react';

const advantages = [
    {
        title: "Great Performance",
        description: "We use the latest Ryzen 9 9950X processors for unparalleled game server performance.",
        icon: Zap,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Essential Features",
        description: "Take advantage of our version switcher, user management system, SFTP access, customisation, and more.",
        icon: UserCog,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Free Subdomain",
        description: "Get a subdomain included for free so that players don't have to connect with a numerical IP address.",
        icon: LinkIcon,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Automatic Backups",
        description: "Regular automated backups ensure your data stays safe and easily recoverable at all times.",
        icon: History,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Modpacks & Plugins",
        description: "We provide one-click modpack and plugin installers for all supported games, plus Steam Workshop and more.",
        icon: Code2,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "99.99% Uptime",
        description: "Our infrastructure, housed in top-tier data centres, allows us to boast an impressive SLA-backed 99.99% uptime.",
        icon: Rocket,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Intuitive Control Panel",
        description: "We use a heavily modified version of the industry-leading Pterodactyl software with a modern interface.",
        icon: LayoutDashboard,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "NVMe Storage",
        description: "Ultra-fast NVMe SSD storage delivers lower latency and higher throughput compared to traditional SATA SSDs.",
        icon: HardDrive,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    }
];

export const CloudHostingAdvantages = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Why Choose Our Game Hosting?
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Providing powerful, affordable, and reliable game hosting across the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex items-start gap-6 p-8 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50
                                border-b border-gray-100 dark:border-gray-800
                                ${index % 2 === 0 ? 'md:border-r' : ''}
                                ${index >= advantages.length - 1 ? 'border-b-0' : ''}
                                ${index === advantages.length - 2 ? 'md:border-b-0' : ''}
                            `}
                        >
                            <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}>
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
