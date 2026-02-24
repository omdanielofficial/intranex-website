import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero.webp';

export const Hero = () => {
    return (
        <div className="relative bg-white dark:bg-gray-950 flex flex-col font-sans transition-colors duration-300 overflow-hidden">


            <div className="absolute inset-0 pointer-events-none">
            </div>

            <section className="relative pt-16 pb-12 lg:pt-32 lg:pb-32 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">


                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/20 dark:border-brand-primary/30 mb-8 opacity-0 animate-fade-in-up">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-brand-secondary">
                                New Region Store Opened: Jakarta
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.05] tracking-tighter mb-6 opacity-0 animate-fade-in-up animate-delay-100">
                            Powering the <br />
                            <span className="text-brand-primary">
                                Future of Cloud.
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animate-delay-200">
                            Deploy high-performance VPS and Enterprise Dedicated Servers on our global network. Lightning-fast NVMe storage with 99.95% uptime guaranteed.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 opacity-0 animate-fade-in-up animate-delay-300">
                            <Link
                                to="/cloud-vps"
                                className="w-full sm:w-auto px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 group transform active:scale-95 tracking-tighter"
                                aria-label="Get started with Voltera Cloud Cloud VPS"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>


                        <div className="lg:hidden w-full mb-12 opacity-0 animate-scale-in flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-brand-primary/20 blur-[60px] rounded-full animate-pulse-subtle" />
                            <img
                                src={heroImage}
                                alt="Voltera Cloud Infrastructure"
                                width={1000}
                                height={834}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                fetchPriority="high"
                                loading="eager"
                                className="relative z-10 w-full max-w-[400px] h-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.2)]"
                            />
                        </div>


                        <div className="grid grid-cols-2 md:flex items-center justify-center lg:justify-start gap-6 lg:gap-10 border-t border-gray-100 dark:border-gray-900 pt-10 opacity-0 animate-fade-in-up animate-delay-500">
                            {[
                                { label: "100% NVMe", sub: "Enterprise Grade" },
                                { label: "99.95% Uptime", sub: "SLA Guaranteed" },
                                { label: "24/7 Support", sub: "Expert Human" }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center lg:items-start">
                                    <span className="text-lg font-black text-gray-900 dark:text-white">{feature.label}</span>
                                    <span className="text-[10px] font-bold text-gray-700 dark:text-gray-400 tracking-widest">{feature.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="hidden lg:block flex-1 relative w-full opacity-0 animate-scale-in">
                        <div className="relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">

                            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full animate-pulse-subtle" />

                            <div className="relative z-10 w-full max-w-[540px]">
                                <img
                                    src={heroImage}
                                    alt="Voltera Cloud Infrastructure"
                                    width={1000}
                                    height={834}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    fetchPriority="high"
                                    loading="eager"
                                    className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_35px_35px_rgba(255,122,0,0.1)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

