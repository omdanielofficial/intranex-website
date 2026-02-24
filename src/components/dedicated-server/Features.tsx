import { Cpu, Network, HardDrive, Settings, Server, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Cpu,
        title: "Lightning Fast CPUs",
        description: "Powered by industry-leading computation. We deploy high-frequency AMD EPYC™ Genoa and Milan processors to crush your most intensive workloads."
    },
    {
        icon: Network,
        title: "BGP & BYOIP",
        description: "Bring Your Own IP (BYOIP) and BGP sessions are available at no extra cost. Maintain control over your network routing and IP reputation."
    },
    {
        icon: HardDrive,
        title: "SSD Storage",
        description: "Enterprise-grade NVMe SSDs come standard. Experience ultra-low latency and blazing fast I/O for databases and high-traffic applications."
    },
    {
        icon: Settings,
        title: "Fully Customizable",
        description: "Tailor your server to your exact specifications. From RAM upgrades to additional storage arrays, build the perfect machine for your needs."
    },
    {
        icon: Server,
        title: "Owned Infrastructure",
        description: "We own and operate our hardware. By eliminating middlemen, we deliver premium performance at unbeatable price points."
    },
    {
        icon: ShieldCheck,
        title: "Reliability First",
        description: "Backed by a rock-solid 99.95% Uptime SLA. Our redundant power and network infrastructure ensures your services stay online, always."
    }
];

export const DedicatedServerFeatures = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Our Dedicated Servers
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        High-performance bare metal hardware designed for your most demanding needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/20 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-brand-primary mb-6 ring-1 ring-gray-100 dark:ring-gray-700 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
