// FAQ.tsx
'use client';
import { useState, useRef } from 'react';

type Item = { q: string; a: string };

export default function FAQ({
  items = [
    { q: 'What is Mizan?', a: 'Mizan is a modern finance platform that simplifies accounting and reporting.' },
    { q: 'What is Mizan?', a: 'It helps you track expenses, invoices, and taxes in one place.' },
    { q: 'What is Mizan?', a: 'It supports multi-language and works great on mobile and desktop.' },
    { q: 'What is Mizan?', a: 'You can integrate with popular payment gateways and ERPs.' },
    { q: 'What is Mizan?', a: 'Security and privacy are built-in with role-based access.' },
    { q: 'What is Mizan?', a: 'Get real-time dashboards and clear financial insights.' },
  ],
  title = 'Questions',
  subtitle = '—answers',
}: {
  items?: Item[];
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mx-auto w-[92%] max-w-[980px] rounded-[28px] bg-[#F4F9FF] dark:bg-[#102047] px-6 sm:px-10 py-10 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[48px] sm:text-[48px] font-semibold leading-tight text-[#fff] dark:text-white">
          {title}
          <span className="block font-normal">{subtitle}</span>
        </h2>
      </div>

      {/* List */}
      <ul role="list" className="divide-y divide-[#0B1A3E]/10 dark:divide-white/10">
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
  const maxH = isOpen ? (ref.current?.scrollHeight ?? 0) : 0;

  return (
    <li className="py-3">
      <button
        aria-controls={`faq-${index}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-2 focus:outline-none"
      >
        <span className="text-[15px] sm:text-[20px] text-[#0B1A3E] dark:text-white/90">
          {q}
        </span>

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
        <div className="pb-3 pt-1 text-[14px] leading-relaxed text-[#0B1A3E]/70 dark:text-white/70">
          {a}
        </div>
      </div>
    </li>
  );
}
