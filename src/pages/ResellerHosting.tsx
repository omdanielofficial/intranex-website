import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ResellerHostingHero } from '../components/reseller-hosting/Hero';
import { ResellerHostingFeatures } from '../components/reseller-hosting/Features';
import { ResellerHostingPricing } from '../components/reseller-hosting/Pricing';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { ResellerHostingFAQ } from '../components/reseller-hosting/FAQ';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { resellerHostingSEO } from '../config/seo/reseller-hosting';

const ResellerHosting = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={resellerHostingSEO} />
            <Navbar />
            <ResellerHostingHero />
            <ResellerHostingFeatures />
            <ResellerHostingPricing />
            <SupportGuarantee />
            <ResellerHostingFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default ResellerHosting;
