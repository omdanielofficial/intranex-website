import { Link } from 'react-router-dom';
import ctaImage from '../../assets/cta.webp';

export const CTA = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden bg-brand-primary rounded-3xl px-8 pt-12 md:px-16 md:pt-16 pb-0">


                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20 h-full">


                        <div className="w-full max-w-lg lg:w-1/2 flex-shrink-0 order-2 lg:order-1 self-end -mb-1">
                            <img
                                src={ctaImage}
                                alt="24/7 Support Team"
                                width={500}
                                height={333}
                                className="w-full h-auto block object-contain"
                            />
                        </div>


                        <div className="max-w-xl text-center lg:text-left order-1 lg:order-2 lg:w-1/2 pb-12 lg:pb-20">
                            <div className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-white text-xs font-bold mb-6 border border-white/20 tracking-widest">
                                Human Support, No Chatbots
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                We're here anytime <br /> you need us.
                            </h2>
                            <p className="text-lg text-white/90 mb-8 font-medium leading-relaxed">
                                Need help choosing a plan? Our expert team is always available to find a solution that works for you.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/contact"
                                    className="min-w-[170px] px-8 py-3.5 bg-white text-brand-primary font-bold rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                                    aria-label="View contact details"
                                >
                                    Get in Touch
                                </Link>
                                <Link
                                    to="https://docs.intranex.org"
                                    className="min-w-[170px] px-8 py-3.5 bg-transparent border border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-200 text-center"
                                    aria-label="View contact details"
                                >
                                    Read our Docs
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
