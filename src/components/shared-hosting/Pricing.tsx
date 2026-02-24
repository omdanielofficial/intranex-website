import { Check } from 'lucide-react';
import { sharedHostingConfig } from '../../config/shared-hosting';

export const SharedHostingPricing = () => {
    const { plans, sectionTitle, sectionDescription, currency } = sharedHostingConfig;

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        {sectionTitle}
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        {sectionDescription}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {plans.map((plan, index) => {

                        const themeColors: Record<string, string> = {
                            gray: "bg-gray-100 text-gray-700",
                            emerald: "bg-emerald-100 text-emerald-700",
                            amber: "bg-amber-100 text-amber-700",
                            sky: "bg-sky-100 text-sky-700",
                        };

                        const checkColors: Record<string, string> = {
                            gray: "text-gray-400",
                            emerald: "text-emerald-500",
                            amber: "text-amber-500",
                            sky: "text-sky-500",
                        };

                        const checkBgColors: Record<string, string> = {
                            gray: "bg-gray-100",
                            emerald: "bg-emerald-100",
                            amber: "bg-amber-100",
                            sky: "bg-sky-100",
                        };

                        const pillClass = themeColors[plan.theme] || themeColors.gray;
                        const checkClass = checkColors[plan.theme] || checkColors.gray;
                        const checkBg = checkBgColors[plan.theme] || "bg-gray-100";

                        return (
                            <div
                                key={index}
                                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] relative bg-white dark:bg-gray-800 rounded-xl flex flex-col overflow-hidden transition-all ${plan.isBestValue
                                    ? 'ring-2 ring-brand-primary z-10'
                                    : 'border border-gray-200 dark:border-gray-700'
                                    }`}
                            >

                                {plan.badge && (
                                    <div className="absolute top-0 right-0 left-0 flex justify-center -mt-0">
                                        <div className={`${plan.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg flex items-center gap-1`}>
                                            {plan.badge === 'Best Value' && <span>{currency}</span>}
                                            {plan.badge === 'Best Performance' && <span>★</span>}
                                            {plan.badge}
                                        </div>
                                    </div>
                                )}

                                <div className="p-6 pb-8 text-center flex-grow flex flex-col items-center">

                                    <div className={`inline-block px-6 py-2 rounded-full font-bold text-lg mb-6 ${pillClass} mt-4`}>
                                        {plan.name}
                                    </div>


                                    <div className="mb-6 w-full">

                                        <div className="flex items-center justify-center gap-2 mb-1 text-sm">
                                            <span className="text-gray-400 line-through">{currency}{plan.originalPrice}</span>
                                            <span className="text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded textxs font-bold border border-red-100 dark:border-red-900/50">
                                                Save {plan.discount}
                                            </span>
                                        </div>


                                        <div className="flex items-start justify-center text-gray-800 dark:text-white leading-none mb-2">
                                            <span className="text-xl font-bold mt-1">{currency}</span>
                                            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                        </div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">per month</div>

                                        <div className="mt-4 text-xs text-gray-500 font-medium">
                                            Renewal price <span className="font-bold">{currency}{plan.renewalPrice}/mo</span>
                                        </div>
                                    </div>


                                    <div className="w-full mb-8">
                                        <a
                                            href={plan.link || '#'}
                                            className="inline-flex w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform active:scale-95 text-lg justify-center items-center"
                                        >
                                            {plan.buttonText || "Order Now"}
                                        </a>
                                    </div>


                                    <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-6"></div>


                                    <ul className="w-full space-y-3 text-left">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${checkBg} ${checkClass}`}>
                                                    <Check size={12} strokeWidth={4} />
                                                </div>
                                                <span className="flex-1">
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
