import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function RevealSection({ children, id, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 60, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/70" />
      <img src="/floral-divider.svg" alt="" className="mx-3 h-5 w-auto opacity-80" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/70" />
    </div>
  );
}

interface EventCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  lines: string[];
}

export function EventCard({ icon, iconAlt, title, lines }: EventCardProps) {
  return (
    <motion.div
      className="paper-texture relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-gold-300/50 px-6 py-7 text-center shadow-[0_18px_40px_-22px_rgba(20,50,40,0.55)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-50" />
      <img src={icon} alt={iconAlt} className="relative mx-auto h-12 w-auto" loading="lazy" />
      <h3 className="relative mt-3 font-display text-2xl uppercase tracking-[0.25em] text-mint-700">
        {title}
      </h3>
      <div className="relative mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
      {lines.map((line, i) => (
        <p
          key={i}
          className="relative font-body text-[0.9rem] leading-relaxed text-mint-800"
        >
          {line}
        </p>
      ))}
    </motion.div>
  );
}
