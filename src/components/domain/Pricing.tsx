import { domainConfig } from '../../config/domain';
import { Search } from 'lucide-react';
import { useState } from 'react';

export const DomainPricingHelper = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDomains = domainConfig.pricing.filter(domain =>
        domain.tld.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Domain Pricing
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Transparent registration, renewal, and transfer prices with no hidden fees. 
                    </p>
                </div>


                <div className="mb-8 relative max-w-md mx-auto">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="text-gray-400" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Filter TLDs (e.g. .com, .io)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all"
                    />
                </div>


                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-900 dark:bg-black text-white text-xs uppercase tracking-wider font-bold">
                                    <th className="px-6 py-5">TLD</th>
                                    <th className="px-6 py-5">Register</th>
                                    <th className="px-6 py-5">Renew</th>
                                    <th className="px-6 py-5">Transfer</th>
                                    <th className="px-6 py-5 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {filteredDomains.length > 0 ? (
                                    filteredDomains.map((domain) => (
                                        <tr
                                            key={domain.tld}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-lg text-brand-primary">{domain.tld}</span>
                                                    {domain.popular && (
                                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase tracking-wide">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-gray-900 dark:text-white">{domainConfig.currency}{domain.price}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                                {domainConfig.currency}{domain.renew}
                                            </td>
                                            <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                                {domainConfig.currency}{domain.transfer}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <a
                                                    href={domainConfig.registerUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block bg-brand-primary text-white hover:bg-brand-secondary font-bold py-2 px-6 rounded-lg text-sm transition-all"
                                                >
                                                    Register
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                            No TLDs found matching "{searchTerm}"
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};
