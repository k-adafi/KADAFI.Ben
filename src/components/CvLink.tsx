import { Download } from 'lucide-react';
import { useI18n } from '../i18n';
import { profile } from '../data/profile';

/**
 * Résumé download link. The PDF follows the language selected on the site:
 * FR → CV_KADAFI_Ben_FR.pdf, EN → CV_KADAFI_Ben_EN.pdf.
 */
export default function CvLink({
  className,
  short = false,
  onClick,
}: {
  className: string;
  /** Compact label ("CV") for the navbar. */
  short?: boolean;
  onClick?: () => void;
}) {
  const { t, l, lang } = useI18n();
  const href = l(profile.cv);
  const fileName = href.split('/').pop();
  const code = lang.toUpperCase();

  return (
    <a
      href={href}
      download={fileName}
      hrefLang={lang}
      type="application/pdf"
      className={className}
      onClick={onClick}
      title={`${t('cta.cv')} (${code}, PDF)`}
    >
      <Download size={15} />
      {short ? 'CV' : t('cta.cv')}
      <span className="rounded bg-black/10 px-1.5 py-px font-mono text-[10px] font-semibold dark:bg-white/10">{code}</span>
    </a>
  );
}
