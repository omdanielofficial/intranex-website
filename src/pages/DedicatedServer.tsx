import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DedicatedServerHero } from '../components/dedicated-server/Hero';
import { DedicatedServerFeatures } from '../components/dedicated-server/Features';
import { DedicatedServerPricing } from '../components/dedicated-server/Pricing';
import { DedicatedServerEnterpriseCTA } from '../components/dedicated-server/EnterpriseCTA';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { DedicatedServerFAQ } from '../components/dedicated-server/FAQ';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { dedicatedServerSEO } from '../config/seo/dedicated-server';

const DedicatedServer = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={dedicatedServerSEO} />
            <Navbar />
            <DedicatedServerHero />
            <DedicatedServerFeatures />
            <DedicatedServerPricing />
            <DedicatedServerEnterpriseCTA />
            <SupportGuarantee />
            <DedicatedServerFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default DedicatedServer;
