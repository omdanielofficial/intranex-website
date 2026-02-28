import { Check } from 'lucide-react';
import { colocationConfig } from '../../config/colocation';

export const ColocationPricing = () => {
    const products = colocationConfig.units;

    const getTheme = (index: number) => {
        const themes = ['gray', 'emerald'];
        return themes[index % themes.length];
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Flexible and affordable pricing for startups and growing businesses.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
                    {products.map((product, index) => {
                        const theme = getTheme(index);

                        const themeColors: Record<string, string> = {
                            gray: "bg-gray-100 text-gray-700",
                            emerald: "bg-emerald-100 text-emerald-700",
                        };

                        const checkColors: Record<string, string> = {
                            gray: "text-gray-400",
                            emerald: "text-emerald-500",
                        };

                        const checkBgColors: Record<string, string> = {
                            gray: "bg-gray-100",
                            emerald: "bg-emerald-100",
                        };

                        const pillClass = themeColors[theme] || themeColors.gray;
                        const checkClass = checkColors[theme] || checkColors.gray;
                        const checkBg = checkBgColors[theme] || "bg-gray-100";

                        return (
                            <div
                                key={product.id}
                                className="relative bg-white dark:bg-gray-800 rounded-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm"
                            >
                                <div className="p-8 text-center flex-grow flex flex-col items-center">

                                    {/* Plan Name */}
                                    <div className={`inline-block px-6 py-2 rounded-full font-bold text-lg mb-4 ${pillClass}`}>
                                        {product.name}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs mx-auto">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8 w-full">
                                        <div className="flex items-start justify-center text-gray-800 dark:text-white leading-none mb-2">
                                            <span className="text-xl font-bold mt-1">
                                                {colocationConfig.currency}
                                            </span>
                                            <span className="text-5xl font-extrabold tracking-tight">
                                                {product.price}+
                                            </span>
                                        </div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                                            per month
                                        </div>
                                    </div>

                                    {/* CTA */}
<div className="w-full mb-8">
    <a
        href={product.link || '#'}
        className="inline-flex w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform active:scale-95 text-lg justify-center items-center"
    >
        {"Contact Us"}
    </a>
</div>

                                    <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-6"></div>

                                    {/* Features */}
                                    <ul className="w-full space-y-3 text-left">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${checkBg}`}>
                                                    <Check size={12} strokeWidth={4} className={checkClass} />
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