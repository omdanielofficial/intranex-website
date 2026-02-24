import { useState, useMemo, useEffect } from 'react';
import { dedicatedServerConfig } from '../../config/dedicated-server';
import { Filter, ChevronDown, Check, Server, Cpu, HardDrive, Network, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

export const DedicatedServerPricing = () => {

    const [priceRange, setPriceRange] = useState<[number, number]>([
        dedicatedServerConfig.filterPriceRange.min,
        dedicatedServerConfig.filterPriceRange.max
    ]);
    const [selectedCpu, setSelectedCpu] = useState<string[]>([]);
    const [selectedRam, setSelectedRam] = useState<string[]>([]);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc'>('price_asc');


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    const [showMobileFilters, setShowMobileFilters] = useState(false);


    const filteredServers = useMemo(() => {
        return dedicatedServerConfig.servers.filter(server => {
            const matchPrice = server.price >= priceRange[0] && server.price <= priceRange[1];
            const matchCpu = selectedCpu.length === 0 || selectedCpu.includes(server.type);


            const matchRam = selectedRam.length === 0 || selectedRam.some(label => {
                const range = dedicatedServerConfig.ramRanges.find(r => r.label === label);
                if (!range) return false;
                const ramValue = parseInt(server.ram);
                return ramValue >= range.min && ramValue <= range.max;
            });

            const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(server.location);

            return matchPrice && matchCpu && matchRam && matchLocation;
        }).sort((a, b) => {
            if (sortBy === 'price_asc') return a.price - b.price;
            return b.price - a.price;
        });
    }, [priceRange, selectedCpu, selectedRam, selectedLocations, sortBy]);


    useEffect(() => {
        setCurrentPage(1);
    }, [priceRange, selectedCpu, selectedRam, selectedLocations, sortBy]);


    const totalPages = Math.ceil(filteredServers.length / itemsPerPage);
    const paginatedServers = filteredServers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    const toggleFilter = (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
        if (state.includes(item)) {
            setState(state.filter(i => i !== item));
        } else {
            setState([...state, item]);
        }
    };

    const clearFilters = () => {
        setPriceRange([
            dedicatedServerConfig.filterPriceRange.min,
            dedicatedServerConfig.filterPriceRange.max
        ]);
        setSelectedCpu([]);
        setSelectedRam([]);
        setSelectedLocations([]);
        setCurrentPage(1);
    };

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="lg:hidden">
                        <button
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                            className="w-full flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white transition-all"
                        >
                            <span className="flex items-center gap-2">
                                <Filter size={18} className="text-brand-primary" />
                                Filters & Sorting
                            </span>
                            <div className={`p-1 rounded-full bg-gray-100 dark:bg-gray-700 transition-transform duration-200 ${showMobileFilters ? 'rotate-180' : ''}`}>
                                <ChevronDown size={20} className="text-gray-600 dark:text-gray-300" />
                            </div>
                        </button>
                    </div>


                    <div className={`w-full lg:w-[280px] flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    Filters
                                    <Filter size={16} className="text-gray-400" />
                                </h3>
                                <button
                                    onClick={clearFilters}
                                    className="text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors uppercase tracking-wide"
                                >
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-8">

                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Price Range</h4>
                                    <div className="px-1">
                                        <div className="relative w-full h-6 mb-2 flex items-center">

                                            <div className="absolute w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">

                                                <div
                                                    className="absolute h-full bg-brand-primary/80 transition-all duration-150"
                                                    style={{
                                                        left: `${((priceRange[0] - dedicatedServerConfig.filterPriceRange.min) / (dedicatedServerConfig.filterPriceRange.max - dedicatedServerConfig.filterPriceRange.min)) * 100}%`,
                                                        width: `${((priceRange[1] - priceRange[0]) / (dedicatedServerConfig.filterPriceRange.max - dedicatedServerConfig.filterPriceRange.min)) * 100}%`
                                                    }}
                                                ></div>
                                            </div>


                                            <input
                                                type="range"
                                                min={dedicatedServerConfig.filterPriceRange.min}
                                                max={dedicatedServerConfig.filterPriceRange.max}
                                                value={priceRange[0]}
                                                onChange={(e) => {
                                                    const value = Math.min(Number(e.target.value), priceRange[1] - 10);
                                                    setPriceRange([value, priceRange[1]]);
                                                }}
                                                className="absolute inset-0 w-full h-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-white [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-primary [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:ring-2 [&::-moz-range-thumb]:ring-white hover:[&::-webkit-slider-thumb]:scale-110 transition-transform"
                                                style={{ zIndex: priceRange[0] > (dedicatedServerConfig.filterPriceRange.max * 0.9) ? 20 : 10 }}
                                            />


                                            <input
                                                type="range"
                                                min={dedicatedServerConfig.filterPriceRange.min}
                                                max={dedicatedServerConfig.filterPriceRange.max}
                                                value={priceRange[1]}
                                                onChange={(e) => {
                                                    const value = Math.max(Number(e.target.value), priceRange[0] + 10);
                                                    setPriceRange([priceRange[0], value]);
                                                }}
                                                className="absolute inset-0 w-full h-full appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-primary [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:ring-2 [&::-moz-range-thumb]:ring-white [&::-moz-range-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 transition-transform"
                                                style={{ zIndex: 11 }}
                                            />
                                        </div>

                                        <div className="flex justify-between mt-2 text-xs font-bold text-gray-700 dark:text-gray-300 font-mono">
                                            <span>{dedicatedServerConfig.currency}{priceRange[0]}</span>
                                            <span>{dedicatedServerConfig.currency}{priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">CPU</h4>
                                    <div className="space-y-2">
                                        {dedicatedServerConfig.cpuTypes.map(cpu => (
                                            <label key={cpu} className="flex items-center gap-3 cursor-pointer group select-none">
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedCpu.includes(cpu) ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 group-hover:border-brand-primary'}`}>
                                                    {selectedCpu.includes(cpu) && <Check size={14} strokeWidth={3} />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={selectedCpu.includes(cpu)}
                                                    onChange={() => toggleFilter(selectedCpu, setSelectedCpu, cpu)}
                                                />
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-brand-primary transition-colors">{cpu}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>


                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">RAM</h4>
                                    <div className="space-y-2">
                                        {dedicatedServerConfig.ramRanges.map(range => (
                                            <label key={range.label} className="flex items-center gap-3 cursor-pointer group select-none">
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedRam.includes(range.label) ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 group-hover:border-brand-primary'}`}>
                                                    {selectedRam.includes(range.label) && <Check size={14} strokeWidth={3} />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={selectedRam.includes(range.label)}
                                                    onChange={() => toggleFilter(selectedRam, setSelectedRam, range.label)}
                                                />
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-brand-primary transition-colors">{range.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>


                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Location</h4>
                                    <div className="space-y-2">
                                        {dedicatedServerConfig.locations.map(loc => (
                                            <label key={loc.id} className="flex items-center gap-3 cursor-pointer group select-none">
                                                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${selectedLocations.includes(loc.id) ? 'bg-brand-primary border-brand-primary text-white scale-110' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 group-hover:border-brand-primary'}`}>
                                                    {selectedLocations.includes(loc.id) && <Check size={14} strokeWidth={3} />}
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={selectedLocations.includes(loc.id)}
                                                    onChange={() => toggleFilter(selectedLocations, setSelectedLocations, loc.id)}
                                                />
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2 group-hover:text-brand-primary transition-colors">
                                                    <ReactCountryFlag countryCode={loc.country} svg style={{ width: '1.2em', height: '1.2em' }} className="rounded-sm" />
                                                    {loc.name}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex-1">

                        <div className="flex items-center justify-between mb-8 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                            <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                                Found <span className="text-brand-primary">{filteredServers.length}</span> dedicated servers
                            </h2>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hidden sm:inline">Sort:</span>
                                <div className="relative group">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as any)}
                                        className="appearance-none bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-sm font-bold py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/20 cursor-pointer hover:border-brand-primary/50 transition-colors"
                                    >
                                        <option value="price_asc">Price: Lowest</option>
                                        <option value="price_desc">Price: Highest</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-brand-primary transition-colors" />
                                </div>
                            </div>
                        </div>


                        {filteredServers.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {paginatedServers.map((server) => {
                                        const locationObj = dedicatedServerConfig.locations.find(l => l.id === server.location);
                                        return (
                                            <div key={server.id} className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all group flex flex-col">
                                                <div className="p-6 flex-1 flex flex-col">


                                                    <div className="flex justify-between items-start mb-4">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <Server size={18} className="text-brand-primary" />
                                                                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white leading-tight">
                                                                    {server.cpu}
                                                                </h3>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-2.5 py-1 rounded-full border border-gray-100 dark:border-gray-600">
                                                            <ReactCountryFlag countryCode={locationObj?.country || 'US'} svg className="rounded-full !w-[1em] !h-[1em]" />
                                                            <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                                                                {locationObj?.id?.split('-')[1]?.toUpperCase() || 'UNK'}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="h-px bg-gray-100 dark:bg-gray-700/50 mb-4"></div>


                                                    <div className="space-y-3 mb-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-brand-primary">
                                                                <Zap size={16} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{server.ram}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-brand-primary">
                                                                <HardDrive size={16} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{server.storage}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-brand-primary">
                                                                <Network size={16} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{server.portSpeed}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-brand-primary">
                                                                <Cpu size={16} />
                                                            </div>
                                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{server.cores} Cores / {server.threads} Threads</span>
                                                        </div>
                                                    </div>


                                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between gap-4">
                                                        <div className="flex flex-col">
                                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Monthly</span>
                                                            <div className="flex items-baseline gap-0.5">
                                                                <span className="text-lg font-extrabold text-gray-900 dark:text-white">{dedicatedServerConfig.currency}{server.price}</span>
                                                            </div>
                                                        </div>

                                                        <a
                                                            href={server.link || '#'}
                                                            className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white dark:hover:text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                                        >
                                                            Configure
                                                            <ArrowRight size={14} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>


                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-12 gap-2">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${currentPage === page
                                                    ? 'bg-brand-primary text-white scale-110'
                                                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-brand-primary/50'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                                <div className="w-24 h-24 bg-gray-50 dark:bg-gray-700/30 rounded-full flex items-center justify-center text-gray-300 dark:text-gray-600 mb-6">
                                    <Server size={48} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No servers found</h3>
                                <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-8">
                                    Adjust your filters to find the perfect dedicated server for your needs.
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl transition-all"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
