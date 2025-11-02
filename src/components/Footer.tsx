// Footer.tsx
'use client';

import { useEffect, useState } from 'react';
import initTranslations from '@/app/i18n';

export default function Footer({ locale = 'en' }: { locale?: string }) {
  const [{ t, summary, aria, alt }, setI18n] = useState(() => ({
    t: (k: string) => k,
    summary: '',
    aria: {
      linkedin: 'LinkedIn',
      x: 'X',
      instagram: 'Instagram',
    },
    alt: {
      logo: 'Mizan logo',
      sama: 'Saudi Central Bank',
      cma: 'Capital Market Authority',
    },
  }));

  useEffect(() => {
    let mounted = true;
    (async () => {
      const i18n = await initTranslations(locale, ['homepage']);
      if (!mounted) return;

      setI18n({
        t: i18n.t,
        summary: i18n.t('homepage.footer.summary'),
        aria: {
          linkedin: i18n.t('homepage.footer.aria.linkedin'),
          x: i18n.t('homepage.footer.aria.x'),
          instagram: i18n.t('homepage.footer.aria.instagram'),
        },
        alt: {
          logo: i18n.t('homepage.footer.alt.logo'),
          sama: i18n.t('homepage.footer.alt.sama'),
          cma: i18n.t('homepage.footer.alt.cma'),
        },
      });
    })();
    return () => {
      mounted = false;
    };
  }, [locale]);

  return (
    <footer className="bg-[#F4F9FF] dark:bg-[#102047]">
      <div className="w-[92%] max-w-[1200px] mx-auto py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* left: logo + text + socials */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/asset/footer.png"
                alt={alt.logo}
                className="h-auto w-[112px] rounded dark:hidden"
              />
              <img
                src="/asset/Framedark1.png"
                alt={alt.logo}
                className="h-auto w-[112px] rounded hidden dark:block"
              />
              {/* <span className="text-[#0B1A3E] dark:text-white text-[18px] font-semibold tracking-wide">
                MIZAN
              </span> */}
            </div>

            <p className="mt-4 text-[14px] leading-6 text-[#0B1A3E]/70 dark:text-white/70">
              {summary}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label={aria.linkedin}
                className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#0B1A3E] dark:bg-white/10 text-white dark:text-white/90"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label={aria.x}
                className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#0B1A3E] dark:bg-white/10 text-white dark:text-white/90"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label={aria.instagram}
                className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#0B1A3E] dark:bg-white/10 text-white dark:text-white/90"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* right: approvals/logos */}
          <div className="flex items-center gap-10 md:gap-16 dark:hidden max-sm:flex-col">
            <img
              src="/asset/Sudialogo2.png"
              alt={alt.sama}
              className=" w-auto opacity-80"
            />
            <img
              src="/asset/Sudialogo1.png"
              alt={alt.cma}
              className=" w-auto opacity-80"
            />
          </div>

          <div className="items-center gap-10 md:gap-16 hidden dark:flex">
            <img
              src="/asset/dark1.png"
              alt={alt.sama}
              className=" w-auto opacity-80"
            />
            <img
              src="/asset/dark2.png"
              alt={alt.cma}
              className=" w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V24H8z"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.9 1H22l-8.1 9.26L24 23h-7.45l-5.82-7.56L3.9 23H1l8.77-9.99L0 1h7.6l5.25 6.93L18.9 1z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2A2.8 2.8 0 1014.8 12 2.8 2.8 0 0012 9.2zM18.5 6a1 1 0 110 2 1 1 0 010-2z"/>
    </svg>
  );
}
