import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  docsLink: string;
  visual: ReactNode;
  className?: string;
}

export const ProductCard = ({ 
  title, 
  subtitle, 
  description, 
  docsLink, 
  visual,
  className = '' 
}: ProductCardProps) => {
  return (
    <div className={`group relative glass-panel p-8 md:p-10 transition-all duration-500 hover:box-glow-hover ${className}`}>
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 neon-border" />
      
      {/* Visual/Preview */}
      <div className="relative h-48 md:h-56 mb-8 rounded-xl bg-purple-deep/50 overflow-hidden border border-border/30">
        {visual}
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-glow-subtle font-mono">
          {title}
        </h3>
        
        <p className="text-primary text-sm md:text-base font-medium">
          {subtitle}
        </p>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {description}
        </p>
        
        <Button variant="neon" size="default" className="mt-4" asChild>
          <a href={docsLink} target="_blank" rel="noopener noreferrer">
            Read Docs
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};
