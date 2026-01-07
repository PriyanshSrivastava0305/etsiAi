import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  image: string;
  currentRole: string;
  previousRole: string;
  github?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john&backgroundColor=1a1625',
    currentRole: 'CEO & Co-founder',
    previousRole: 'Ex-Microsoft',
    github: 'https://github.com/johnsmith',
    linkedin: 'https://linkedin.com/in/johnsmith',
  },
  {
    name: 'Sarah Johnson',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=1a1625',
    currentRole: 'CTO & Co-founder',
    previousRole: 'Ex-Google',
    github: 'https://github.com/sarahjohnson',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
  },
  {
    name: 'Michael Chen',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael&backgroundColor=1a1625',
    currentRole: 'Head of AI',
    previousRole: 'Ex-OpenAI',
    github: 'https://github.com/michaelchen',
    linkedin: 'https://linkedin.com/in/michaelchen',
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=1a1625',
    currentRole: 'Head of Engineering',
    previousRole: 'Ex-Meta',
    github: 'https://github.com/emilyrodriguez',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
  },
];

export const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
            Meet our team
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative glass-panel p-6 text-center transition-all duration-500 hover:box-glow-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Neon border effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 neon-border`} />
              
              {/* Profile image */}
              <div className="relative mb-6">
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
                
                <div className={`relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'border-primary box-glow-hover scale-105' 
                    : 'border-border/50'
                }`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Member info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                
                <div className="space-y-1">
                  <p className="text-primary text-sm font-medium">
                    {member.currentRole}
                  </p>
                  <p className="text-muted-foreground text-xs font-mono">
                    {member.previousRole}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(275 90% 70% / 0.1) 0%, transparent 60%)',
        }}
      />
    </section>
  );
};