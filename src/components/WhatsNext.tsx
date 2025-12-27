export const WhatsNext = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            Coming Soon
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-glow-subtle">
            What's next
          </h2>
        </div>

        {/* etna card */}
        <div className="relative glass-panel p-10 md:p-16 box-glow">
          <div className="absolute inset-0 rounded-2xl neon-border" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Visual */}
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <div className="relative aspect-video rounded-xl bg-purple-deep/50 border border-border/30 overflow-hidden">
                {/* Neural network visualization */}
                <svg className="w-full h-full" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="etnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(265 85% 65%)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="hsl(275 90% 70%)" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Input layer */}
                  {[40, 70, 100, 130].map((y, i) => (
                    <g key={`input-${i}`}>
                      <circle cx="50" cy={y} r="8" fill="none" stroke="url(#etnaGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      <circle cx="50" cy={y} r="3" fill="hsl(265 85% 65%)" />
                    </g>
                  ))}

                  {/* Hidden layer */}
                  {[55, 90, 125].map((y, i) => (
                    <g key={`hidden-${i}`}>
                      <circle cx="150" cy={y} r="10" fill="none" stroke="url(#etnaGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                      <circle cx="150" cy={y} r="4" fill="hsl(275 90% 70%)" />
                    </g>
                  ))}

                  {/* Output layer */}
                  {[75, 105].map((y, i) => (
                    <g key={`output-${i}`}>
                      <circle cx="250" cy={y} r="8" fill="none" stroke="url(#etnaGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
                      <circle cx="250" cy={y} r="3" fill="hsl(265 85% 65%)" />
                    </g>
                  ))}

                  {/* Connections - input to hidden */}
                  {[40, 70, 100, 130].map((y1, i) =>
                    [55, 90, 125].map((y2, j) => (
                      <line
                        key={`ih-${i}-${j}`}
                        x1="58"
                        y1={y1}
                        x2="140"
                        y2={y2}
                        stroke="hsl(265 85% 65%)"
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                        className="animate-pulse"
                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                      />
                    ))
                  )}

                  {/* Connections - hidden to output */}
                  {[55, 90, 125].map((y1, i) =>
                    [75, 105].map((y2, j) => (
                      <line
                        key={`ho-${i}-${j}`}
                        x1="160"
                        y1={y1}
                        x2="242"
                        y2={y2}
                        stroke="hsl(275 90% 70%)"
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                        className="animate-pulse"
                        style={{ animationDelay: `${(i + j) * 0.15}s` }}
                      />
                    ))
                  )}

                  {/* Labels */}
                  <text x="50" y="160" textAnchor="middle" fill="hsl(260 20% 50%)" fontSize="8" fontFamily="monospace">input</text>
                  <text x="150" y="155" textAnchor="middle" fill="hsl(260 20% 50%)" fontSize="8" fontFamily="monospace">hidden</text>
                  <text x="250" y="140" textAnchor="middle" fill="hsl(260 20% 50%)" fontSize="8" fontFamily="monospace">output</text>
                </svg>

                {/* Floating question mark */}
                <div className="absolute top-4 right-4 text-2xl text-primary/30 animate-float">?</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold font-mono text-glow-subtle mb-2">
                etsi.etna
              </h3>
              
              <p className="text-primary text-sm font-mono mb-6">
                Minimalistic neural networks for structured data
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                A minimalistic, dependency-light neural network library designed to make training and evaluating models on structured data fast, interpretable and beginner-friendly. It focuses on auto-preprocessing, simple linear networks, and core metrics — ideal for research prototyping, learning, and quick deployments.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground">
                  auto-preprocessing
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground">
                  interpretable
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground">
                  lightweight
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div 
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(275 90% 70% / 0.2) 0%, transparent 60%)',
        }}
      />
    </section>
  );
};
