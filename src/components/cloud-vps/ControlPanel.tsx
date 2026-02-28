
import { Camera, Terminal, Network, ShieldCheck, Disc, Monitor } from 'lucide-react';
import panelImage from '../../assets/vps-panel.webp';

const features = [
    {
        title: 'Snapshots & Backups',
        description: 'Create instant snapshots and download full backups of your VPS to store locally or migrate elsewhere.',
        icon: Camera,
    },
    {
        title: 'REST API',
        description: 'Full-featured API to automate deployments, manage resources, and integrate with your existing workflows.',
        icon: Terminal,
    },
    {
        title: 'Bandwidth Pooling',
        description: 'Share bandwidth across multiple VPS instances in your account. Optimise usage and reduce costs.',
        icon: Network,
    },
    {
        title: 'Cloud Firewall',
        description: 'Manage network security with web-based firewall rules. Control inbound traffic with ease.',
        icon: ShieldCheck,
    },
    {
        title: 'Custom ISO',
        description: 'Boot from your own ISO images. Install any operating system or custom configuration you need.',
        icon: Disc,
    },
    {
        title: 'Web Console',
        description: 'Access your VPS directly from the browser with our built-in noVNC console. No SSH client needed.',
        icon: Monitor,
    }
];

export const CloudVPSControlPanel = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 w-full text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Features for every user
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Our panel uses the VirtFusion software to deliver the most in-demand features through an intuitive, easy-to-use interface - giving you complete control and effortless system management.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                            <feature.icon size={20} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex-1 w-full relative group">
                        <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-950">
                            <img
                                src={panelImage}
                                alt="Intranex Control Panel"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
