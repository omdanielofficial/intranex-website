import { Tag, LayoutDashboard, MapPin, Lock, Server, LayoutTemplate } from 'lucide-react';

export const ResellerHostingFeatures = () => {
    const features = [
        {
            title: "100% Whitelabel",
            description: "Use your own brand entirely without any Voltera Cloud branding visible to your clients.",
            icon: Tag
        },
        {
            title: "WHM & cPanel",
            description: "Industry-standard cPanel for your clients and powerful WHM for you to manage accounts easily.",
            icon: LayoutDashboard
        },
        {
            title: "Multiple Server Locations",
            description: "Choose the best location for your hosting: Indonesia, Singapore, or Germany.",
            icon: MapPin
        },
        {
            title: "Free SSL Certificates",
            description: "Secure all your domains and subdomains with free, automated SSL certificates.",
            icon: Lock
        },
        {
            title: "Custom Nameserver",
            description: "Establish your brand identity by using your own custom private nameservers (e.g., ns1.yourbrand.com).",
            icon: Server
        },
        {
            title: "Website Builder",
            description: "Create professional websites easily with a drag & drop builder suitable for beginners.",
            icon: LayoutTemplate
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-950 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Reseller Hosting Features
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Get these powerful features when you subscribe to Voltera Cloud reseller hosting packages.
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
