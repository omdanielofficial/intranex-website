import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DomainHero } from '../components/domain/Hero';
import { DomainPricingHelper } from '../components/domain/Pricing';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { CTA } from '../components/home/CTA';
import { SEO } from '../components/SEO';
import { domainSEO } from '../config/seo/domain';

const Domain = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={domainSEO} />
            <Navbar />
            <DomainHero />
            <DomainPricingHelper />
            <SupportGuarantee />
            <CTA />
            <Footer />
        </main>
    );
};

export default Domain;
