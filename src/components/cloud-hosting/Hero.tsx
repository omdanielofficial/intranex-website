

import heroImage from '../../assets/hero-cloud-hosting.webp';


export const CloudHostingHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">


            <div className="hidden lg:block absolute bottom-0 right-0 w-[50%] z-10 h-[95%] pointer-events-none">
                <img
                    src={heroImage}
                    alt="Cloud Hosting Infrastructure"
                    className="w-full h-full object-contain object-right-bottom"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center">


                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-7xl leading-[1.1] mb-6">
                            High-Performance <br />
                            <span className="text-white/90">
                                Game Hosting
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 lg:text-xl leading-relaxed mb-8 max-w-xl">
                            Lightning-fast hosting with <span className="text-white font-bold">modpack and plugin support, free subdomains, and instant setup</span> for over 15 games.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="#pricing"
                                className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-gray-50 transition-all transform active:scale-95 text-center"
                            >
                                View Plans
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-black/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>


                    <div className="lg:hidden w-full max-w-md mx-auto mt-12 px-4">
                        <img
                            src={heroImage}
                            alt="Cloud Hosting Infrastructure"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
