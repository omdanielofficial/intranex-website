import { useState } from 'react';
import { cloudVPSConfig } from '../../config/cloud-vps';
import { ArrowRight } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

export const CloudVPSPricing = () => {
    const [selectedType, setSelectedType] = useState('linux');
    const [selectedRegion, setSelectedRegion] = useState('uk-ldn');


    const planKey = selectedType as keyof typeof cloudVPSConfig.plans;
    const currentPlans = cloudVPSConfig.plans[planKey] || [];

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">


                <div className="mb-10 flex justify-center">
                    <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        {cloudVPSConfig.serviceTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${selectedType === type.id
                                    ? 'bg-white dark:bg-gray-700 text-brand-primary'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <span className="block">{type.name}</span>
                                <span className="text-xs font-normal opacity-75">{type.pricePerGB}/GB</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 sticky top-24">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-brand-primary rounded-full"></span>
                                Region
                            </h4>
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                                {cloudVPSConfig.regions.map((region) => (
                                    <button
                                        key={region.id}
                                        onClick={() => setSelectedRegion(region.id)}
                                        className={`w-full p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 text-left ${selectedRegion === region.id
                                            ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
                                            : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-700/50'
                                            }`}
                                    >
                                        <div className="w-8 h-6 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                                            <ReactCountryFlag
                                                countryCode={region.country}
                                                svg
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                                title={region.name}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-gray-900 dark:text-white text-sm truncate">{region.name}</div>
                                        </div>
                                        {selectedRegion === region.id && <div className="w-2 h-2 rounded-full bg-brand-primary"></div>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="flex-1 w-full">

                        <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 dark:from-brand-primary/10 dark:to-brand-secondary/10 rounded-2xl p-6 border border-brand-primary/10 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{cloudVPSConfig.serviceTypes.find(t => t.id === selectedType)?.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {cloudVPSConfig.serviceTypes.find(t => t.id === selectedType)?.description}
                            </p>
                        </div>


                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-900 dark:bg-black text-white text-xs uppercase tracking-wider font-bold">
                                            <th className="px-6 py-5">Plan</th>
                                            <th className="px-6 py-5">Cores</th>
                                            <th className="px-6 py-5">RAM</th>
                                            <th className="px-6 py-5">Storage</th>
                                            <th className="px-6 py-5">Traffic</th>
                                            <th className="px-6 py-5">Price</th>
                                            <th className="px-6 py-5"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {currentPlans.map((plan, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors group">
                                                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{plan.name}</td>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{plan.vcpu}</td>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{plan.ram}</td>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{plan.storage}</td>
                                                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{plan.bandwidth}</td>
<td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
  {cloudVPSConfig.currency}
  {Number(plan.price).toFixed(2)}/mo
</td>
                                                <td className="px-6 py-4 text-right">
                                                    <a
                                                        href={plan.links[selectedRegion as keyof typeof plan.links] || '#'}
                                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all bg-brand-primary text-white hover:bg-brand-secondary"
                                                    >
                                                        Configure
                                                        <ArrowRight size={16} />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
