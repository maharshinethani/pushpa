import { motion } from 'framer-motion';

interface Props {
  onOpen: () => void;
  interactive: boolean;
}

/**
 * The physical-looking invitation card rendered in the center of the screen.
 * Built entirely from layered SVG/CSS to match the mint/teal + ivory + gold
 * language of the reference invitation card.
 */
export function InvitationCard({ onOpen, interactive }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      disabled={!interactive}
      aria-label="Tap to open the wedding invitation"
      className="group relative mx-auto block w-[86%] max-w-[420px] origin-center focus:outline-none"
      style={{ perspective: 1200 }}
      initial={{ scale: 0.82, opacity: 0, rotateX: 8 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={interactive ? { scale: 1.015, rotateX: 2 } : undefined}
      whileTap={interactive ? { scale: 0.99 } : undefined}
    >
      {/* Outer embossed ivory frame */}
      <div className="embossed-border paper-texture relative overflow-hidden rounded-[14px] p-3 sm:p-4">
        {/* Gold inner border line */}
        <div className="relative rounded-[10px] border border-gold-300/60 p-[6px]">
          {/* Mint/teal floral inner panel */}
          <div className="relative overflow-hidden rounded-[8px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/floral-bg.svg)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-mint-700/15" />

            <div className="relative px-5 py-7 sm:px-7 sm:py-9">
              {/* Top ornamental divider */}
              <img
                src="/floral-divider.svg"
                alt=""
                className="mx-auto h-7 w-auto opacity-90"
                loading="eager"
              />

              {/* Ganesha artwork */}
              <img
                src="/ganesha.svg"
                alt="Lord Ganesha"
                className="mx-auto mt-2 h-24 w-auto sm:h-28"
                loading="eager"
              />

              <p className="mt-3 text-center font-display text-[1.35rem] leading-tight tracking-wide text-mint-700 sm:text-3xl">
                Srirasthu
              </p>
              <p className="text-center font-display text-[1.35rem] leading-tight tracking-wide text-mint-700 sm:text-3xl">
                Subhamasthu
              </p>
              <p className="text-center font-display text-[1.35rem] leading-tight tracking-wide text-mint-700 sm:text-3xl">
                Avighnamasthu
              </p>

              <div className="mx-auto my-3 h-px w-24 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />

              <p className="text-center font-script text-3xl text-gold-600 sm:text-4xl">
                Devara&rsquo;s
              </p>
              <p className="mt-1 text-center font-display text-sm uppercase tracking-[0.3em] text-mint-600 sm:text-base">
                Wedding Invitation
              </p>

              {/* Deity artwork */}
              <img
                src="/deity.svg"
                alt="Traditional deity artwork"
                className="mx-auto mt-4 h-20 w-auto opacity-95 sm:h-24"
                loading="lazy"
              />

              <p className="mt-4 text-center font-body text-[0.72rem] leading-relaxed text-mint-800 sm:text-sm">
                Sri Devara Chinnarao, Smt. Srinamma
              </p>

              {/* Bottom ornamental divider */}
              <img
                src="/floral-divider.svg"
                alt=""
                className="mx-auto mt-4 h-7 w-auto rotate-180 opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Subtle paper grain overlay */}
        <div className="paper-grain pointer-events-none absolute inset-0 rounded-[10px] opacity-60" />
      </div>

      {/* Tap to open */}
      <motion.div
        className="mt-6 flex flex-col items-center gap-2"
        animate={interactive ? { opacity: [0.6, 1, 0.6] } : { opacity: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-body text-xs uppercase tracking-[0.35em] text-gold-100/90">
          Tap to Open
        </span>
        <motion.span
          className="block h-2 w-2 rounded-full bg-gold-300"
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.button>
  );
}
