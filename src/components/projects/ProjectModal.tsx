import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { kindLabel, type Project } from '../../data/projects';
import { useI18n } from '../../i18n';
import { ProjectGallery } from './ProjectMedia';
import ProjectLinks from './ProjectLinks';

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, l, ll } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = `project-${project.id}-title`;

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      // Keep keyboard focus inside the dialog.
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="card relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-b-none sm:rounded-2xl"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="font-mono text-xs text-muted">
              {l(kindLabel[project.kind])} · {project.year} · {l(project.status)}
            </p>
            <h3 id={titleId} className="mt-1 text-xl font-semibold tracking-tight">
              {project.name}
            </h3>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className="icon-btn shrink-0" aria-label={t('projects.close')}>
            <X size={18} />
          </button>
        </div>

        <div className="space-y-8 p-6">
          <ProjectGallery project={project} />

          <p className="text-base leading-relaxed text-fg">{l(project.summary)}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="eyebrow">{t('projects.context')}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l(project.context)}</p>
            </div>
            <div>
              <h4 className="eyebrow">{t('projects.role')}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{l(project.role)}</p>
            </div>
          </div>

          <div>
            <h4 className="eyebrow">{t('projects.highlights')}</h4>
            <ul className="mt-3 space-y-2">
              {ll(project.highlights).map((h) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">{t('projects.stack')}</h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
              {project.aiAssisted && (
                <span className="chip border-accent/40 bg-accent-soft text-accent">
                  <Sparkles size={11} className="mr-1" /> {t('projects.aiAssisted')}
                </span>
              )}
            </div>
          </div>

          <div className="border-t border-line pt-6">
            <ProjectLinks project={project} size="md" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
