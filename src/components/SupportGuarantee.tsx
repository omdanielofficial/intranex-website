import { Headphones, ShieldCheck, RefreshCw } from 'lucide-react';

const features = [
    {
        title: "24/7 Expert Support",
        description: "Reach our support team anytime through multiple channels. Our experts are available 24/7 to help resolve any issues quickly.",
        icon: Headphones,
        color: "text-sky-500",
        bg: "bg-sky-100"
    },
    {
        title: "Money-Back Guarantee",
        description: "Customer satisfaction is our focus. Most plans are backed by a money-back guarantee within the first 48 hours of purchase.",
        icon: RefreshCw,
        color: "text-amber-500",
        bg: "bg-amber-100"
    },
    {
        title: "Trusted & Secure",
        description: "Trusted by over 200 customers, with backup systems located across two separate data centres for enhanced reliability and security.",
        icon: ShieldCheck,
        color: "text-emerald-500",
        bg: "bg-emerald-100"
    }
];

export const SupportGuarantee = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">


                    <div className="w-full lg:w-[28%] lg:pr-10 lg:border-r-[3px] border-brand-primary flex flex-col justify-center mb-8 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            Support Promise
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                            Our commitment goes beyond pre-sales questions. We provide reliable support and after-sales service to ensure your hosting experience stays smooth and worry-free.
                        </p>
                    </div>


                    <div className="w-full lg:w-[72%] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            const paddingClass = "px-6 py-6 lg:py-0";

                            return (
                                <div key={index} className={`${paddingClass} flex flex-col items-center lg:items-start text-center lg:text-left h-full`}>

                                    <div className="mb-6">
                                        <Icon size={48} strokeWidth={1.5} className="text-brand-primary" />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};
