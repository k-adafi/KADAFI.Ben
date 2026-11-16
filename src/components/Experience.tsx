import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n';
import { experience } from '../data/career';
import { Reveal, SectionHeader } from '../lib/ui';

export default function Experience() {
  const { t, l, ll } = useI18n();

  return (
    <section id="experience" className="section border-t border-line">
      <div className="container">
        <SectionHeader eyebrow={t('experience.eyebrow')} title={t('experience.title')} />

        <ol className="mt-12 space-y-4">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.start.en}`}>
              <Reveal delay={0.05} direction={i % 2 === 0 ? 'right' : 'left'} className="card grid gap-4 p-6 md:grid-cols-[200px_1fr] md:gap-8">
                <div>
                  <p className="font-mono text-xs text-muted">
                    {l(job.start)} — {job.end ? l(job.end) : t('experience.present')}
                  </p>
                  <p className="mt-1 text-xs text-muted">{l(job.location)}</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {l(job.role)}{' '}
                    <span className="font-normal text-muted">·</span>{' '}
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 font-normal text-muted hover:text-accent">
                        {job.company} <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span className="font-normal text-muted">{job.company}</span>
                    )}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {ll(job.bullets).map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {job.stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
