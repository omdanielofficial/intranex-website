import { Navbar } from '../components/Navbar';
import { Hero } from '../components/home/Hero';
import { TrustedBy } from '../components/home/TrustedBy';
import { Features } from '../components/home/Features';
import { Products } from '../components/home/Products';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { CTA } from '../components/home/CTA';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { homeSEO } from '../config/seo/home';

function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <SEO data={homeSEO} />
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <TrustedBy />
            <SupportGuarantee />
            <CTA />
            <Footer />
        </main>
    );
}

export default Home;
