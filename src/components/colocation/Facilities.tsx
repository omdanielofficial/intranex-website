import { colocationConfig } from '../../config/colocation';

export const ColocationFacilities = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        What's Included?
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions designed to meet your specific business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {colocationConfig.facilities.map((facility, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/20 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-brand-primary mb-6 ring-1 ring-gray-100 dark:ring-gray-700 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <facility.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {facility.title}
                            </h3>

                            <ul className="space-y-2">
                                {facility.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 font-medium text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
