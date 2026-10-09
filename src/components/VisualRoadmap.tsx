import React, { useMemo } from 'react';
import type { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  VisualRoadmap — a glowing mountain-climb journey rendered as SVG.  */
/*  Nodes sit on a winding green path over a night-mountain scene.    */
/* ------------------------------------------------------------------ */

export interface JourneyNode {
  label: string;
  sub?: string;
  icon?: LucideIcon;
  badge?: string;
  onClick?: () => void;
  done?: boolean;
}

interface VisualRoadmapProps {
  nodes: JourneyNode[];
  /** svg canvas height in px */
  height?: number;
  /** show the summit flag on the last node */
  showFlag?: boolean;
  className?: string;
}

const W = 800;
const NODE_R = 30;

interface Pt {
  x: number;
  y: number;
}

/** Smooth curve through points (Catmull-Rom -> cubic Bezier). */
function smoothPath(points: Pt[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export const VisualRoadmap: React.FC<VisualRoadmapProps> = ({
  nodes,
  height = 560,
  showFlag = true,
  className = '',
}) => {
  const topPad = showFlag ? 140 : 100;
  const bottomPad = 110;

  const pts: Pt[] = useMemo(() => {
    const n = nodes.length;
    return nodes.map((_, i) => {
      const y =
        n > 1
          ? height - bottomPad - (i * (height - topPad - bottomPad)) / (n - 1)
          : height / 2;
      let x = W / 2;
      if (i > 0 && i < n - 1) x = i % 2 === 1 ? W * 0.28 : W * 0.72;
      return { x, y };
    });
  }, [nodes, height, topPad, bottomPad]);

  const d = useMemo(() => smoothPath(pts), [pts]);

  const stars = useMemo(() => {
    const arr: { cx: number; cy: number; r: number; o: number }[] = [];
    let seed = 42;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };
    for (let i = 0; i < 48; i++) {
      arr.push({
        cx: rand() * W,
        cy: rand() * height * 0.55,
        r: 0.8 + rand() * 1.6,
        o: 0.25 + rand() * 0.65,
      });
    }
    return arr;
  }, [height]);

  const backMountains = `M0 ${height} L110 ${height - 190} L230 ${height - 95} L350 ${height - 235} L510 ${height - 105} L660 ${height - 200} L800 ${height - 115} L800 ${height} Z`;
  const frontMountains = `M0 ${height} L150 ${height - 115} L300 ${height - 45} L470 ${height - 165} L640 ${height - 60} L800 ${height - 135} L800 ${height} Z`;

  const summit = pts[pts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      className={`w-full h-auto select-none ${className}`}
      role="img"
      aria-label="Learning roadmap journey"
    >
      <defs>
        <linearGradient id="vr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1424" />
          <stop offset="100%" stopColor="#0d131f" />
        </linearGradient>
        <linearGradient id="vr-pathfade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <filter id="vr-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="vr-soft" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="16" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* night sky */}
      <rect x={0} y={0} width={W} height={height} fill="url(#vr-sky)" rx={18} />
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#ffffff" opacity={s.o} />
      ))}

      {/* moon */}
      <circle cx={112} cy={86} r={46} fill="#f1f5f9" opacity={0.1} />
      <circle cx={112} cy={86} r={29} fill="#f1f5f9" opacity={0.92} />
      <circle cx={102} cy={78} r={6} fill="#cbd5e1" opacity={0.7} />
      <circle cx={122} cy={96} r={4.5} fill="#cbd5e1" opacity={0.7} />

      {/* mountains */}
      <path d={backMountains} fill="#101d33" opacity={0.95} />
      <path d={frontMountains} fill="#0a1322" />

      {/* the winding glowing path */}
      <path d={d} fill="none" stroke="#22c55e" strokeWidth={11} strokeLinecap="round" opacity={0.22} filter="url(#vr-soft)" />
      <path d={d} fill="none" stroke="url(#vr-pathfade)" strokeWidth={6} strokeLinecap="round" filter="url(#vr-glow)" />
      {/* flowing energy */}
      <path d={d} fill="none" stroke="#bbf7d0" strokeWidth={2.5} strokeLinecap="round" strokeDasharray="6 30" opacity={0.85}>
        <animate attributeName="stroke-dashoffset" from="36" to="0" dur="1.8s" repeatCount="indefinite" />
      </path>
      {/* traveler dot */}
      <circle r={7} fill="#4ade80" filter="url(#vr-glow)">
        <animateMotion dur="9s" repeatCount="indefinite" path={d} />
      </circle>

      {/* summit flag */}
      {showFlag && summit && (
        <g>
          <line
            x1={summit.x}
            y1={summit.y - NODE_R}
            x2={summit.x}
            y2={summit.y - NODE_R - 54}
            stroke="#e2e8f0"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <polygon
            points={`${summit.x},${summit.y - NODE_R - 54} ${summit.x + 42},${summit.y - NODE_R - 43} ${summit.x},${summit.y - NODE_R - 32}`}
            fill="#22c55e"
            filter="url(#vr-glow)"
          />
        </g>
      )}

      {/* checkpoint nodes */}
      {nodes.map((n, i) => {
        const p = pts[i];
        const Icon = n.icon;
        const centered = p.x === W / 2;
        const labelAnchor = centered ? 'middle' : p.x < W / 2 ? 'end' : 'start';
        const lx = centered ? p.x : p.x + (p.x < W / 2 ? -1 : 1) * (NODE_R + 18);
        const ly = centered ? p.y + NODE_R + 34 : p.y - 4;
        return (
          <g
            key={i}
            onClick={n.onClick}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') n.onClick?.();
            }}
            tabIndex={n.onClick ? 0 : -1}
            role={n.onClick ? 'button' : undefined}
            aria-label={n.label}
            style={{ cursor: n.onClick ? 'pointer' : 'default', outline: 'none' }}
          >
            <title>{n.label}</title>
            <circle cx={p.x} cy={p.y} r={NODE_R + 14} fill="#22c55e" opacity={0.14} />
            <circle
              cx={p.x}
              cy={p.y}
              r={NODE_R}
              fill={n.done ? '#22c55e' : '#0f1a2e'}
              stroke="#22c55e"
              strokeWidth={3.5}
              filter="url(#vr-glow)"
            />
            {n.done ? (
              <path
                d={`M ${p.x - 9} ${p.y + 1} L ${p.x - 2} ${p.y + 8} L ${p.x + 10} ${p.y - 8}`}
                stroke="#ffffff"
                strokeWidth={4.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            ) : Icon ? (
              <g transform={`translate(${p.x - 14}, ${p.y - 14})`}>
                <Icon width={28} height={28} color="#4ade80" strokeWidth={2.2} />
              </g>
            ) : (
              <text
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#4ade80"
                fontSize={22}
                fontWeight={800}
                fontFamily="inherit"
              >
                {n.badge || i + 1}
              </text>
            )}
            <text
              x={lx}
              y={ly}
              textAnchor={labelAnchor}
              fill="#ffffff"
              fontSize={centered ? 25 : 23}
              fontWeight={800}
              fontFamily="inherit"
            >
              {n.label}
            </text>
            {n.sub && (
              <text
                x={lx}
                y={ly + 24}
                textAnchor={labelAnchor}
                fill="#94a3b8"
                fontSize={14}
                fontWeight={600}
                fontFamily="inherit"
              >
                {n.sub}
              </text>
            )}
            {i === 0 && (
              <text
                x={p.x}
                y={p.y + NODE_R + 62}
                textAnchor="middle"
                fill="#22c55e"
                fontSize={13}
                fontWeight={800}
                letterSpacing={3}
                fontFamily="inherit"
              >
                START
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  RoadmapMiniPath — compact winding trail with clickable dots, for   */
/*  roadmap cards.                                                     */
/* ------------------------------------------------------------------ */

export interface MiniStep {
  label: string;
  done: boolean;
  onClick: () => void;
}

export const RoadmapMiniPath: React.FC<{ steps: MiniStep[] }> = ({ steps }) => {
  const MW = 400;
  const MH = 132;
  const pts: Pt[] = useMemo(() => {
    const n = steps.length;
    return steps.map((_, i) => ({
      x: n > 1 ? 26 + (i * (MW - 52)) / (n - 1) : MW / 2,
      y: MH / 2 + 26 * Math.sin(i * 1.35),
    }));
  }, [steps]);
  const d = useMemo(() => smoothPath(pts), [pts]);

  return (
    <svg viewBox={`0 0 ${MW} ${MH}`} className="w-full h-auto select-none" role="img" aria-label="Roadmap trail">
      <defs>
        <filter id="vr-miniglow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={d} fill="none" stroke="#22c55e" strokeWidth={4} strokeLinecap="round" opacity={0.75} filter="url(#vr-miniglow)" />
      {steps.map((s, i) => {
        const p = pts[i];
        const last = i === steps.length - 1;
        return (
          <g
            key={i}
            onClick={s.onClick}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') s.onClick();
            }}
            tabIndex={0}
            role="button"
            aria-label={s.label}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            <title>{s.label}</title>
            <circle cx={p.x} cy={p.y} r={15} fill="#22c55e" opacity={0.12} />
            <circle
              cx={p.x}
              cy={p.y}
              r={10}
              fill={s.done ? '#22c55e' : '#0f1a2e'}
              stroke="#22c55e"
              strokeWidth={2.5}
              filter="url(#vr-miniglow)"
            />
            {s.done && (
              <path
                d={`M ${p.x - 4.5} ${p.y + 0.5} L ${p.x - 1} ${p.y + 4} L ${p.x + 5} ${p.y - 4}`}
                stroke="#fff"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
            {last && (
              <polygon
                points={`${p.x},${p.y - 34} ${p.x + 16},${p.y - 29} ${p.x},${p.y - 24}`}
                fill="#22c55e"
                opacity={0.95}
              />
            )}
            {last && (
              <line x1={p.x} y1={p.y - 10} x2={p.x} y2={p.y - 34} stroke="#e2e8f0" strokeWidth={2.5} strokeLinecap="round" />
            )}
          </g>
        );
      })}
    </svg>
  );
};
