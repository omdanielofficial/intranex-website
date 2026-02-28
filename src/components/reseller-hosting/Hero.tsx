import { Check } from 'lucide-react';
import heroImage from '../../assets/hero-reseller.webp';

export const ResellerHostingHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">


            <div className="hidden lg:block absolute bottom-0 right-0 w-[40%] z-10 h-[90%] pointer-events-none">
                <img
                    src={heroImage}
                    alt="Reseller Hosting Infrastructure"
                    className="w-full h-full object-contain object-right-bottom opacity-90"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center">


                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-sm tracking-wide mb-6">
                            Coming Soon to Intranex
                        </div>

                        <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-7xl leading-[1.1] mb-6">
                            White Label <br />
                            <span className="text-white/90">
                                Reseller Hosting
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 lg:text-xl leading-relaxed mb-8 max-w-xl">
                            Create your own hosting company with our 100% white-label reseller plans. Manage unlimited clients with <span className="text-white font-bold">DirectAdmin and Blesta</span>. We handle the tech, you keep the profits.
                        </p>

                        <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                            {[
                                "Use Your Own Branding",
                                "Free Blesta License",
                                "Advanced Customisation & Integrations"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2.5 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-white font-semibold transition-all hover:bg-white/20 cursor-default">
                                    <div className="bg-white text-brand-primary rounded-full p-0.5 flex items-center justify-center">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="lg:hidden w-full max-w-sm mx-auto mt-12 px-4">
                        <img
                            src={heroImage}
                            alt="Reseller Hosting"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
