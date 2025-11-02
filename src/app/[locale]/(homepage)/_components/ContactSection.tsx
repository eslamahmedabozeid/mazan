// ContactSection.tsx
'use client';
import { useEffect, useState, FormEvent } from 'react';
import initTranslations from '@/app/i18n';

export default function ContactSection({ locale = 'en' }: { locale?: string }) {
  const [loading, setLoading] = useState(false);

  // i18n state
  const [{ t, title1, title2, desc, labels, placeholders, cta }, setI18n] = useState(() => ({
    t: (k: string) => k,
    title1: '',
    title2: '',
    desc: '',
    labels: { name: '', email: '', message: '' },
    placeholders: { name: '', email: '', message: '' },
    cta: { send: 'Send', sending: 'Sending…' },
  }));

  useEffect(() => {
    let mounted = true;
    (async () => {
      const i18n = await initTranslations(locale, ['homepage']);
      if (!mounted) return;

      setI18n({
        t: i18n.t,
        title1: i18n.t('homepage.contact.titleLine1'),
        title2: i18n.t('homepage.contact.titleLine2'),
        desc: i18n.t('homepage.contact.desc'),
        labels: {
          name: i18n.t('homepage.contact.labels.name'),
          email: i18n.t('homepage.contact.labels.email'),
          message: i18n.t('homepage.contact.labels.message'),
        },
        placeholders: {
          name: i18n.t('homepage.contact.placeholders.name'),
          email: i18n.t('homepage.contact.placeholders.email'),
          message: i18n.t('homepage.contact.placeholders.message'),
        },
        cta: {
          send: i18n.t('homepage.contact.cta.send'),
          sending: i18n.t('homepage.contact.cta.sending'),
        },
      });
    })();
    return () => {
      mounted = false;
    };
  }, [locale]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <div className="mx-auto w-[92%] max-w-[1100px] rounded-[28px] bg-white/70 dark:bg-[#0B1A3E] backdrop-blur px-6 sm:px-10 py-10 border-[5px] border-[#F4F9FF] dark:border-[#102047] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="flex flex-col justify-around h-full">
          <h2 className="text-[34px] leading-[1.1] font-semibold text-[#0B1A3E] dark:text-white">
            {title1}<br/>{title2}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-[#0B1A3E]/70 dark:text-white/70 max-w-[360px]">
            {desc}
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              {labels.name}
            </label>
            <input
              type="text"
              required
              placeholder={placeholders.name}
              className="w-full h-10 rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              {labels.email}
            </label>
            <input
              type="email"
              required
              placeholder={placeholders.email}
              className="w-full h-10 rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-medium text-[#0B1A3E] dark:text-white/80">
              {labels.message}
            </label>
            <textarea
              required
              rows={4}
              placeholder={placeholders.message}
              className="w-full rounded-md border border-[#0B1A3E]/10 dark:border-white/10 bg-white dark:bg-transparent px-3 py-2 text-[14px] outline-none focus:ring-2 focus:ring-[#9CE818]/60"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-14 w-[189px] items-center justify-center rounded-md px-8 text-[14px] font-semibold text-[#0B1A3E] disabled:opacity-60"
            style={{ backgroundColor: '#9CE818' }}
          >
            {loading ? cta.sending : cta.send}
          </button>
        </form>
      </div>
    </div>
  );
}
