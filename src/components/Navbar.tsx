import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Share2, ChevronDown, Moon, Sun, Database, Server, Cloud, ShoppingBasketIcon, MedalIcon, SearchIcon, WifiHighIcon, BookIcon, ClockArrowDown, GamepadIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { announcementConfig } from '../config/announcement';
import logoWhite from '../assets/logo-white.svg';
import logo from '../assets/logo.svg';
import logoMobile from '../assets/logo-mobile.svg';
import megamenuWebhost from '../assets/megamenu-webhost.webp';
import megamenuServer from '../assets/megamenu-server.webp';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);


    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    const [showBanner, setShowBanner] = useState(true);


    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);


    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {

            if (!localStorage.getItem('theme')) {
                setIsDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <>

            <AnimatePresence>
                {showBanner && announcementConfig.enabled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-900 dark:bg-black text-white relative z-[60] overflow-hidden"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-1.5 sm:py-2 flex items-center justify-center text-[11px] sm:text-sm font-medium relative pr-8">

                            <span className="hidden md:flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center">
                                <span className="flex items-center gap-2">
                                    <span className={`inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${announcementConfig.desktop.dotColor} animate-pulse flex-shrink-0`} />
                                    <span>{announcementConfig.desktop.badge}: <span className="font-bold text-white">{announcementConfig.desktop.badgeHighlight}</span></span>
                                </span>
                                <span className="text-gray-300">{announcementConfig.desktop.text}</span>
                                <Link to={announcementConfig.desktop.linkPath} className="underline decoration-white/30 hover:decoration-white transition-all whitespace-nowrap ml-1">{announcementConfig.desktop.linkText} &rarr;</Link>
                            </span>


                            <span className="flex md:hidden flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center px-4">
                                <span className="flex items-center gap-1.5">
                                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${announcementConfig.mobile.dotColor} animate-pulse flex-shrink-0`} />
                                    <span><span className="font-bold text-white">{announcementConfig.mobile.badgeHighlight}</span></span>
                                </span>
                                {announcementConfig.mobile.text && (
                                    <span className="text-gray-300">{announcementConfig.mobile.text}</span>
                                )}
                                <Link to={announcementConfig.mobile.linkPath} className="underline decoration-white/30 hover:decoration-white transition-all whitespace-nowrap ml-1">{announcementConfig.mobile.linkText} &rarr;</Link>
                            </span>

                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close announcement"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="sticky top-0 w-full z-50 px-6 py-4 lg:px-12 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300" onMouseLeave={() => setActiveMenu(null)}>
                <div className="max-w-7xl mx-auto flex items-center justify-between relative">

                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">

                            <img
                                src={isDark ? logoWhite : logo}
                                alt="Intranex Logo"
                                width={120}
                                height={32}
                                className="hidden lg:block h-8 w-auto object-contain transition-opacity duration-300"
                            />

                            <img
                                src={logoMobile}
                                alt="Intranex Logo"
                                width={32}
                                height={32}
                                className="block lg:hidden h-8 w-auto object-contain transition-opacity duration-300"
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-8 h-full">

                        <div className="relative h-full flex items-center">
                            <button
                                onClick={() => setActiveMenu(activeMenu === 'server' ? null : 'server')}
                                className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeMenu === 'server' ? 'text-brand-primary' : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary'}`}
                            >
                                Solutions
                                <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === 'server' ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeMenu === 'server' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 mt-4 w-[750px] z-50"
                                    >
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex ring-1 ring-black/5 dark:ring-white/10 text-left">

                                            <div className="w-1/3 relative p-0 border-r border-gray-100 dark:border-gray-800 overflow-hidden bg-gray-900">
                                                <img
                                                    src={megamenuServer}
                                                    alt="Solutions"
                                                    width={250}
                                                    height={400}
                                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                                                    <h3 className="text-xl font-bold text-white mb-2">Solutions</h3>
                                                    <p className="text-xs font-medium text-gray-100 leading-relaxed opacity-90">
                                                        Try our fast, reliable, and scalable services today. Explore website hosting, cloud compute, infrastructure, and more.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="w-2/3 p-6 grid grid-cols-2 gap-3">
                                                {[
                                                    { title: "Web Hosting", desc: "Flexible shared hosting", icon: Share2, price: "£1.80/mo", path: "/web" },   
                                                    { title: "Virtual Private Servers", desc: "Scalable cloud compute", icon: Cloud, price: "£5.20/mo", path: "/vps" },
                                                    { title: "Dedicated Servers", desc: "100% bare metal servers", icon: Server, price: "£95.00/mo", path: "/dedicated" },
                                                    { title: "Reseller Hosting", desc: "Start your hosting business", icon: Database, price: "Coming Soon", path: "/resellers" },
                                                    { title: "Domains", desc: "Claim your online presence", icon: ShoppingBasketIcon, price: "£0.99/yr", path: "/domains" },
                                                    { title: "Enterprise Solutions", desc: "Managed services & IT consultancy", icon: MedalIcon, price: "£150.00/mo", path: "/enterprise" },
                                                    { title: "Game Hosting", desc: "Hosting for over 15 games", icon: GamepadIcon, price: "£2.50/mo", path: "/game" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.path} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                                        <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                                            <item.icon size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors">{item.title}</div>
                                                            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
                                                            <div className="mt-1.5 inline-block px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wide">
                                                                {item.price.includes('$') ? `Starts at ${item.price}` : item.price}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative h-full flex items-center">
                            <button
                                onClick={() => setActiveMenu(activeMenu === 'hosting' ? null : 'hosting')}
                                className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeMenu === 'hosting' ? 'text-brand-primary' : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary'}`}
                            >
                                Resources
                                <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === 'hosting' ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeMenu === 'hosting' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 mt-4 w-[750px] z-50"
                                    >
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex ring-1 ring-black/5 dark:ring-white/10 text-left">

                                            <div className="w-1/3 relative p-0 border-r border-gray-100 dark:border-gray-800 overflow-hidden">
                                                <img
                                                    src={megamenuWebhost}
                                                    alt="Resources"
                                                    width={250}
                                                    height={400}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                                                    <h3 className="text-xl font-bold text-white mb-2">Resources</h3>
                                                    <p className="text-xs font-medium text-gray-100 leading-relaxed opacity-90">
                                                        Explore extensive documentation to make the most of your services. Plus, find a variety of useful links.
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="w-2/3 p-6 grid grid-cols-2 gap-3">
                                                {[
                                                    { title: "Documentation", desc: "Support & API guides", icon: BookIcon, price: "0", path: "https://docs.intranex.org/documentation" },
                                                    { title: "Network Status", desc: "Infrastructure uptime monitoring", icon: WifiHighIcon, price: "0", path: "https://status.intranex.org" },
                                                    { title: "Changelog", desc: "Our latest updates", icon: ClockArrowDown, price: "0", path: "https://docs.intranex.org/changelog" },
                                                    { title: "Looking Glass", desc: "Test our network speeds", icon: SearchIcon, price: "0", path: "#" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.path} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                                        <div className="p-2.5 bg-brand-primary/10 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                                            <item.icon size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors">{item.title}</div>
                                                            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/promo"
                            className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeMenu === 'domain' ? 'text-brand-primary' : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary'}`}
                        >
                            Special Offers
                        </Link>

                        <Link
                            to="/contact"
                            className={`text-sm font-bold flex items-center gap-1 transition-colors ${activeMenu === 'promo' ? 'text-brand-primary' : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary'}`}
                        >
                            Contact
                        </Link>
                    </div>


                    <div className="hidden lg:flex items-center gap-6">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href="https://client.intranex.org" className="text-sm font-bold text-gray-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors">Log In</a>
                        <button className="px-6 py-2.5 text-sm font-bold text-white bg-brand-primary rounded-lg hover:bg-brand-secondary transition-all duration-200">
                            Sign Up
                        </button>
                    </div>


                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>


                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 lg:hidden flex flex-col max-h-[85vh] overflow-y-auto"
                    >
                        <div className="p-4 space-y-2">

                            <div className="space-y-1">
                                <button
                                    onClick={() => setActiveMenu(activeMenu === 'hosting' ? null : 'hosting')}
                                    className={`flex items-center justify-between w-full p-2 text-base font-bold rounded-lg transition-colors ${activeMenu === 'hosting' ? 'text-brand-primary bg-brand-primary/5' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                >
                                    <span>Solutions</span>
                                    <ChevronDown size={18} className={`transition-transform duration-200 ${activeMenu === 'hosting' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeMenu === 'hosting' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 ml-4 border-l-2 border-brand-primary/20 space-y-3 py-2">
                                                {[
                                                    { title: "Web Hosting", desc: "Flexible shared hosting", icon: Share2, price: "£1.80/mo", path: "/web" },   
                                                    { title: "Virtual Private Servers", desc: "Scalable cloud compute", icon: Cloud, price: "£5.20/mo", path: "/vps" },
                                                    { title: "Dedicated Servers", desc: "100% bare metal servers", icon: Server, price: "£95.00/mo", path: "/dedicated" },
                                                    { title: "Reseller Hosting", desc: "Start your hosting business", icon: Database, price: "Coming Soon", path: "/resellers" },
                                                    { title: "Domains", desc: "Claim your online presence", icon: ShoppingBasketIcon, price: "£0.99/yr", path: "/domains" },
                                                    { title: "Enterprise Solutions", desc: "Managed services & IT consultancy", icon: MedalIcon, price: "£150.00/mo", path: "/enterprise" },
                                                    { title: "Game Hosting", desc: "Hosting for over 15 games", icon: GamepadIcon, price: "£2.50/mo", path: "/game" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.path} className="block">
                                                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                                                        <div className="text-xs text-gray-500 font-medium">{item.price}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                            <div className="space-y-1">
                                <button
                                    onClick={() => setActiveMenu(activeMenu === 'server' ? null : 'server')}
                                    className={`flex items-center justify-between w-full p-2 text-base font-bold rounded-lg transition-colors ${activeMenu === 'server' ? 'text-brand-primary bg-brand-primary/5' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                                >
                                    <span>Resources</span>
                                    <ChevronDown size={18} className={`transition-transform duration-200 ${activeMenu === 'server' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeMenu === 'server' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 ml-4 border-l-2 border-brand-primary/20 space-y-3 py-2">
                                                {[
                                                    { title: "Documentation", desc: "Support & API guides", icon: BookIcon, price: "", path: "https://docs.intranex.org/documentation" },
                                                    { title: "Network Status", desc: "Infrastructure uptime monitoring", icon: WifiHighIcon, price: "", path: "https://status.intranex.org" },
                                                    { title: "Changelog", desc: "Our latest updates", icon: ClockArrowDown, price: "", path: "https://docs.intranex.org/changelog" },
                                                    { title: "Looking Glass", desc: "Test our network speeds", icon: SearchIcon, price: "", path: "#" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.path} className="block">
                                                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.title}</div>
                                                        <div className="text-xs text-gray-500 font-medium">{item.price}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/promo" className="block p-2 text-base font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Special Offers</Link>

                            <Link to="/contact" className="block p-2 text-base font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Contact</Link>
                        </div>

                        <div className="p-4 mt-auto border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">

                            <div className="flex items-center justify-between mb-4 px-1">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Appearance</span>
                                <button
                                    onClick={toggleTheme}
                                    className="relative h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none"
                                >
                                    <div className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform duration-200 flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0'}`}>
                                        {isDark ? <Moon size={12} className="text-gray-900" /> : <Sun size={12} className="text-amber-500" />}
                                    </div>
                                </button>
                            </div>

                            <button className="w-full py-3 mb-3 text-sm font-bold text-white bg-brand-primary rounded-lg transition-all">
                                Sign Up
                            </button>
                            <a href="https://client.intranex.org" className="block w-full py-3 text-sm font-bold text-center text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                Log in
                            </a>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
};
