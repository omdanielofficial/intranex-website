
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo-white.svg';
import logo from '../assets/logo.svg';
import logoMobile from '../assets/logo-mobile.svg';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black pt-20 pb-10 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">


                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6">

                                <img
                                    src={logoMobile}
                                    alt="Voltera"
                                    width={32}
                                    height={32}
                                    className="block lg:hidden h-8 w-auto"
                                />

                                <img
                                    src={logo}
                                    alt="Voltera"
                                    width={120}
                                    height={32}
                                    className="hidden lg:block dark:hidden h-8 w-auto"
                                />

                                <img
                                    src={logoWhite}
                                    alt="Voltera"
                                    width={120}
                                    height={32}
                                    className="hidden dark:lg:block h-8 w-auto"
                                />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-6">
                                Empowering global businesses with next-generation cloud infrastructure. Voltera Cloud combines elite NVMe performance with institutional-grade reliability for your most ambitious projects.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                            <p>Contact: <span className="text-gray-900 dark:text-gray-300">support@voltera.cloud</span></p>

                            <div>
                                <p className="mb-1">Address:</p>
                                <p className="text-gray-900 dark:text-gray-300">
                                    PT. Voltera Cloud Indonesia<br />
                                    Menara Imperium, Lt. 15, Jl. H. R. Rasuna Said<br />
                                    Jakarta Selatan, Indonesia 12980
                                </p>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto">
                            PT. Voltera Cloud Indonesia, registered in Jakarta, Indonesia.<br />
                            Tax ID: 42.123.456.7-013.000
                        </p>
                    </div>


                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Solutions</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Shared Hosting', to: '/shared-hosting' },
                                    { name: 'Cloud Hosting', to: '/cloud-hosting' },
                                    { name: 'Reseller Hosting', to: '/reseller-hosting' },
                                    { name: 'Cloud VPS', to: '/cloud-vps' },
                                    { name: 'Dedicated Server', to: '/dedicated-server' },
                                    { name: 'Colocation', to: '/colocation' },
                                    { name: 'Domain Names', to: '/domain' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.to} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Support</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Contact Us', to: '/contact' },
                                    { name: 'Documentation', to: '#' },
                                    { name: 'Service Status', to: '#' },
                                    { name: 'Looking Glass', to: '#' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        {item.to === '#' ? (
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link to={item.to} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Client Area', to: '#' },
                                    { name: 'Affiliate Program', to: '#' },
                                    { name: 'API Access', to: '#' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        {item.to === '#' ? (
                                            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link to={item.to} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Legal</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Fair Use Policy', to: '/legal/fair-use-policy' },
                                    { name: 'Privacy Policy', to: '/legal/privacy-policy' },
                                    { name: 'Terms of Service', to: '/legal/terms-of-service' },
                                    { name: 'SLA', to: '/legal/sla' },
                                    { name: 'Refund Policy', to: '/legal/refund-policy' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.to} className="text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="pt-8 border-t border-gray-200 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        © {new Date().getFullYear()} PT. Voltera Cloud Indonesia. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                            className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Cookie Preferences
                        </button>
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            System Status
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
