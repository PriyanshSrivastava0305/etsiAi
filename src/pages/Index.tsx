import { useEffect } from 'react';
import { FloatingElements } from '@/components/FloatingElements';
import { HeroSection } from '@/components/HeroSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { WhatsNext } from '@/components/WhatsNext';
import { Contributors } from '@/components/Contributors';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title and meta
    document.title = 'et-si.ai — Open-source AI tools for ML & Data builders';
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProductShowcase />
        <WhatsNext />
        <Contributors />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
