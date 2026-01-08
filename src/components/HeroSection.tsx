import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main title */}
        <h1 className="text-7xl md:text-9xl font-semibold tracking-tight text-glow animate-fade-up">
          et-si<span className="text-primary">.ai</span>
        </h1>
        
        {/* Subtitle */}
        <p className="mt-6 text-3xl md:text-5xl font-light text-muted-foreground animate-fade-up-delayed">
          What if<span className="text-primary">?</span>
        </p>
        
        {/* Tagline */}
        <p className="mt-8 text-lg md:text-xl text-gray-soft font-mono tracking-wide animate-fade-up-delayed-2">
          Open-source AI tools for ML & Data builders
        </p>
        
        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delayed-2">
          <Button variant="glow" size="lg" asChild>
            <a href="https://github.com/etsi-ai" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button variant="neon" size="lg" asChild>
            <a href="#products">
              Explore tools
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
    </section>
  );
};
