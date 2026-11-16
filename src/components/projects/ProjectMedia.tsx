import { useState } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import type { Project } from '../../data/projects';
import { useI18n } from '../../i18n';

/** Generated cover for projects without public screenshots (private / client work). */
export function ProjectCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  const { l } = useI18n();
  const cover = project.cover ?? { from: '#3f3f46', to: '#71717a', mark: project.name.slice(0, 2) };

  return (
    <div
      className="relative flex h-full w-full items-end overflow-hidden p-5"
      style={{ backgroundImage: `linear-gradient(135deg, ${cover.from}, ${cover.to})` }}
    >
      <div aria-hidden className="absolute inset-0 opacity-25 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
      <span aria-hidden className="absolute -right-3 -top-6 select-none font-mono text-[9rem] font-bold leading-none text-white/15">
        {cover.mark}
      </span>
      <div className="relative">
        <p className={`font-semibold text-white ${compact ? 'text-lg' : 'text-2xl'}`}>{project.name}</p>
        <p className="mt-1 text-sm text-white/80">{l(project.tagline)}</p>
        {project.isPrivate && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-white/90">
            <Lock size={11} /> {l({ fr: 'Projet privé', en: 'Private project' })}
          </p>
        )}
      </div>
    </div>
  );
}

/** Thumbnail used on cards: first screenshot, or the generated cover. */
export function ProjectThumb({ project }: { project: Project }) {
  if (project.images.length === 0) return <ProjectCover project={project} compact />;
  return (
    <img
      src={project.images[0]}
      alt=""
      loading="lazy"
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}

/** Image gallery used in the case-study dialog. */
export function ProjectGallery({ project }: { project: Project }) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const count = project.images.length;

  if (count === 0) {
    return (
      <div className="aspect-[16/9] overflow-hidden rounded-xl">
        <ProjectCover project={project} />
      </div>
    );
  }

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-elevated">
      <img
        src={project.images[index]}
        alt={`${project.name} — ${index + 1}/${count}`}
        className="h-full w-full object-contain"
      />
      {count > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 bg-surface/90" aria-label={t('projects.prevImage')}>
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={() => go(1)} className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 bg-surface/90" aria-label={t('projects.nextImage')}>
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {project.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} / ${count}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-accent' : 'w-1.5 bg-fg/30'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
