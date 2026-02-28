
import heroImage from '../../assets/hero-vps.webp';

export const CloudVPSHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900">



            <div className="hidden lg:block absolute bottom-0 right-0 w-[48%] z-10 h-[90%] pointer-events-none">
                <img
                    src={heroImage}
                    alt="Cloud VPS Infrastructure"
                    className="w-full h-full object-contain object-right-bottom"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full mb-10 lg:mb-0">
                <div className="flex flex-col lg:flex-row items-center">


                    <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center min-h-[300px] lg:min-h-[400px]">
                        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-7xl leading-[1.1] mb-6">
 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                                Virtual Private Servers
                            </span>
                        </h1>

                        <p className="text-lg text-gray-500 dark:text-gray-400 lg:text-xl leading-relaxed max-w-xl">
                            High-performance KVM virtual servers powered by <span className="text-gray-900 dark:text-white font-bold">latest generation</span> hardware. Deploy in seconds, scale with ease, and build your infrastructure without worrying about costs.
                        </p>
                    </div>


                    <div className="hidden lg:block lg:w-[45%]"></div>
                </div>
            </div>


            <div className="lg:hidden w-[85%] ml-auto mt-auto relative z-10">
                <img
                    src={heroImage}
                    alt="Cloud VPS Infrastructure"
                    className="w-full h-auto object-contain object-right-bottom"
                />
            </div>
        </section>
    );
};
