import { useCallback, useMemo, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { kindLabel, projects, type Project, type ProjectCategory } from '../../data/projects';
import { useI18n } from '../../i18n';
import type { UiKey } from '../../i18n/ui';
import { EASE } from '../../lib/motion';
import { Reveal, SectionHeader } from '../../lib/ui';
import { ProjectThumb } from './ProjectMedia';
import ProjectLinks from './ProjectLinks';
import ProjectModal from './ProjectModal';

const filters: { id: 'all' | ProjectCategory; key: UiKey }[] = [
  { id: 'all', key: 'projects.filter.all' },
  { id: 'web', key: 'projects.filter.web' },
  { id: 'mobile', key: 'projects.filter.mobile' },
  { id: 'ai', key: 'projects.filter.ai' },
];

/** Links inside a card must not also open the case study. */
const stop = (e: MouseEvent) => e.stopPropagation();

function ProjectCard({ project, large, onOpen }: { project: Project; large: boolean; onOpen: () => void }) {
  const { t, l } = useI18n();

  return (
    <article
      onClick={onOpen}
      className={`card group relative flex h-full cursor-pointer flex-col overflow-hidden transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-fg/20 hover:shadow-xl hover:shadow-black/10 ${large ? 'md:flex-row' : ''}`}
    >
      <div className={`relative overflow-hidden border-line bg-elevated ${large ? 'aspect-[16/10] border-b md:aspect-auto md:w-[58%] md:border-b-0 md:border-r' : 'aspect-[16/10] border-b'}`}>
        <ProjectThumb project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>{l(kindLabel[project.kind])}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </p>

        <h3 className="mt-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-fg/80">{l(project.tagline)}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{l(project.summary)}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, large ? 8 : 5).map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <div onClick={stop}>
            <ProjectLinks project={project} />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
            className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-xs font-medium text-muted transition-colors hover:text-accent group-hover:text-accent"
            aria-label={`${t('projects.details')} — ${project.name}`}
          >
            {t('projects.details')}
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, l } = useI18n();
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);
  const open = projects.find((p) => p.id === openId) ?? null;
  const close = useCallback(() => setOpenId(null), []);

  return (
    <section id="projects" className="section border-t border-line">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={t('projects.eyebrow')} title={t('projects.title')} lead={t('projects.lead')} />
          <Reveal>
            <div role="group" aria-label={t('projects.title')} className="relative inline-flex rounded-lg border border-line bg-surface p-1">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                    filter === f.id ? 'font-medium text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {filter === f.id && (
                    <motion.span layoutId="project-filter" className="absolute inset-0 rounded-md bg-elevated" transition={{ duration: 0.3, ease: EASE }} />
                  )}
                  <span className="relative">{t(f.key)}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {featured.map((p, i) => {
              const large = filter === 'all' && i === 0;
              return (
                <motion.div
                  key={p.id}
                  layout
                  className={large ? 'md:col-span-2' : ''}
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: EASE, delay: (i % 2) * 0.08 }}
                >
                  <ProjectCard project={p} large={large} onOpen={() => setOpenId(p.id)} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {others.length > 0 && (
          <Reveal className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{t('projects.more')}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              <AnimatePresence initial={false}>
                {others.map((p, i) => (
                  <motion.li
                    key={p.id}
                    layout
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16, transition: { duration: 0.2 } }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(p.id)}
                      className="group flex w-full flex-col gap-1 py-4 text-left transition-colors hover:bg-elevated/50 sm:flex-row sm:items-center sm:gap-6 sm:px-2"
                    >
                      <span className="w-14 shrink-0 font-mono text-xs text-muted">{p.year}</span>
                      <span className="font-medium group-hover:text-accent">{p.name}</span>
                      <span className="text-sm text-muted">{l(p.tagline)}</span>
                      <span className="ml-auto hidden font-mono text-xs text-muted md:inline">{p.stack.slice(0, 3).join(' · ')}</span>
                      <ArrowUpRight size={16} className="hidden text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block" />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </Reveal>
        )}
      </div>

      <AnimatePresence>{open && <ProjectModal key={open.id} project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
