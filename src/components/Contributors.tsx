import { useState, useEffect } from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}

interface RepoContributor extends Contributor {
  repo: string;
}

const repositories = [
  'etsi-ai/etna',
  'etsi-ai/etsi-watchdog',
  'etsi-ai/etsi-failprint'
];

export const Contributors = () => {
  const [contributors, setContributors] = useState<RepoContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        const allContributors: RepoContributor[] = [];
        
        // Fetch contributors from each repository
        for (const repo of repositories) {
          try {
            const response = await fetch(`https://api.github.com/repos/${repo}/contributors`);
            
            if (response.ok) {
              const repoContributors: Contributor[] = await response.json();
              
              // Add repo info and filter out bots
              const validContributors = repoContributors
                .filter(contributor => contributor.type === 'User')
                .map(contributor => ({
                  ...contributor,
                  repo: repo.split('/')[1] // Get repo name without org
                }));
              
              allContributors.push(...validContributors);
            }
          } catch (repoError) {
            console.warn(`Failed to fetch contributors for ${repo}:`, repoError);
          }
        }
        
        // Remove duplicates and sort by contributions
        const uniqueContributors = allContributors.reduce((acc, current) => {
          const existing = acc.find(contributor => contributor.login === current.login);
          if (existing) {
            // Merge contributions from multiple repos
            existing.contributions += current.contributions;
            existing.repo = existing.repo + `, ${current.repo}`;
          } else {
            acc.push(current);
          }
          return acc;
        }, [] as RepoContributor[]);
        
        // Sort by contributions (descending) and limit to top contributors
        const sortedContributors = uniqueContributors
          .sort((a, b) => b.contributions - a.contributions)
          .slice(0, 12); // Show top 12 contributors
        
        setContributors(sortedContributors);
        setError(null);
      } catch (err) {
        console.error('Error fetching contributors:', err);
        setError('Failed to load contributors');
        
        // Fallback to static contributors if API fails
        setContributors([
          {
            login: 'Core Team',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi1&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 100,
            type: 'User',
            repo: 'etsi-ai'
          },
          {
            login: 'Core Team',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi2&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 80,
            type: 'User',
            repo: 'etsi-ai'
          },
          {
            login: 'Core Team',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi3&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 60,
            type: 'User',
            repo: 'etsi-ai'
          },
          {
            login: 'Contributor',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi4&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 40,
            type: 'User',
            repo: 'etsi-ai'
          },
          {
            login: 'Contributor',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi5&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 30,
            type: 'User',
            repo: 'etsi-ai'
          },
          {
            login: 'Contributor',
            avatar_url: 'https://api.dicebear.com/7.x/shapes/svg?seed=etsi6&backgroundColor=1a1625',
            html_url: 'https://github.com/etsi-ai',
            contributions: 20,
            type: 'User',
            repo: 'etsi-ai'
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
              Open Source
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
              Built by the community
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary/50 animate-pulse" />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm">
              Loading contributors...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error && contributors.length === 0) {
    return (
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
              Open Source
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
              Built by the community
            </h2>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Unable to load contributors at the moment
            </p>
            <a 
              href="https://github.com/etsi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-mono text-sm underline underline-offset-4"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>
    );
  }

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
              key={`${contributor.login}-${index}`}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                zIndex: hoveredIndex === index ? 50 : 10,
                transition: 'z-index 0ms 200ms', // Delay z-index change to prevent flickering
              }}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-700 ease-in-out ${
                  hoveredIndex === index ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                }`}
                style={{
                  background: 'radial-gradient(circle, hsl(265 85% 65% / 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Avatar container */}
              <div className={`relative rounded-full overflow-hidden border-2 transition-all duration-400 ease-out ${
                hoveredIndex === index 
                  ? 'w-28 h-28 md:w-32 md:h-32 border-primary box-glow-hover scale-110 -translate-y-2' 
                  : hoveredIndex !== null
                  ? 'w-16 h-16 md:w-20 md:h-20 border-border/30 scale-95 opacity-75'
                  : 'w-20 h-20 md:w-24 md:h-24 border-border/50 scale-100 opacity-100'
              }`}
              style={{
                transformOrigin: 'center center',
                willChange: 'transform, width, height, opacity', // Optimize for animations
              }}>
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="w-full h-full object-cover transition-all duration-400 ease-out"
                  style={{
                    willChange: 'transform', // Optimize image transforms
                  }}
                  onError={(e) => {
                    // Fallback to generated avatar if GitHub avatar fails
                    const target = e.target as HTMLImageElement;
                    target.src = `https://api.dicebear.com/7.x/shapes/svg?seed=${contributor.login}&backgroundColor=1a1625`;
                  }}
                />
                
                {/* Pulse ring effect on hover */}
                <div className={`absolute inset-0 rounded-full border-2 border-primary transition-all duration-600 ease-out ${
                  hoveredIndex === index 
                    ? 'scale-125 opacity-0' 
                    : 'scale-100 opacity-0'
                }`} 
                style={{
                  animation: hoveredIndex === index ? 'pulse-ring 1.5s ease-out infinite' : 'none',
                }} />
              </div>

              {/* Contributor info tooltip */}
              <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ease-out ${
                hoveredIndex === index 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? '100ms' : '0ms', // Slight delay for tooltip appearance
              }}>
                <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-3 text-center shadow-xl">
                  <span className="text-sm font-mono text-primary block font-semibold">
                    {contributor.login}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {contributor.contributions} contributions
                  </span>
                  {contributor.repo && (
                    <span className="text-xs text-accent block mt-1">
                      {contributor.repo}
                    </span>
                  )}
                </div>
                
                {/* Tooltip arrow */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card/95 border-l border-t border-border/50 rotate-45" />
              </div>

              {/* Floating particles effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, particleIndex) => (
                    <div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animation: `particle-float 2s ease-out ${particleIndex * 0.1}s infinite`,
                      }}
                    />
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Repository info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            Contributors from our repositories:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {repositories.map((repo) => (
              <a
                key={repo}
                href={`https://github.com/${repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono bg-secondary/50 hover:bg-secondary/70 px-3 py-1 rounded-full transition-colors"
              >
                {repo.split('/')[1]}
              </a>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            Want to contribute?
          </p>
          <a 
            href="https://github.com/etsi-ai"
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