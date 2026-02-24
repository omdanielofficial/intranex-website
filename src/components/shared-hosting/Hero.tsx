

import heroImage from '../../assets/hero-sharedhost.webp';

export const SharedHostingHero = () => {
    return (
        <section className="relative pt-10 pb-0 lg:pt-32 lg:pb-32 overflow-hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900">



            <div className="hidden lg:block absolute bottom-0 left-0 w-[48%] z-10 h-[90%]">
                <img
                    src={heroImage}
                    alt="Shared Hosting Infrastructure"
                    className="w-full h-full object-contain object-left-bottom"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 w-full mb-10 lg:mb-0">
                <div className="flex flex-col lg:flex-row">

                    <div className="hidden lg:block lg:w-[55%]"></div>


                    <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end text-center lg:text-right justify-center min-h-[300px] lg:min-h-[400px]">
                        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-7xl leading-[1.1] mb-6">
                            Shared Hosting <br />
                            <span className="text-brand-primary">
                                Built for Speed.
                            </span>
                        </h1>

                        <p className="text-lg text-gray-500 dark:text-gray-400 lg:text-xl leading-relaxed lg:ml-auto">
                            Deploy your site on our enterprise <span className="text-gray-900 dark:text-white font-bold">NVMe Storage</span>. Faster, more secure, and always online.
                        </p>
                    </div>
                </div>
            </div>


            <div className="lg:hidden w-[85%] mr-auto mt-auto relative z-10">
                <img
                    src={heroImage}
                    alt="Shared Hosting Infrastructure"
                    className="w-full h-auto object-contain object-left-bottom"
                />
            </div>
        </section>
    );
};
