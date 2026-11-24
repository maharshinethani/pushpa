import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { RevealSection, GoldDivider } from './Reveal';

export function MainContent() {
  return (
    <div className="relative">
      {/* ===== Names hero ===== */}
      <RevealSection className="px-5 pt-20 pb-10 text-center">
        <p className="font-body text-sm italic tracking-wide text-gold-200/90">
          with the blessings of the elders
        </p>
        <div className="mx-auto my-4 h-px w-32 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
        <p className="font-display text-base uppercase tracking-[0.3em] text-mint-100/80">
          Sri Devara Chinnarao &amp; Smt. Srinamma
        </p>
        <p className="mx-auto mt-6 max-w-md font-body text-[0.95rem] leading-relaxed text-mint-50/90">
          Solicit your gracious presence with family and friends on the
          auspicious occasion of the marriage of our youngest daughter
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <motion.h2
            className="font-display text-[clamp(2.8rem,12vw,5.5rem)] leading-none text-ivory-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Pushpa
          </motion.h2>
          <motion.span
            className="font-script text-3xl text-gold-300 sm:text-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            with
          </motion.span>
          <motion.h2
            className="font-display text-[clamp(2.8rem,12vw,5.5rem)] leading-none text-ivory-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Srikanth
          </motion.h2>
        </div>
        <p className="mx-auto mt-6 max-w-sm font-body text-xs leading-relaxed text-mint-100/70">
          (Second son of Sri Akaramani Pidiraju, Smt. Narasayyamma of
          Sangivalasa Village)
        </p>
      </RevealSection>

      {/* ===== Couple section ===== */}
      <RevealSection className="px-5 py-12">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gold-300/40 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
          <img
            src="/couple.svg"
            alt="Pushpa and Srikanth — traditional Indian wedding portrayal"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mint-900/70 via-transparent to-mint-900/20" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-center">
            <p className="font-script text-3xl text-gold-200 sm:text-4xl">
              Two hearts, one beautiful beginning.
            </p>
          </div>
        </div>
      </RevealSection>

      <GoldDivider className="my-8" />

      {/* ===== Event information ===== */}
      <RevealSection className="px-5 py-10">
        <h2 className="text-center font-display text-3xl uppercase tracking-[0.25em] text-gold-200 sm:text-4xl">
          The Auspicious Occasions
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center font-body text-sm italic text-mint-100/70">
          We invite you to bless the couple with your presence
        </p>

        <div className="mt-10 flex flex-col gap-7">
          <div className="rounded-xl border border-gold-300/40 bg-ivory-100/95 px-6 py-7 text-center shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            <img src="/mandala.svg" alt="Mandala motif" className="mx-auto h-12 w-auto" loading="lazy" />
            <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.25em] text-mint-700">
              Sumuhurtham
            </h3>
            <div className="mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              On Saturday 12th Dec 2026
            </p>
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              at Night 08:26 hrs
            </p>
            <p className="mt-2 font-body text-[0.82rem] italic leading-relaxed text-mint-600">
              Uttarashada Nakshatrayukta,<br />Karkataka Lagnam
            </p>
          </div>

          <div className="rounded-xl border border-gold-300/40 bg-ivory-100/95 px-6 py-7 text-center shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            <MapPin className="mx-auto h-10 w-10 text-gold-500" strokeWidth={1.2} />
            <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.25em] text-mint-700">
              Venue
            </h3>
            <div className="mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              Visakhapatnam Dist,
            </p>
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              Bheemili / Bheemunipatnam Mandal,
            </p>
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              Sangivalasa Village
            </p>
            <p className="mt-2 font-body text-[0.82rem] italic leading-relaxed text-mint-600">
              at Bridegroom Residence
            </p>
          </div>

          <div className="rounded-xl border border-gold-300/40 bg-ivory-100/95 px-6 py-7 text-center shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            <img src="/diya.svg" alt="Diya motif" className="mx-auto h-12 w-auto" loading="lazy" />
            <h3 className="mt-3 font-display text-2xl uppercase tracking-[0.25em] text-mint-700">
              Dinner
            </h3>
            <div className="mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              On Saturday 12th Dec 2026
            </p>
            <p className="font-body text-[0.9rem] leading-relaxed text-mint-800">
              Night 07:00 hrs onwards
            </p>
            <p className="mt-2 font-body text-[0.82rem] italic leading-relaxed text-mint-600">
              at Marriage Venue
            </p>
          </div>
        </div>
      </RevealSection>

      <GoldDivider className="my-8" />

      {/* ===== Venue / Map ===== */}
      <RevealSection className="px-5 py-10">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gold-300/40 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)]">
          <img src="/venue.svg" alt="Sangivalasa village scenery" className="w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-mint-900/80 via-mint-900/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-center">
            <h3 className="font-display text-2xl text-ivory-50">Sangivalasa Village</h3>
            <p className="mt-1 font-body text-sm text-mint-100/80">
              Bheemili Mandal, Visakhapatnam Dist.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sangivalasa+Bheemunipatnam+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-300/70 bg-ivory-100/95 px-5 py-2 font-body text-sm tracking-wide text-mint-700 transition-transform hover:scale-105 active:scale-95"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              View Location
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </RevealSection>

      <GoldDivider className="my-8" />

      {/* ===== Temple decorative section ===== */}
      <RevealSection className="px-5 py-10">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gold-300/30">
          <img src="/temple.svg" alt="Traditional temple artwork" className="w-full object-cover" loading="lazy" />
        </div>
      </RevealSection>

      <GoldDivider className="my-8" />

      {/* ===== Final blessing ===== */}
      <RevealSection className="px-5 py-16 text-center">
        <img src="/ganesha.svg" alt="Lord Ganesha" className="mx-auto h-24 w-auto" loading="lazy" />
        <p className="mx-auto mt-6 max-w-md font-script text-2xl leading-relaxed text-gold-200 sm:text-3xl">
          Your presence will make our celebration truly special.
        </p>
        <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
        <p className="font-display text-lg uppercase tracking-[0.3em] text-ivory-50">
          With Best Compliments From
        </p>
        <p className="mt-2 font-script text-3xl text-gold-300 sm:text-4xl">
          Near &amp; Dear
        </p>
        <div className="mx-auto mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
          <img src="/mandala.svg" alt="" className="h-6 w-6 opacity-70" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
        </div>
        <p className="mt-10 font-body text-xs uppercase tracking-[0.3em] text-mint-200/50">
          Pushpa &amp; Srikanth · 12 December 2026
        </p>
      </RevealSection>
    </div>
  );
}
