import { Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      {/* Glow divider */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(265 85% 65% / 0.5), transparent)',
        }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-semibold">
              et-si<span className="text-primary">.ai</span>
            </span>
            <p className="text-sm text-muted-foreground font-mono mt-2">
              exploring the question — what if?
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/et-si-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a 
              href="https://github.com/et-si-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
            >
              Docs
            </a>
            <a 
              href="https://github.com/et-si-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
            >
              Community
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} et-si.ai — Open source. Built with curiosity.
          </p>
        </div>
      </div>

      {/* Floating question mark easter egg */}
      <div className="absolute bottom-8 right-8 text-6xl text-primary/5 font-light select-none pointer-events-none">
        ?
      </div>
    </footer>
  );
};
