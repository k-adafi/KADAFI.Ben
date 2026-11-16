import { Bot, Terminal } from 'lucide-react';
import { useI18n } from '../i18n';
import { workflow } from '../data/profile';
import { Reveal, SectionHeader } from '../lib/ui';

export default function Workflow() {
  const { t, l } = useI18n();

  return (
    <section id="workflow" className="section border-t border-line">
      <div className="container">
        <SectionHeader eyebrow={t('workflow.eyebrow')} title={t('workflow.title')} lead={l(workflow.intro)} />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.steps.map((step, i) => (
            <li key={step.title.en}>
              <Reveal delay={i * 0.08} className="card h-full p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{l(step.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l(step.body)}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-6">
          <figure className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
              <Terminal size={14} className="text-muted" />
              <span className="font-mono text-xs text-muted">agent — {l(workflow.example.context)}</span>
            </div>
            <div className="flex gap-3 p-5">
              <Bot size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <figcaption className="text-xs font-medium uppercase tracking-wider text-muted">
                  {l(workflow.example.label)}
                </figcaption>
                <blockquote className="mt-2 font-mono text-sm leading-relaxed text-fg">{l(workflow.example.prompt)}</blockquote>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
