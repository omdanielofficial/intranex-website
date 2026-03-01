import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';


const Home = lazy(() => import('./pages/Home'));
const WebHosting = lazy(() => import('./pages/SharedHosting'));
const ResellerHosting = lazy(() => import('./pages/ResellerHosting'));
const VirtualPrivateServers = lazy(() => import('./pages/CloudVPS'));
const DedicatedServers = lazy(() => import('./pages/DedicatedServer'));
const EnterpriseSolutions = lazy(() => import('./pages/Colocation'));
const GameHosting = lazy(() => import('./pages/CloudHosting'));
const Domains = lazy(() => import('./pages/Domain'));
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
            <Route path="/web" element={<WebHosting />} />
            <Route path="/resellers" element={<ResellerHosting />} />
            <Route path="/vps" element={<VirtualPrivateServers />} />
            <Route path="/dedicated" element={<DedicatedServers />} />
            <Route path="/enterprise" element={<EnterpriseSolutions />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/game" element={<GameHosting />} />
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
