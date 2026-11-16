import { ArrowUp } from 'lucide-react';
import { useI18n } from '../i18n';
import { profile } from '../data/profile';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t('footer.built')}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.interactiveCv} target="_blank" rel="noreferrer" className="hover:text-fg">
            {t('cta.interactiveCv')}
          </a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-fg">
            {t('footer.top')} <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
