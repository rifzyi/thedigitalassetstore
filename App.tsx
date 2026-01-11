
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout.tsx';
import { Home } from './pages/Home.tsx';
import { Shop } from './pages/Shop.tsx';
import { ProductDetail } from './pages/ProductDetail.tsx';
import { Bundles } from './pages/Bundles.tsx';
import { About } from './pages/About.tsx';
import { FAQ } from './pages/FAQ.tsx';
import { Blog } from './pages/Blog.tsx';
import { Checkout } from './pages/Checkout.tsx';
import { Cart } from './pages/Cart.tsx';
import { HowItWorks } from './pages/HowItWorks.tsx';
import { Advantages } from './pages/Advantages.tsx';
import { TestimonialsPage } from './pages/TestimonialsPage.tsx';
import { BeforeAfterPage } from './pages/BeforeAfterPage.tsx';
import { PaymentSimulator } from './pages/PaymentSimulator.tsx';
import { CartProvider } from './context/CartContext.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/bundles" element={<PageWrapper><Bundles /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="/payment-simulator/:id" element={<PageWrapper><PaymentSimulator /></PageWrapper>} />
        <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
        <Route path="/advantages" element={<PageWrapper><Advantages /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
        <Route path="/before-after" element={<PageWrapper><BeforeAfterPage /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
