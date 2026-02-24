import {
    Zap,
    UserCog,
    Scale,
    History,
    Code2,
    Rocket,
    LayoutDashboard,
    HardDrive
} from 'lucide-react';

const advantages = [
    {
        title: "Semi-Dedicated Performance",
        description: "Enjoy more reliable resources with up to 3× faster performance compared to traditional shared hosting.",
        icon: Zap,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Fully Managed",
        description: "Our professional team handles server management and maintenance, so you can focus on your website and business.",
        icon: UserCog,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Flexible Plans",
        description: "Easily scale your resources based on your needs — only pay for what you actually use.",
        icon: Scale,
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
        title: "Developer Friendly",
        description: "Supports PHP, Python, Ruby, Golang, and Rust, plus modern JavaScript frameworks like Node.js, Nuxt.js, Headless CMS, and static sites.",
        icon: Code2,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "Web Acceleration",
        description: "Built-in acceleration features including LiteSpeed Cache, NGINX Cache, Redis, Memcached, PageSpeed, and WordPress Accelerator.",
        icon: Rocket,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "cPanel Control Panel",
        description: "Manage your hosting easily with cPanel, offering a familiar interface, powerful tools, and extensive documentation.",
        icon: LayoutDashboard,
        color: "text-brand-primary",
        bg: "bg-brand-primary/10"
    },
    {
        title: "NVMe SSD Storage",
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
                        Cloud Hosting Advantages
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        High-performance cloud hosting designed for speed, security, and scalability.
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
