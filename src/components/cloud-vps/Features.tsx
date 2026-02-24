import { Cpu, Network, HardDrive, DollarSign, Server, ShieldCheck } from 'lucide-react';

export const CloudVPSFeatures = () => {
    const features = [
        {
            title: "Lightning Fast CPUs",
            description: "Powered by the industry's leading processors, including AMD EPYC™ Genoa and Milan series. We ensure your VPS handles intensive workloads with ease.",
            icon: Cpu
        },
        {
            title: "10Gbps Network",
            description: "Deploy with confidence using our 10 Gbit/s network uplinks. Experience low latency and massive bandwidth capacity that outperforms standard cloud offerings.",
            icon: Network
        },
        {
            title: "All NVMe Storage",
            description: "We don't compromise on speed. Every VPS instance is backed by enterprise-grade NVMe SSDs for rapid I/O operations and instant data access.",
            icon: HardDrive
        },
        {
            title: "Affordable Pricing",
            description: "Enterprise performance doesn't have to break the bank. We offer competitive pricing structures that give you top-tier resources at a fraction of the market cost.",
            icon: DollarSign
        },
        {
            title: "Owned Infrastructure",
            description: "We maintain full control over our hardware. By owning our infrastructure across global regions, we guarantee superior quality, security, and stability.",
            icon: Server
        },
        {
            title: "Reliable by Design",
            description: "Sleep soundly with our 99.95% Uptime SLA. Our redundant power systems and network architecture ensure your services remain online around the clock.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Why Choose Our VPS
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Built on top-tier hardware to deliver the performance your applications deserve.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/20 transition-all duration-300 group">
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
