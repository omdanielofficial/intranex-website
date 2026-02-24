import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowRight, AlertCircle } from 'lucide-react';

const NotFound = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center">
                <section className="py-20 lg:py-32 w-full">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
                                <AlertCircle size={14} />
                                Error 404
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                                Page <span className="text-brand-primary">Not Found.</span>
                            </h1>

                            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/"
                                    className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Return Home
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button
                                    onClick={() => window.history.back()}
                                    className="w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-primary transition-all"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
};

export default NotFound;
