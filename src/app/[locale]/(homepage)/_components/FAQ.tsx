'use client';

import { useState, useRef } from 'react';
import { useEffect, useState as useClientState } from 'react';
import initTranslations from '@/app/i18n';

type Item = { q: string; a: string };

export default function FAQ({
  locale = 'en',
}: {
  locale?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [{ t, items, title, subtitle }, setI18n] = useClientState<{
    t: (key: string) => string;
    items: Item[];
    title: string;
    subtitle: string;
  }>({
    t: (k) => k,
    items: [],
    title: '',
    subtitle: '',
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      const i18n = await initTranslations(locale, ['homepage']);
      if (!mounted) return;

      const translatedItems: Item[] = [
        {
          q: i18n.t('homepage.faq.q1.q'),
          a: i18n.t('homepage.faq.q1.a'),
        },
        {
          q: i18n.t('homepage.faq.q2.q'),
          a: i18n.t('homepage.faq.q2.a'),
        },
        {
          q: i18n.t('homepage.faq.q3.q'),
          a: i18n.t('homepage.faq.q3.a'),
        },
        {
          q: i18n.t('homepage.faq.q4.q'),
          a: i18n.t('homepage.faq.q4.a'),
        },
        {
          q: i18n.t('homepage.faq.q5.q'),
          a: i18n.t('homepage.faq.q5.a'),
        },
        {
          q: i18n.t('homepage.faq.q6.q'),
          a: i18n.t('homepage.faq.q6.a'),
        },
          {
          q: i18n.t('homepage.faq.q7.q'),
          a: i18n.t('homepage.faq.q7.a'),
        },
         {
          q: i18n.t('homepage.faq.q8.q'),
          a: i18n.t('homepage.faq.q8.a'),
        },
         {
          q: i18n.t('homepage.faq.q9.q'),
          a: i18n.t('homepage.faq.q9.a'),
        },
         {
          q: i18n.t('homepage.faq.q10.q'),
          a: i18n.t('homepage.faq.q10.a'),
        },
        {
          q: i18n.t('homepage.faq.q11.q'),
          a: i18n.t('homepage.faq.q11.a'),
        },
         {
          q: i18n.t('homepage.faq.q12.q'),
          a: i18n.t('homepage.faq.q12.a'),
        },
         {
          q: i18n.t('homepage.faq.q13.q'),
          a: i18n.t('homepage.faq.q13.a'),
        },
         {
          q: i18n.t('homepage.faq.q14.q'),
          a: i18n.t('homepage.faq.q14.a'),
        },
         {
          q: i18n.t('homepage.faq.q15.q'),
          a: i18n.t('homepage.faq.q15.a'),
        },
      ];

      setI18n({
        t: i18n.t,
        items: translatedItems,
        title: i18n.t('homepage.faq.title'),
        subtitle: i18n.t('homepage.faq.subtitle'),
      });
    })();
    return () => {
      mounted = false;
    };
  }, [locale]);

  return (
    <div className="mx-auto w-[92%] max-w-[980px] rounded-[28px] bg-[#F4F9FF] dark:bg-[#102047] px-6 sm:px-10 py-10 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[48px] sm:text-[48px] font-semibold leading-tight text-[#0B1A3E] dark:text-white">
          {title}
          {/* <span className="block font-semibold">{subtitle}</span> */}
        </h2>
      </div>

      {/* List */}
      <ul role="list" className="divide-y divide-[#0B1A3E] dark:divide-white/10 mt-20">
        {items.map((item, i) => (
          <Row
            key={i}
            index={i}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
            q={item.q}
            a={item.a}
          />
        ))}
      </ul>
    </div>
  );
}

function Row({
  index,
  isOpen,
  onToggle,
  q,
  a,
}: {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  q: string;
  a: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const maxH = isOpen ? ref.current?.scrollHeight ?? 0 : 0;

  return (
    <li className="py-10">
      <button
        aria-controls={`faq-${index}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-2 focus:outline-none dir_ltr"
      >
        <span className="lg:text-[24px] max-sm:text-[20px] text-[#0B1A3E] dark:text-white/90 font-semibold">{q}</span>

        {/* plus icon */}
        <span
          className={`relative h-5 w-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1.6px] bg-[#0B1A3E] dark:bg-white/90 rounded"></span>
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1.6px] h-full bg-[#0B1A3E] dark:bg-white/90 rounded"></span>
        </span>
      </button>

      {/* answer */}
      <div
        id={`faq-${index}`}
        ref={ref}
        style={{ maxHeight: maxH }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="pb-3 pt-1 text-[20px] leading-relaxed text-[#0B1A3E] dark:text-white font-medium font-brando">{a}</div>
      </div>
    </li>
  );
}
