import { useI18n } from '../i18n';
import { about } from '../data/profile';
import { Reveal, SectionHeader } from '../lib/ui';

export default function About() {
  const { t, l } = useI18n();

  return (
    <section id="about" className="section border-t border-line">
      <div className="container grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />
          <Reveal delay={0.05} className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.en}>{l(p)}</p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} direction="left">
          <dl className="card divide-y divide-line">
            {about.facts.map((f) => (
              <div key={f.key} className="px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{t(f.key)}</dt>
                <dd className="mt-1 text-sm text-fg">{l(f.value)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
