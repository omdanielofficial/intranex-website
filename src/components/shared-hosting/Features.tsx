import installerImg from '../../assets/installer.webp';
import nodejsImg from '../../assets/nodejs.webp';
import toolsImg from '../../assets/tools.webp';

export const SharedHostingFeatures = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden space-y-24 lg:space-y-32">


            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                        <img
                            src={installerImg}
                            alt="Easy Essential Features for Beginners"
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Easy Essential Features for Beginners
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                Our hosting services cover all the essential features you need to build and run your website with ease.
                                With a <span className="font-bold text-gray-900 dark:text-white">familiar and user-friendly cPanel control panel</span>, managing your website, email, and domains becomes simple—even for beginners.
                            </p>
                            <p>
                                Get access to <span className="font-bold text-gray-900 dark:text-white">400+ ready-to-use applications</span>, including WordPress, online stores, marketing tools, news sites, company profiles, blogs, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Now with Node.js Support
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                We support modern JavaScript-based web development with <span className="font-bold text-brand-primary">multiple Node.js versions available</span>.
                            </p>
                            <p>
                                Run applications such as <span className="font-semibold text-gray-900 dark:text-white">Nuxt.js, Headless CMS, static sites</span>, and other modern JavaScript frameworks with ease.
                            </p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200">
                                Perfect for developers who want flexibility without server management hassle.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={nodejsImg}
                            alt="Node.js Support"
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </div>

                </div>
            </div>


            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                        <img
                            src={toolsImg}
                            alt="Built for Developers & Power Users"
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Built for Developers & Power Users
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                <span className="font-bold text-gray-900 dark:text-white">Advanced and Pro plans</span> unlock powerful features for more complex workloads, including:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Python", "Ruby", "Golang", "Rust", "Redis", "Memcached", "SSH", "Bash", "Git", "MongoDB"].map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p>
                                Developers and power users can deploy and run advanced applications effortlessly—without worrying about time-consuming server administration.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};
