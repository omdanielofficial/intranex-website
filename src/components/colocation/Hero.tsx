import { Check } from 'lucide-react';
import heroImage from '../../assets/hero-colocation.webp';

export const ColocationHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary">


            <div className="hidden lg:block absolute bottom-0 left-0 w-[50%] z-10 h-[95%] pointer-events-none">
                <img
                    src={heroImage}
                    alt="Colocation Infrastructure"
                    className="w-full h-full object-contain object-left-bottom"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full mb-10 lg:mb-0">
                <div className="flex flex-col lg:flex-row items-center">


                    <div className="hidden lg:block lg:w-[50%]"></div>


                    <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right justify-center min-h-[300px] lg:min-h-[400px]">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white lg:text-7xl leading-[1.1] mb-6">
                            Colocation Services <br />
                            <span className="text-white/90">
                                Secure Your Hardware.
                            </span>
                        </h1>

                        <p className="text-lg text-white/90 lg:text-xl leading-relaxed mb-8 max-w-xl">
                            Host your own hardware in our Tier-3 Certified Datacenters. Benefit from our <span className="text-white font-bold">Premium Network & Power Infrastructure</span> while maintaining full control.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center lg:justify-end gap-4">
                            {[
                                "Tier-3 Datacenters",
                                "24/7 Smart Hands Support",
                                "99.98% Power Uptime"
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
                    alt="Colocation Infrastructure"
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
};
