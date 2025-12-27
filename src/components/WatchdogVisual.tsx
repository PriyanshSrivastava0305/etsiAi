export const WatchdogVisual = () => {
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-center">
      {/* Animated chart lines */}
      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="watchdogGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(265 85% 65%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(275 90% 70%)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="alertGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0 70% 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(0 70% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Background grid */}
        <g className="opacity-20">
          {[0, 25, 50, 75, 100].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2="200" y2={y} stroke="hsl(260 20% 40%)" strokeWidth="0.5" />
          ))}
          {[0, 40, 80, 120, 160, 200].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="100" stroke="hsl(260 20% 40%)" strokeWidth="0.5" />
          ))}
        </g>
        
        {/* Main monitoring line */}
        <path
          d="M 0 60 Q 20 55, 40 58 T 80 50 T 120 55 T 160 45 T 200 52"
          fill="none"
          stroke="url(#watchdogGradient)"
          strokeWidth="2"
          className="animate-pulse"
        />
        
        {/* Drift detection zone */}
        <rect x="120" y="30" width="40" height="40" fill="url(#alertGradient)" className="animate-pulse" />
        
        {/* Alert indicator */}
        <circle cx="140" cy="45" r="4" fill="hsl(0 70% 60%)" className="animate-ping" style={{ transformOrigin: '140px 45px' }} />
        <circle cx="140" cy="45" r="3" fill="hsl(0 70% 60%)" />
        
        {/* Data points */}
        {[
          { x: 20, y: 57 },
          { x: 60, y: 54 },
          { x: 100, y: 52 },
          { x: 140, y: 45 },
          { x: 180, y: 50 },
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="hsl(265 85% 65%)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
      
      {/* Status indicators */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono">
        <span className="text-primary/60">v1.2.3 → v1.2.4</span>
        <span className="text-destructive/80 animate-pulse">⚠ drift detected</span>
      </div>
    </div>
  );
};
