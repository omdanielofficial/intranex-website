import { Cpu, Wifi, HardDrive, DollarSign, Server, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Cpu,
        title: "Lightning-Fast CPUs",
        description: "Our infrastructure is powered by high-end CPUs, including AMD EPYC™ Genoa and Milan series, delivering exceptional performance for compute-intensive workloads."
    },
    {
        icon: Wifi,
        title: "High-Speed Network",
        description: "Enjoy ultra-fast connectivity with up to 10 Gbit/s network uplinks in most locations — significantly faster than standard cloud server offerings."
    },
    {
        icon: HardDrive,
        title: "All-NVMe Storage",
        description: "Every server is equipped with high-performance NVMe SSDs, ensuring ultra-low latency, faster I/O, and consistently high throughput for your data."
    },
    {
        icon: DollarSign,
        title: "Affordable Pricing",
        description: "We deliver enterprise-grade performance at a fraction of the cost, making high-performance cloud infrastructure accessible without hidden fees."
    },
    {
        icon: Server,
        title: "Owned Infrastructure",
        description: "We operate on fully owned hardware across nearly all regions, allowing us to maintain strict quality control, higher reliability, and competitive pricing."
    },
    {
        icon: ShieldCheck,
        title: "Reliable by Design",
        description: "All services include a 99.95% uptime SLA, backed by enterprise hardware, redundant systems, and continuous monitoring for maximum reliability."
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Enterprise-Grade Infrastructure
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        High-performance hardware designed for mission-critical workloads.
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
