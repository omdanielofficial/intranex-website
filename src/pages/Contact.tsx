import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/contact/Hero';
import { ContactForm } from '../components/contact/Form';
import { SupportGuarantee } from '../components/SupportGuarantee';
import { SEO } from '../components/SEO';
import { contactSEO } from '../config/seo/contact';

const Contact = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <SEO data={contactSEO} />
            <Navbar />
            <ContactHero />
            <ContactForm />
            <SupportGuarantee />
            <Footer />
        </main>
    );
};

export default Contact;
