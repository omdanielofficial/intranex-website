
import { Globe, Database, Code, Shield, Gamepad2, ShoppingCart, Tv, BrainCircuit } from 'lucide-react';

const useCases = [
    {
        title: 'Web Hosting',
        description: 'Host websites, blogs, and web applications with high availability and fast load times.',
        icon: Globe,
    },
    {
        title: 'Database Server',
        description: 'Run MySQL, PostgreSQL, MongoDB, or any database with reliable storage and backups.',
        icon: Database,
    },
    {
        title: 'Development & Testing',
        description: 'Create isolated environments for development, staging, and CI/CD pipelines.',
        icon: Code,
    },
    {
        title: 'VPN Server',
        description: 'Set up your own private VPN for secure, encrypted internet access worldwide.',
        icon: Shield,
    },
    {
        title: 'Game Servers',
        description: 'Host Minecraft, CS2, Valheim, and other multiplayer game servers with low latency.',
        icon: Gamepad2,
    },
    {
        title: 'E-commerce',
        description: 'Run WooCommerce, Magento, or custom e-commerce platforms with scalable resources.',
        icon: ShoppingCart,
    },
    {
        title: 'Media Streaming',
        description: 'Stream video content, host media files, or run transcoding workloads.',
        icon: Tv,
    },
    {
        title: 'AI & Machine Learning',
        description: 'Deploy AI models, run inference workloads, or train smaller ML models.',
        icon: BrainCircuit,
    }
];

export const CloudVPSUseCases = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Power any workload
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From simple websites to complex applications, Voltera VPS handles it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-primary">
                                <useCase.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
