import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';


const Home = lazy(() => import('./pages/Home'));
const SharedHosting = lazy(() => import('./pages/SharedHosting'));
const CloudHosting = lazy(() => import('./pages/CloudHosting'));
const ResellerHosting = lazy(() => import('./pages/ResellerHosting'));
const CloudVPS = lazy(() => import('./pages/CloudVPS'));
const DedicatedServer = lazy(() => import('./pages/DedicatedServer'));
const Colocation = lazy(() => import('./pages/Colocation'));
const Domain = lazy(() => import('./pages/Domain'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const Promo = lazy(() => import('./pages/Promo'));
const NotFound = lazy(() => import('./pages/NotFound'));


const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-[1000]">
    <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shared-hosting" element={<SharedHosting />} />
            <Route path="/cloud-hosting" element={<CloudHosting />} />
            <Route path="/reseller-hosting" element={<ResellerHosting />} />
            <Route path="/cloud-vps" element={<CloudVPS />} />
            <Route path="/dedicated-server" element={<DedicatedServer />} />
            <Route path="/colocation" element={<Colocation />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/:docId" element={<Legal />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
