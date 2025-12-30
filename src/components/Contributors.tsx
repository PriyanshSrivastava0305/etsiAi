import { useState } from 'react';

interface Contributor {
  name: string;
  image: string;
  profileUrl: string;
}

const contributors: Contributor[] = [
  {
    name: 'Core Team',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi1&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
  {
    name: 'Core Team',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi2&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
  {
    name: 'Core Team',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi3&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
  {
    name: 'Contributor',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi4&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
  {
    name: 'Contributor',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi5&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
  {
    name: 'Contributor',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi6&backgroundColor=1a1625',
    profileUrl: 'https://github.com/et-si-ai',
  },
];

export const Contributors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
            Built by the community
          </h2>
        </div>

        {/* Contributors grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {contributors.map((contributor, index) => (
            <a
              key={index}
              href={contributor.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, hsl(265 85% 65% / 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Avatar container */}
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'border-primary box-glow-hover scale-110' 
                  : 'border-border/50'
              }`}>
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name tooltip */}
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2'
              }`}>
                <span className="text-sm font-mono text-primary">
                  {contributor.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Join CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground text-sm mb-4">
            Want to contribute?
          </p>
          <a 
            href="https://github.com/et-si-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors font-mono text-sm underline underline-offset-4"
          >
            Join us on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};
