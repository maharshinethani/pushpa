import { useState } from 'react';
import { Music, Music2 } from 'lucide-react';

interface Props {
  active: boolean;
  onToggle: () => void;
}

export function MusicControl({ active, onToggle }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={active ? 'Pause background music' : 'Play background music'}
      aria-pressed={active}
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/60 bg-ivory-100/95 text-mint-700 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
    >
      {active ? (
        <Music2 className="h-5 w-5" />
      ) : (
        <Music className="h-5 w-5" />
      )}
      {active && (
        <span className="absolute inset-0 rounded-full border border-gold-400/70 animate-pulse-soft" />
      )}
      <span className="sr-only">{hover ? (active ? 'Pause' : 'Play') : ''}</span>
    </button>
  );
}
