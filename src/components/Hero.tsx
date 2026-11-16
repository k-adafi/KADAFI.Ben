import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';
import { profile, stats } from '../data/profile';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const { t, l } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('hero.available')}
          </motion.p>

          <motion.h1 {...fade(0.05)} className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
            <span className="mt-2 block whitespace-nowrap text-3xl text-muted sm:text-4xl md:text-5xl">
              {/* Non-breaking hyphen so "Full-Stack" never wraps. */}
              {l(profile.role).replace('-', '‑')}
            </span>
          </motion.h1>

          <motion.p {...fade(0.1)} className="mt-4 font-mono text-sm text-accent">
            {profile.stackLine}
          </motion.p>

          <motion.p {...fade(0.15)} className="mt-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
            {l(profile.pitch)}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              {t('cta.projects')} <ArrowRight size={16} />
            </a>
            <a href={l(profile.cv)} download className="btn-ghost">
              <Download size={16} /> {t('cta.cv')}
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          <motion.dl {...fade(0.25)} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.value + s.label.en}>
                <dt className="sr-only">{l(s.label)}</dt>
                <dd className="text-2xl font-semibold tracking-tight md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{l(s.label)}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...fade(0.15)} className="relative mx-auto w-full max-w-sm">
          <div className="card overflow-hidden p-2 shadow-2xl shadow-black/10">
            <img
              src={profile.photo}
              alt={profile.fullName}
              width={640}
              height={720}
              className="aspect-[4/4.5] w-full rounded-xl object-cover object-[50%_25%]"
              loading="eager"
            />
            <div className="flex items-center justify-between px-3 pb-2 pt-3 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} /> {l(profile.location)}
              </span>
              <span className="font-mono">{profile.timezone}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
