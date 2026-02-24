

export const PromoHero = () => {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">
            <div className="container mx-auto px-4 relative z-20 w-full">
                <div className="flex flex-col items-center justify-center text-center">


                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                            Exclusive Deals on <br />
                            <span className="text-white/90">
                                Hosting, VPS & Domains
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 lg:text-xl leading-relaxed mb-8 max-w-2xl">
                            Enjoy limited-time offers on our premium services. Get enterprise-grade performance with <span className="text-white font-bold">NVMe SSD Storage</span>, <span className="text-white font-bold">10Gbps Uplinks</span>, and rock-solid security at unbeatable prices.
                        </p>


                    </div>

                </div>
            </div>
        </section>
    );
};
