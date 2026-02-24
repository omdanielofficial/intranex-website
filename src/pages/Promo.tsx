import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PromoHero } from '../components/promo/Hero';
import { PromoList } from '../components/promo/List';
import { useEffect } from 'react';

const Promo = () => {
    useEffect(() => {
        document.title = "Exclusive Promos & Deals | Voltera Cloud";
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <Navbar />

            <PromoHero />
            <PromoList />

            <Footer />
        </main>
    );
};

export default Promo;
