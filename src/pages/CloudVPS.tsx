import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CloudVPSFeatures } from '../components/cloud-vps/Features';
import { CloudVPSPricing } from '../components/cloud-vps/Pricing';
import { CloudVPSUseCases } from '../components/cloud-vps/UseCases';
import { CloudVPSControlPanel } from '../components/cloud-vps/ControlPanel';
import { CloudVPSEnterpriseCTA } from '../components/cloud-vps/EnterpriseCTA';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { CloudVPSFAQ } from '../components/cloud-vps/FAQ';
import { CloudVPSHero } from '../components/cloud-vps/Hero';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { cloudVPSSEO } from '../config/seo/cloud-vps';

const CloudVPS = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={cloudVPSSEO} />
            <Navbar />
            <CloudVPSHero />
            <CloudVPSFeatures />
            <CloudVPSPricing />
            <CloudVPSUseCases />
            <CloudVPSControlPanel />
            <CloudVPSEnterpriseCTA />
            <SupportGuarantee />
            <CloudVPSFAQ />
            <CTA />
            <Footer />
        </main>
    );
};

export default CloudVPS;
