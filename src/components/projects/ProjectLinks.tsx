import { ExternalLink, Figma, Github, Lock, PlayCircle } from 'lucide-react';
import type { Project } from '../../data/projects';
import { useI18n } from '../../i18n';

export default function ProjectLinks({ project, size = 'sm' }: { project: Project; size?: 'sm' | 'md' }) {
  const { t } = useI18n();
  const { live, code, video, design } = project.links;
  const cls = size === 'md' ? 'btn-ghost' : 'btn-ghost px-3 py-1.5 text-xs';
  const icon = size === 'md' ? 16 : 14;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className={cls}>
          <ExternalLink size={icon} /> {t('projects.live')}
        </a>
      )}
      {code && (
        <a href={code} target="_blank" rel="noreferrer" className={cls}>
          <Github size={icon} /> {t('projects.code')}
        </a>
      )}
      {video && (
        <a href={video} target="_blank" rel="noreferrer" className={cls}>
          <PlayCircle size={icon} /> {t('projects.video')}
        </a>
      )}
      {design && (
        <a href={design} target="_blank" rel="noreferrer" className={cls}>
          <Figma size={icon} /> {t('projects.design')}
        </a>
      )}
      {project.isPrivate && (
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <Lock size={12} /> {t('projects.private')}
        </span>
      )}
    </div>
  );
}
