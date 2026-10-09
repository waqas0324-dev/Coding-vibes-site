import React from 'react';
import {
  Sparkles,
  BookOpen,
  Award,
  Crown,
  Code2,
  Palette,
  Zap,
  Target,
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Star,
  Rocket,
  Layers,
  Flame
} from 'lucide-react';
import { BadgeRarity } from '../../data/badges';

interface BadgeIconProps {
  name: string;
  rarity: BadgeRarity;
  unlocked?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  name,
  rarity,
  unlocked = true,
  size = 'md'
}) => {
  const getIcon = () => {
    const iconProps = { className: 'w-full h-full' };
    switch (name) {
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'Award': return <Award {...iconProps} />;
      case 'Crown': return <Crown {...iconProps} />;
      case 'Code2': return <Code2 {...iconProps} />;
      case 'Palette': return <Palette {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Target': return <Target {...iconProps} />;
      case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
      case 'Trophy': return <Trophy {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Star': return <Star {...iconProps} />;
      case 'Rocket': return <Rocket {...iconProps} />;
      case 'Layers': return <Layers {...iconProps} />;
      case 'Flame': return <Flame {...iconProps} />;
      default: return <Award {...iconProps} />;
    }
  };

  const sizeClasses = {
    sm: 'w-7 h-7 p-1.5 rounded-lg text-xs',
    md: 'w-11 h-11 p-2.5 rounded-xl text-sm',
    lg: 'w-16 h-16 p-3.5 rounded-2xl text-base',
    xl: 'w-20 h-20 p-4 rounded-3xl text-xl'
  }[size];

  if (!unlocked) {
    return (
      <div className={`${sizeClasses} bg-gray-100 dark:bg-[#141c2c] text-gray-400 dark:text-gray-600 border border-gray-300 dark:border-gray-800 flex items-center justify-center shrink-0`}>
        {getIcon()}
      </div>
    );
  }

  // Rarity styles
  const rarityConfig = {
    Bronze: 'bg-gradient-to-br from-amber-700/20 to-orange-800/30 text-amber-600 dark:text-amber-400 border border-amber-600/40 shadow-xs shadow-amber-500/10',
    Silver: 'bg-gradient-to-br from-slate-200 to-gray-300 dark:from-slate-700/40 dark:to-slate-800/40 text-slate-700 dark:text-slate-200 border border-slate-400/40 shadow-xs shadow-slate-400/10',
    Gold: 'bg-gradient-to-br from-amber-400/20 via-yellow-500/25 to-amber-600/30 text-amber-500 dark:text-yellow-400 border border-yellow-500/50 shadow-sm shadow-yellow-500/20',
    Diamond: 'bg-gradient-to-br from-cyan-400/25 via-sky-500/30 to-indigo-600/35 text-cyan-600 dark:text-cyan-300 border border-cyan-400/60 shadow-md shadow-cyan-500/25 animate-pulse'
  }[rarity];

  return (
    <div className={`${sizeClasses} ${rarityConfig} flex items-center justify-center shrink-0 transition-transform duration-300`}>
      {getIcon()}
    </div>
  );
};
