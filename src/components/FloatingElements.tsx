import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export const FloatingElements = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 10,
          duration: Math.random() * 10 + 15,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(265 85% 65% / 0.15) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
      />
      <div 
        className="absolute w-[800px] h-[800px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(275 90% 70% / 0.1) 0%, transparent 70%)',
          top: '40%',
          right: '-10%',
          animationDelay: '-2s',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(265 100% 70% / 0.12) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
          animationDelay: '-4s',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 animate-drift"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Network nodes */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(265 85% 65%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(275 90% 70%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(265 85% 65%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Animated connection lines */}
        <line 
          x1="15%" y1="20%" x2="35%" y2="40%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-pulse-glow"
        />
        <line 
          x1="35%" y1="40%" x2="55%" y2="25%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: '-1s' }}
        />
        <line 
          x1="55%" y1="25%" x2="75%" y2="45%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: '-2s' }}
        />
        <line 
          x1="75%" y1="45%" x2="85%" y2="30%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1"
          className="animate-pulse-glow"
          style={{ animationDelay: '-3s' }}
        />
        
        {/* Node circles */}
        <circle cx="15%" cy="20%" r="4" fill="hsl(265 85% 65%)" className="animate-pulse-glow" />
        <circle cx="35%" cy="40%" r="3" fill="hsl(275 90% 70%)" className="animate-pulse-glow" style={{ animationDelay: '-1s' }} />
        <circle cx="55%" cy="25%" r="5" fill="hsl(265 85% 65%)" className="animate-pulse-glow" style={{ animationDelay: '-2s' }} />
        <circle cx="75%" cy="45%" r="3" fill="hsl(275 90% 70%)" className="animate-pulse-glow" style={{ animationDelay: '-3s' }} />
        <circle cx="85%" cy="30%" r="4" fill="hsl(265 85% 65%)" className="animate-pulse-glow" style={{ animationDelay: '-4s' }} />
      </svg>

      {/* Floating question mark - Easter egg */}
      <div 
        className="absolute text-primary/10 text-[200px] font-light animate-float-slow select-none"
        style={{ right: '5%', bottom: '20%' }}
      >
        ?
      </div>
    </div>
  );
};
