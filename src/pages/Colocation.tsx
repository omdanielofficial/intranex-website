import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ColocationHero } from '../components/colocation/Hero';
import { ColocationFacilities } from '../components/colocation/Facilities';
import { ColocationLocations } from '../components/colocation/Locations';
import { ColocationPricing } from '../components/colocation/Pricing';
import { ColocationEnterpriseCTA } from '../components/colocation/EnterpriseCTA';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { ColocationFAQ } from '../components/colocation/FAQ';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { colocationSEO } from '../config/seo/colocation';

const Colocation = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={colocationSEO} />
            <Navbar />
            <ColocationHero />
            <ColocationFacilities />
            <ColocationLocations />
            <ColocationPricing />
            <ColocationEnterpriseCTA />
            <SupportGuarantee />
            <ColocationFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default Colocation;
