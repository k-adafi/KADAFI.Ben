import { ArrowUpRight, Award, GraduationCap, HeartHandshake } from 'lucide-react';
import { useI18n } from '../i18n';
import { certifications, degrees, engagement } from '../data/career';
import { Reveal, SectionHeader } from '../lib/ui';

export default function Education() {
  const { t, l } = useI18n();

  return (
    <section id="education" className="section border-t border-line">
      <div className="container">
        <SectionHeader eyebrow={t('education.eyebrow')} title={t('education.title')} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-6" direction="right">
            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap size={16} className="text-accent" /> {t('education.degrees')}
              </h3>
              <ul className="mt-5 space-y-5">
                {degrees.map((d) => (
                  <li key={d.title.en}>
                    <p className="font-medium">{l(d.title)}</p>
                    <p className="mt-0.5 text-sm text-muted">{l(d.detail)}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{l(d.period)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <HeartHandshake size={16} className="text-accent" /> {t('education.engagement')}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <a href={engagement.url} target="_blank" rel="noreferrer" className="link font-medium">
                  {engagement.org}
                </a>{' '}
                — {l(engagement.text)}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} direction="left">
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <Award size={16} className="text-accent" /> {t('education.certifications')}
              </h3>
              <ul className="mt-3 divide-y divide-line">
                {certifications.map((c) => (
                  <li key={c.title.en} className="flex items-center gap-4 py-3">
                    <span className="w-10 shrink-0 font-mono text-xs text-muted">{c.year}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{l(c.title)}</p>
                      <p className="text-xs text-muted">{c.issuer}</p>
                    </div>
                    {c.file && (
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex shrink-0 items-center gap-0.5 text-xs text-muted hover:text-accent"
                        aria-label={`${t('education.view')} — ${l(c.title)}`}
                      >
                        {t('education.view')} <ArrowUpRight size={12} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
