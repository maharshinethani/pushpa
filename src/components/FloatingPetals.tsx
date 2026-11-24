import { motion } from 'framer-motion';

interface Props {
  count?: number;
  className?: string;
}

interface Petal {
  id: number;
  x: string;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotate: number;
}

export function FloatingPetals({ count = 12, className = '' }: Props) {
  const petals: Petal[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${(i * 97) % 100}%`,
    delay: (i * 1.3) % 8,
    duration: 9 + ((i * 2.1) % 7),
    size: 8 + ((i * 3) % 10),
    drift: ((i % 2) ? 1 : -1) * (20 + (i % 4) * 14),
    rotate: (i * 37) % 360,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block rounded-full"
          style={{
            left: p.x,
            top: -24,
            width: p.size,
            height: p.size,
            background:
              'radial-gradient(circle at 30% 30%, #ffffff 0%, #f3ecd6 55%, rgba(212,166,62,0.25) 100%)',
            boxShadow: '0 0 6px rgba(255,255,255,0.6)',
          }}
          initial={{ y: 0, x: 0, opacity: 0, rotate: p.rotate }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.drift, p.drift / 2],
            opacity: [0, 0.85, 0.85, 0],
            rotate: p.rotate + 120,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
