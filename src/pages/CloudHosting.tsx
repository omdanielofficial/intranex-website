import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CloudHostingHero } from '../components/cloud-hosting/Hero';
import { CloudHostingAdvantages } from '../components/cloud-hosting/Advantages';
import { CloudHostingPricing } from '../components/cloud-hosting/Pricing';
import { CloudHostingEnterpriseCTA } from '../components/cloud-hosting/EnterpriseCTA';
import { CloudHostingFeatures } from '../components/cloud-hosting/Features';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { CloudHostingFAQ } from '../components/cloud-hosting/FAQ';
import { TrustedBy } from '../components/home/TrustedBy';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { cloudHostingSEO } from '../config/seo/cloud-hosting';

const CloudHosting = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={cloudHostingSEO} />
            <Navbar />
            <CloudHostingHero />
            <TrustedBy />
            <CloudHostingAdvantages />
            <CloudHostingPricing />
            <CloudHostingEnterpriseCTA />
            <CloudHostingFeatures />
            <SupportGuarantee />
            <CloudHostingFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default CloudHosting;
