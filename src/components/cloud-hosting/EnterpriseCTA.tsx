import { ArrowRight } from 'lucide-react';

export const CloudHostingEnterpriseCTA = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Still need more resources?
                        </h2>
                        <p className="text-white/90 text-lg font-medium">
                            We also offer latest-gen bare metal Ryzen 9 9950X servers with 192GB and 256GB memory configurations. Available in London, UK and New York City, US.
                        </p>
                    </div>
<div className="flex-shrink-0">
    <a
        href="/baremetal"
        className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-gray-50 font-bold py-3 px-8 rounded-xl transition-all"
    >
        Bare Metal
        <ArrowRight size={20} />
    </a>
</div>
                </div>
            </div>
        </section>
    );
};
