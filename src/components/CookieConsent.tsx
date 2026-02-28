import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ConsentSettings {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    affiliate: boolean;
}

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [settings, setSettings] = useState<ConsentSettings>({
        necessary: true,
        functional: true,
        analytics: true,
        affiliate: true,
    });

    useEffect(() => {
        const consent = localStorage.getItem('voltera_cookie_consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1500);
        } else {
            setSettings(JSON.parse(consent));
        }

        const handleOpenPreferences = () => setIsModalOpen(true);
        window.addEventListener('openCookiePreferences', handleOpenPreferences);
        return () => window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    }, []);

    const saveConsent = (newSettings: ConsentSettings) => {
        localStorage.setItem('voltera_cookie_consent', JSON.stringify(newSettings));
        setSettings(newSettings);
        setIsVisible(false);
        setIsModalOpen(false);
    };

    const handleAcceptAll = () => {
        const allAccepted = { necessary: true, functional: true, analytics: true, affiliate: true };
        saveConsent(allAccepted);
    };

    const handleRejectAll = () => {
        const minimal = { necessary: true, functional: false, analytics: false, affiliate: false };
        saveConsent(minimal);
    };

    const toggleCategory = (category: keyof ConsentSettings) => {
        if (category === 'necessary') return;
        setSettings(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const categories = [
        {
            id: 'necessary',
            title: 'Strictly Necessary',
            description: 'Essential for the website to function properly. Cannot be disabled.',
            alwaysActive: true
        },
        {
            id: 'functional',
            title: 'Functional Cookies',
            description: 'Remember your preferences and provide enhanced features.',
            alwaysActive: false
        },
        {
            id: 'analytics',
            title: 'Analytics Cookies',
            description: 'Help us understand how you use our site to improve the experience.',
            alwaysActive: false
        },
        {
            id: 'affiliate',
            title: 'Affiliate Cookies',
            description: 'Allow us to properly credit our partners for referrals.',
            alwaysActive: false
        }
    ];

    return (
        <>

            <AnimatePresence>
                {isVisible && !isModalOpen && (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center pointer-events-none"
                    >
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-4 md:p-5 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row items-center gap-4 md:gap-8 overflow-hidden">


                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex p-2 bg-brand-primary/10 rounded-xl text-brand-primary">
                                    <Shield size={20} />
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                                    We use cookies to improve your experience. By continuing, you agree to our <Link to="/legal/privacy-policy" className="text-[#934100] dark:text-brand-secondary font-bold hover:underline">Privacy Policy</Link>.
                                </p>
                            </div>

                            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex-1 md:flex-none px-5 py-2 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors uppercase tracking-wider"
                                >
                                    Settings
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="flex-1 md:flex-none px-8 py-2.5 bg-brand-primary hover:bg-brand-secondary text-gray-950 text-xs font-bold rounded-xl transition-all uppercase tracking-wider"
                                    aria-label="Accept all cookies"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] flex items-end md:items-center justify-center bg-black/40 backdrop-blur-md p-0 md:p-4"
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="bg-white dark:bg-gray-950 w-full max-w-xl rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden border-t md:border border-gray-200 dark:border-gray-800"
                        >

                            <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Privacy Preferences</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors bg-gray-50 dark:bg-gray-900 rounded-full"
                                    aria-label="Close preferences"
                                >
                                    <X size={18} />
                                </button>
                            </div>


                            <div className="p-6 max-h-[50vh] overflow-y-auto overflow-x-hidden md:max-h-[60vh]">
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                                    Manage how we use cookies to provide our services. You can change these settings at any time.
                                </p>

                                <div className="space-y-3">
                                    {categories.map((cat) => (
                                        <div key={cat.id} className="group border border-gray-100 dark:border-gray-800 rounded-2xl transition-all hover:border-brand-primary/30">
                                            <div
                                                className="px-5 py-4 flex items-center justify-between cursor-pointer"
                                                onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`transition-transform duration-300 ${expandedCategory === cat.id ? 'rotate-90' : ''}`}>
                                                        <ChevronRight size={16} className="text-gray-400 group-hover:text-brand-primary" />
                                                    </div>
                                                    <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{cat.title}</span>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    {cat.alwaysActive ? (
                                                        <Check size={16} className="text-emerald-500 font-bold" />
                                                    ) : (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleCategory(cat.id as keyof ConsentSettings);
                                                            }}
                                                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 focus:outline-none ${settings[cat.id as keyof ConsentSettings] ? 'bg-brand-primary' : 'bg-gray-200 dark:bg-gray-800'}`}
                                                        >
                                                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${settings[cat.id as keyof ConsentSettings] ? 'translate-x-5' : 'translate-x-1'}`} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {expandedCategory === cat.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    className="px-5 pb-5 pt-0 overflow-hidden"
                                                >
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-8">
                                                        {cat.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={handleRejectAll}
                                        className="py-3 px-4 text-xs font-bold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors uppercase tracking-wider"
                                    >
                                        Essential Only
                                    </button>
                                    <button
                                        onClick={() => saveConsent(settings)}
                                        className="py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-950 text-xs font-bold rounded-xl transition-all uppercase tracking-wider"
                                    >
                                        Save Settings
                                    </button>
                                </div>
                                <button
                                    onClick={handleAcceptAll}
                                    className="w-full mt-3 py-3 px-4 bg-brand-primary hover:bg-brand-secondary text-gray-950 text-xs font-bold rounded-xl transition-all uppercase tracking-wider"
                                    aria-label="Accept all cookies"
                                >
                                    Accept All Cookies
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
