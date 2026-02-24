import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SharedHostingHero } from '../components/shared-hosting/Hero';
import { SharedHostingPricing } from '../components/shared-hosting/Pricing';
import { SharedHostingFeatures } from '../components/shared-hosting/Features';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { SharedHostingFAQ } from '../components/shared-hosting/FAQ';
import { TrustedBy } from '../components/home/TrustedBy';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { sharedHostingSEO } from '../config/seo/shared-hosting';

const SharedHosting = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={sharedHostingSEO} />
            <Navbar />
            <SharedHostingHero />
            <TrustedBy />
            <SharedHostingPricing />
            <SharedHostingFeatures />
            <SupportGuarantee />
            <SharedHostingFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default SharedHosting;
