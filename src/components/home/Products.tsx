import { Share2, Server, Cloud, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        icon: Share2,
        title: "Shared Hosting",
        subtitle: "Web Hosting",
        description: "Lightning-fast website hosting with free SSL and business email included.",
        price: "1.80",
        unit: "/mo",
        highlight: "Value Leader",
        theme: "emerald",
        link: "/web",
        features: [
            "DirectAdmin Panel",
            "Free SSL Certificates",
            "NVMe SSD Storage",
            "One-Click App Installer",
            "Business Email",
            "Available in London"
        ]
    },
    {
        icon: Cloud,
        title: "Cloud Compute",
        subtitle: "Virtual Private Servers",
        description: "High-performance KVM virtual servers with NVMe storage and full root access.",
        price: "5.20",
        unit: "/mo",
        highlight: "Most Popular",
        theme: "sky",
        link: "/vps",
        features: [
            "AMD Ryzen™ CPUs",
            "Dedicated CPU Threads",
            "NVMe SSD Storage",
            "Full Root Access",
            "KVM Virtualisation",
            "Available in London & New York City"
        ]
    },
    {
        icon: Server,
        title: "Bare Metal",
        subtitle: "Dedicated Servers",
        description: "Maximum power with single-tenant bare metal hardware for all workloads.",
        price: "95.00",
        unit: "/mo",
        highlight: "Maximum Power",
        theme: "purple",
        link: "/dedicated",
        features: [
            "AMD Ryzen™ CPUs",
            "Single-Tenant Servers",
            "NVMe SSD Storage",
            "Full Root Access",
            "Advanced Monitoring",
            "Available in London & New York City"
        ]
    },
];

export const Products = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pt-24 pb-8 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Popular Services
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Quickly get your website or application online with us.
                        </p>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                            aria-label="Scroll products left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                            aria-label="Scroll products right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>


                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, index) => {
                        const themeColors: Record<string, string> = {
                            gray: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
                            emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                            amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
                            sky: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
                            purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
                            pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
                        };

                        const pillClass = themeColors[product.theme] || themeColors.gray;

                        return (
                            <div
                                key={index}
                                className="min-w-[320px] md:min-w-[380px] bg-white dark:bg-gray-950 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-900 flex flex-col snap-center group hover:border-brand-primary transition-all duration-300 relative text-left"
                            >

                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center text-brand-primary ring-1 ring-gray-100 dark:ring-gray-800 transition-all duration-300">
                                        <product.icon size={32} />
                                    </div>
                                    <div>
                                        <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider mb-2 ${pillClass}`}>
                                            {product.title}
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight">
                                            {product.subtitle}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-8 min-h-[40px]">
                                    {product.description}
                                </p>


                                <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-900">
                                    <p className="text-[10px] font-black tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-2">Starting From</p>
                                    <div className="flex items-start text-gray-900 dark:text-white">
                                        <span className="text-lg font-bold mt-1">£</span>
                                        <span className="text-4xl font-black tracking-tighter">{product.price}</span>
                                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 self-end mb-1 ml-1">{product.unit}</span>
                                    </div>
                                </div>


                                <div className="mb-8 flex-grow">
                                    <ul className="space-y-4">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 size={12} className="text-brand-primary" />
                                                </div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={product.link}
                                    className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-xl hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-3 tracking-tighter text-sm"
                                >
                                    Explore Plans
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
