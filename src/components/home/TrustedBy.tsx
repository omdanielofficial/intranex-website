
import logo256 from '../../assets/client/cloudflare.svg';
import logo260 from '../../assets/client/neoprotect.svg';
import logo289 from '../../assets/client/ovhcloud.svg';
import logo343 from '../../assets/client/amd.svg';
import logo354 from '../../assets/client/virtfusion.svg';
import logo380 from '../../assets/client/directadmin.svg';

const logos = [
    logo256,
    logo260,
    logo289,
    logo343,
    logo354,
    logo380,
];


const allLogos = [...logos, ...logos, ...logos];

export const TrustedBy = () => {
    return (
        <section className="pt-8 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Our Trusted Global Partners
                </p>
            </div>

            <div className="relative w-full">

                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10"></div>

                <div className="flex w-max animate-scroll">
                    {allLogos.map((logo, index) => (
                        <div key={index} className="mx-8 md:mx-12 w-32 md:w-40 flex items-center justify-center">
                            <img
                                src={logo}
                                alt="Client Logo"
                                width={160}
                                height={60}
                                className="w-full h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};
