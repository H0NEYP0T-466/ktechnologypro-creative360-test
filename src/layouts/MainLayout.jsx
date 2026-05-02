import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CTABanner from '../components/CTABanner/CTABanner';
import ConsultationSection from '../components/ConsultationSection/ConsultationSection';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
      <CTABanner />
      <ConsultationSection />
      <Footer />
    </>
  );
}
