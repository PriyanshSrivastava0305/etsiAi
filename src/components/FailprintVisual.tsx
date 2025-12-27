export const FailprintVisual = () => {
  return (
    <div className="absolute inset-0 p-4 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="clusterGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(265 85% 65%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(265 85% 65%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="clusterGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(275 90% 70%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(275 90% 70%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="clusterGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0 70% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(0 70% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cluster backgrounds */}
        <circle cx="50" cy="40" r="30" fill="url(#clusterGradient1)" className="animate-pulse" />
        <circle cx="130" cy="35" r="25" fill="url(#clusterGradient2)" className="animate-pulse" style={{ animationDelay: '-1s' }} />
        <circle cx="160" cy="70" r="20" fill="url(#clusterGradient3)" className="animate-pulse" style={{ animationDelay: '-2s' }} />

        {/* Correlation lines */}
        <line x1="50" y1="40" x2="130" y2="35" stroke="hsl(265 85% 65%)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />
        <line x1="130" y1="35" x2="160" y2="70" stroke="hsl(275 90% 70%)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />
        <line x1="50" y1="40" x2="160" y2="70" stroke="hsl(0 70% 60%)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2" />

        {/* Cluster 1 - Primary failures */}
        {[
          { x: 40, y: 35 },
          { x: 55, y: 30 },
          { x: 45, y: 48 },
          { x: 60, y: 42 },
          { x: 50, y: 38 },
          { x: 38, y: 45 },
        ].map((point, i) => (
          <circle
            key={`c1-${i}`}
            cx={point.x}
            cy={point.y}
            r={2 + Math.random()}
            fill="hsl(265 85% 65%)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}

        {/* Cluster 2 - Secondary failures */}
        {[
          { x: 125, y: 30 },
          { x: 135, y: 38 },
          { x: 128, y: 42 },
          { x: 140, y: 32 },
        ].map((point, i) => (
          <circle
            key={`c2-${i}`}
            cx={point.x}
            cy={point.y}
            r={2 + Math.random()}
            fill="hsl(275 90% 70%)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Cluster 3 - Critical failures */}
        {[
          { x: 155, y: 65 },
          { x: 165, y: 72 },
          { x: 158, y: 78 },
        ].map((point, i) => (
          <circle
            key={`c3-${i}`}
            cx={point.x}
            cy={point.y}
            r={2.5}
            fill="hsl(0 70% 60%)"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Heatmap cells */}
        <g className="opacity-40">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => (
              <rect
                key={`heat-${row}-${col}`}
                x={5 + col * 12}
                y={75 + row * 5}
                width="10"
                height="4"
                rx="1"
                fill={`hsl(${265 + (row + col) * 5} ${60 + (row * col)}% ${50 + row * 5}%)`}
                opacity={0.3 + (row + col) * 0.05}
              />
            ))
          )}
        </g>
      </svg>

      {/* Analysis label */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono">
        <span className="text-primary/60">3 clusters</span>
        <span className="text-accent/80">root cause: feature_x</span>
      </div>
    </div>
  );
};
