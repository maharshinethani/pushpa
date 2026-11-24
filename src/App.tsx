import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInvitationFlow } from './hooks/useInvitationFlow';
import { FloatingPetals } from './components/FloatingPetals';
import { InvitationCard } from './components/InvitationCard';
import { MainContent } from './components/MainContent';
import { MusicControl } from './components/MusicControl';

function App() {
  const { phase, startReveal } = useInvitationFlow();
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const inOpening = phase === 'INTRO' || phase === 'READY' || phase === 'OPENING';
  const showCard = phase === 'READY' || phase === 'OPENING';
  const showReveal = phase === 'REVEAL';
  const showMain = phase === 'MAIN';

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-mint-800">
      {/* Ambient atmospheric background — always present */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, #3c7355 0%, #2f5a43 45%, #244535 100%)',
        }}
      />
      <div
        className="fixed inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage: 'url(/floral-bg.svg)',
          backgroundSize: 'cover',
        }}
      />

      {/* ===== Opening screen ===== */}
      <AnimatePresence>
        {inOpening && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FloatingPetals count={14} />

            {/* Soft vignette behind card */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(212,166,62,0.12) 0%, transparent 60%)',
              }}
            />

            <AnimatePresence mode="wait">
              {phase === 'INTRO' && (
                <motion.div
                  key="intro"
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="mx-auto h-20 w-20 rounded-full border-2 border-gold-300/40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{ borderTopColor: 'rgba(212,166,62,0.9)' }}
                  />
                  <p className="mt-5 font-display text-sm uppercase tracking-[0.4em] text-gold-200/70">
                    Preparing your invitation
                  </p>
                </motion.div>
              )}

              {showCard && (
                <motion.div
                  key="card"
                  className="w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.6, filter: 'blur(8px)' }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ perspective: 1200 }}
                >
                  <InvitationCard
                    interactive={phase === 'READY'}
                    onOpen={startReveal}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Cinematic reveal overlay ===== */}
      <AnimatePresence>
        {showReveal && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-mint-800"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.img
                src="/ganesha.svg"
                alt="Lord Ganesha"
                className="mx-auto h-28 w-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9 }}
              />
              <p className="mt-4 font-script text-3xl text-gold-200">
                Subhamasthu
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Main invitation content ===== */}
      <AnimatePresence>
        {showMain && (
          <motion.main
            className="relative z-10 mx-auto w-full max-w-3xl pb-20"
            initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <FloatingPetals count={8} className="opacity-60" />
            <MainContent />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Music control — only after main content */}
      {showMain && (
        <MusicControl
          active={musicOn}
          onToggle={() => {
            const el = audioRef.current;
            if (!el) { setMusicOn((v) => !v); return; }
            if (musicOn) { el.pause(); } else { el.play().catch(() => {}); }
            setMusicOn((v) => !v);
          }}
        />
      )}

      {/* Audio placeholder — add a src when a music file is available */}
      <audio ref={audioRef} loop preload="none" />
    </div>
  );
}

export default App;
