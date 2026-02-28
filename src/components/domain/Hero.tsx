import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { domainConfig } from '../../config/domain';

export const DomainHero = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!query) return;

        const whmcsUrl = `${domainConfig.searchUrl}${query}`;
        window.open(whmcsUrl, '_blank');
    };

    const getPrice = (tld: string) => {
        const item = domainConfig.pricing.find(p => p.tld === tld);
        return item ? `${domainConfig.currency}${item.price}` : '';
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

            <div className="absolute inset-0 bg-white dark:bg-gray-950 transition-colors duration-300">
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
                        Find your perfect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            digital identity
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Secure your online presence with our wide selection of domain names. Get easy management, privacy protection, and instant activation.
                    </p>


                    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-10 group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="text-gray-400" size={24} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for your domain..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full h-14 lg:h-16 pl-12 lg:pl-14 pr-14 lg:pr-36 rounded-2xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 text-base lg:text-lg font-medium text-gray-900 dark:text-white focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 bottom-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold w-10 lg:w-auto lg:px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span className="hidden lg:inline">Search</span>
                            <ArrowRight size={20} className="lg:w-[18px] lg:h-[18px] transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>


                    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-base font-medium text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 dark:text-white text-lg">.com</span>
                            <span className="text-brand-primary font-bold">{getPrice('.com')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 dark:text-white text-lg">.net</span>
                            <span className="text-brand-primary font-bold">{getPrice('.net')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900 dark:text-white text-lg">.org</span>
                            <span className="text-brand-primary font-bold">{getPrice('.org')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
