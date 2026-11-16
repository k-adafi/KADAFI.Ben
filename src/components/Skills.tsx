import { useI18n } from '../i18n';
import { AI_SKILL, skillGroups } from '../data/career';
import { Reveal, SectionHeader } from '../lib/ui';

export default function Skills() {
  const { t, l } = useI18n();

  return (
    <section id="skills" className="section border-t border-line">
      <div className="container">
        <SectionHeader eyebrow={t('skills.eyebrow')} title={t('skills.title')} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title.en} delay={(i % 3) * 0.08}>
              <div className="card h-full p-6">
                <h3 className="text-sm font-semibold">{l(group.title)}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-md border px-2.5 py-1 text-sm ${
                        item === AI_SKILL ? 'border-accent/40 bg-accent-soft text-accent' : 'border-line bg-elevated text-fg'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
