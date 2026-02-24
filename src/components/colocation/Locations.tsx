import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { MapPin, Server } from 'lucide-react';
import { colocationConfig } from '../../config/colocation';

export const ColocationLocations = () => {
    const { locations } = colocationConfig;
    const [activeLocationId, setActiveLocationId] = useState(locations[0].id);


    const activeLocation = locations.find(l => l.id === activeLocationId) || locations[0];

    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
                        Our Network
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Global Infrastructure Network
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Position your hardware where it matters most. Our premium colocation facilities offer reduced latency, redundant power, and carrier-neutral connectivity.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {locations.map((location) => (
                            <button
                                key={location.id}
                                onClick={() => setActiveLocationId(location.id)}
                                className={`group flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-300 text-left ${activeLocationId === location.id
                                    ? 'border-brand-primary bg-gray-50 dark:bg-gray-900'
                                    : 'border-transparent bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <ReactCountryFlag
                                        countryCode={location.code}
                                        svg
                                        className="!w-8 !h-8 rounded-lg"
                                    />
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeLocationId === location.id ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                                            }`}>
                                            {location.city}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium">
                                            {location.country}
                                        </p>
                                    </div>
                                </div>
                                <MapPin
                                    size={20}
                                    className={`transition-colors duration-300 ${activeLocationId === location.id ? 'text-brand-primary' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>


                    <div className="w-full lg:w-2/3">
                        <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-brand-primary/20 overflow-hidden h-full flex flex-col relative transition-all duration-500">


                            <div className="relative h-72 md:h-96 w-full overflow-hidden group">
                                <div className="absolute inset-0 bg-gray-900/20 z-10" />
                                <img
                                    src={activeLocation.image}
                                    alt={activeLocation.city}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/1e293b/ffffff?text=' + activeLocation.city;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-20" />

                                <div className="absolute top-6 right-6 z-30">
                                    <div className="text-brand-primary font-bold tracking-widest uppercase text-xs bg-black/50 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2">
                                        {(activeLocation as any).facilityName}
                                    </div>
                                </div>

                                <div className="absolute bottom-8 left-8 z-30">
                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">
                                            {activeLocation.city}
                                        </h3>
                                        <p className="text-white/90 font-medium text-xl flex items-center gap-2">
                                            {activeLocation.country}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="p-8 lg:p-10 flex-grow relative bg-white/50 dark:bg-gray-900/50">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 border border-brand-primary/20">
                                        <Server size={22} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            Facility Overview
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                            {activeLocation.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
