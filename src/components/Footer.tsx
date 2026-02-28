
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
                                    alt="Intranex"
                                    width={32}
                                    height={32}
                                    className="block lg:hidden h-8 w-auto"
                                />

                                <img
                                    src={logo}
                                    alt="Intranex"
                                    width={120}
                                    height={32}
                                    className="hidden lg:block dark:hidden h-8 w-auto"
                                />

                                <img
                                    src={logoWhite}
                                    alt="Intranex"
                                    width={120}
                                    height={32}
                                    className="hidden dark:lg:block h-8 w-auto"
                                />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-2">
                                Intranex builds secure, scalable digital infrastructure for organisations that demand performance. From cloud compute to managed hosting and consultancy, we provide the backbone that keeps businesses running faster, smarter and without compromise.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                            <p>Contact: <span className="text-gray-900 dark:text-gray-300">hello@intranex.org</span></p>

                            <div>
                                <p className="mb-1">Mail Address:</p>
                                <p className="text-gray-900 dark:text-gray-300">
                                    82A James Carter Road<br />
                                    Mildenhall<br />
                                    United Kingdom, IP28 7DE
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Solutions</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Web Hosting', to: '/web' },
                                    { name: 'Virtual Private Servers', to: '/vps' },
                                    { name: 'Dedicated Servers', to: '/dedicated' },
                                    { name: 'Reseller Hosting', to: '/resellers' },
                                    { name: 'Domains', to: '/domains' },
                                    { name: 'Enterprise Solutions', to: '/enterprise' },
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
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Resources</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Documentation', to: 'https://docs.intranex.org/documentation' },
                                    { name: 'Network Status', to: 'https://status.intranex.org' },
                                    { name: 'Changelog', to: 'https://docs.intranex.org/changelog' },
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
                            <h3 className="font-bold text-gray-900 dark:text-white mb-6">Company</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'About Us ', to: '#' },
                                    { name: 'Contact', to: '/contact' },
                                    { name: 'Special Offers', to: '/promo' },
                                    { name: 'Affiliate Program', to: 'https://client.intranex.org/affiliates.php' },
                                    { name: 'Careers', to: 'mailto:careers@intranex.org' }             
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
                                    { name: 'Terms of Service', to: '/legal/terms-of-service' },
                                    { name: 'Privacy Policy', to: '/legal/privacy-policy' },
                                    { name: 'Service Level Agreement', to: '/legal/sla' },
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
                        © {new Date().getFullYear()} Intranex Limited. All rights reserved. Registered in England & Wales under CRN 16068461.
                    </p>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                            className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Cookie Preferences
                        </button>
                        <a href="mailto:hello@intranex.org" className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Report Abuse
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
