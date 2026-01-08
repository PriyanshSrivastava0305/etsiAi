import { ProductCard } from './ProductCard';
import { WatchdogVisual } from './WatchdogVisual';
import { FailprintVisual } from './FailprintVisual';

export const ProductShowcase = () => {
  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Our Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
            Built for practitioners
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ProductCard
            title="etsi-watchdog"
            subtitle="Real-time data drift detection for ML pipelines"
            description="Production monitoring for ML data quality, drift, and version changes — built for practitioners."
            docsLink="https://etsi-ai.github.io/docs/etsi-watchdog.html"
            visual={<WatchdogVisual />}
          />
          
          <ProductCard
            title="etsi-failprint"
            subtitle="Diagnose model failures"
            description="Automatic root-cause analysis that reveals why ML models fail — segmenting, clustering, and correlating failures."
            docsLink="https://etsi-ai.github.io/docs/etsi-failprint.html"
            visual={<FailprintVisual />}
          />
        </div>
      </div>

      {/* Background accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(265 85% 65% / 0.08) 0%, transparent 60%)',
        }}
      />
    </section>
  );
};
