import { Check } from 'lucide-react';
import heroImage from '../../assets/hero-dedicated.webp';

export const DedicatedServerHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">


            <div className="hidden lg:block absolute bottom-0 left-0 w-[50%] z-10 h-[95%] pointer-events-none">
                <img
                    src={heroImage}
                    alt="Dedicated Server Infrastructure"
                    className="w-full h-full object-contain object-left-bottom"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full mb-10 lg:mb-0">
                <div className="flex flex-col lg:flex-row items-center">


                    <div className="hidden lg:block lg:w-[45%]"></div>


                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center min-h-[300px] lg:min-h-[400px]">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-7xl leading-[1.1] mb-6">
                            Dedicated Server <br />
                            <span className="text-white/90">
                                Bare Metal Power.
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 lg:text-xl leading-relaxed mb-8 max-w-xl">
                            Unleash maximum performance with single-tenant bare metal servers. <span className="text-white font-bold">100% Dedicated Resources</span> for your most demanding workloads.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                            {[
                                "24 Hour Money Back Guarantee",
                                "Enterprise Hardware",
                                "99.95% SLA Guarantee"
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

                </div>
            </div>


            <div className="lg:hidden w-full max-w-md mx-auto mt-12 px-4 relative z-10">
                <img
                    src={heroImage}
                    alt="Dedicated Server Infrastructure"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};
