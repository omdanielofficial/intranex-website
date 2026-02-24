import { useState } from 'react';
import { Check, Server, Box } from 'lucide-react';
import { colocationConfig } from '../../config/colocation';

export const ColocationPricing = () => {
    const [category, setCategory] = useState<'units' | 'racks'>('units');
    const products = colocationConfig[category];

    const getTheme = (index: number) => {
        const themes = ['gray', 'emerald', 'sky', 'purple', 'amber'];
        return themes[index % themes.length];
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Choose the perfect space for your hardware. From single units to full racks, we have you covered.
                    </p>


                    <div className="flex items-center justify-center mt-8">
                        <div className="bg-white dark:bg-gray-800 p-1.5 rounded-xl border border-gray-200 dark:border-gray-700 inline-flex">
                            <button
                                onClick={() => setCategory('units')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${category === 'units'
                                    ? 'bg-brand-primary text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <Server size={16} />
                                Single Units
                            </button>
                            <button
                                onClick={() => setCategory('racks')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${category === 'racks'
                                    ? 'bg-brand-primary text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <Box size={16} />
                                Rack Cabinets
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`grid gap-8 ${category === 'units' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto'}`}>
                    {products.map((product, index) => {
                        const theme = getTheme(index);

                        const themeColors: Record<string, string> = {
                            gray: "bg-gray-100 text-gray-700",
                            emerald: "bg-emerald-100 text-emerald-700",
                            amber: "bg-amber-100 text-amber-700",
                            sky: "bg-sky-100 text-sky-700",
                            purple: "bg-purple-100 text-purple-700",
                            pink: "bg-pink-100 text-pink-700",
                            indigo: "bg-indigo-100 text-indigo-700",
                        };

                        const checkColors: Record<string, string> = {
                            gray: "text-gray-400",
                            emerald: "text-emerald-500",
                            amber: "text-amber-500",
                            sky: "text-sky-500",
                            purple: "text-purple-500",
                            pink: "text-pink-500",
                            indigo: "text-indigo-500",
                        };

                        const checkBgColors: Record<string, string> = {
                            gray: "bg-gray-100",
                            emerald: "bg-emerald-100",
                            amber: "bg-amber-100",
                            sky: "bg-sky-100",
                            purple: "bg-purple-100",
                            pink: "bg-pink-100",
                            indigo: "bg-indigo-100",
                        };

                        const pillClass = themeColors[theme] || themeColors.gray;
                        const checkClass = checkColors[theme] || checkColors.gray;
                        const checkBg = checkBgColors[theme] || "bg-gray-100";

                        return (
                            <div
                                key={product.id}
                                className="relative bg-white dark:bg-gray-800 rounded-2xl flex flex-col overflow-hidden transition-all border border-gray-100 dark:border-gray-700"
                            >
                                <div className="p-8 text-center flex-grow flex flex-col items-center">
                                    <div className={`inline-block px-6 py-2 rounded-full font-bold text-lg mb-4 ${pillClass} mt-4`}>
                                        {product.name}
                                    </div>

                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs mx-auto">
                                        {product.description}
                                    </p>

                                    <div className="mb-8 w-full">
                                        <div className="flex items-start justify-center text-gray-800 dark:text-white leading-none mb-2">
                                            <span className="text-xl font-bold mt-1">{colocationConfig.currency}</span>
                                            <span className="text-5xl font-extrabold tracking-tight">{product.price}</span>
                                        </div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">per month</div>
                                    </div>

                                    <div className="w-full mb-8">
                                        <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform active:scale-95 text-lg">
                                            Configure Now
                                        </button>
                                    </div>

                                    <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-6"></div>

                                    <ul className="w-full space-y-3 text-left">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${checkBg} ${checkClass}`}>
                                                    <Check size={12} strokeWidth={4} />
                                                </div>
                                                <span className="flex-1 font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
