import { useState } from 'react';
import { Check, Copy, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useI18n } from '../i18n';
import { profile } from '../data/profile';
import { Reveal } from '../lib/ui';

export default function Contact() {
  const { t, l } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { icon: Linkedin, label: 'LinkedIn', value: 'kadafi-ben', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'k-adafi', href: profile.github },
    { icon: Phone, label: t('contact.phone'), value: profile.phone, href: profile.phoneHref },
  ];

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container">
        <Reveal>
          <div className="card relative overflow-hidden px-6 py-12 md:px-12 md:py-16">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="h2 md:text-5xl">{t('contact.title')}</h2>
            <p className="lead">{t('contact.lead')}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} /> {profile.email}
              </a>
              <button type="button" onClick={copy} className="btn-ghost" aria-live="polite">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? t('contact.copied') : t('contact.copy')}
              </button>
              <a href={l(profile.cv)} download className="btn-ghost">
                <Download size={16} /> {t('cta.cv')}
              </a>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-3">
                    <span className="icon-btn group-hover:text-accent">
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">{label}</span>
                      <span className="block text-sm font-medium group-hover:text-accent">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
