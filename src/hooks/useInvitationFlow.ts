import { useEffect, useRef, useState } from 'react';

type Phase = 'INTRO' | 'READY' | 'OPENING' | 'REVEAL' | 'MAIN';

export function useInvitationFlow() {
  const [phase, setPhase] = useState<Phase>('INTRO');
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setPhase('READY'), 1400);
    return () => clearTimeout(t);
  }, []);

  const complete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setProgress(1);
    setPhase('OPENING');
    if (safetyRef.current) clearTimeout(safetyRef.current);
    safetyRef.current = setTimeout(() => {
      setPhase('REVEAL');
      setTimeout(() => setPhase('MAIN'), 1100);
    }, 900);
  };

  // Safety fallback: never leave user stuck
  useEffect(() => {
    if (phase === 'READY') {
      const auto = setTimeout(() => complete(), 12000);
      return () => clearTimeout(auto);
    }
  }, [phase]);

  const startReveal = () => {
    if (phase !== 'READY' || completedRef.current) return;
    complete();
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (safetyRef.current) clearTimeout(safetyRef.current);
    };
  }, []);

  return { phase, progress, startReveal };
}
