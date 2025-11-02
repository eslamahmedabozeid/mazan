'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemePill from './ThemePill';
import LangPill from './LangPill';

type Labels = {
  features: string;
  faq: string;
  contact: string;
  ariaMenu: string;
  ariaGooglePlay: string;
  ariaAppStore: string;
  altPlay: string;
  altAppStore: string;
};

export default function MobileNav({ labels }: { labels: Labels }) {
  const [open, setOpen] = useState(false);

  // اقفل القائمة عند تغيير الهاش/الرابط
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // اقفل بالـ ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* زر التوجل — يظهر فقط على الموبايل */}
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#0B1A3E]/10 dark:border-white/15 bg-white/70 dark:bg-white/10 h-9 w-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F408F] rtl:[direction:ltr]"
        aria-label={labels.ariaMenu}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* أوفرلاي لإغلاق بالضغط خارج القائمة */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] md:hidden"
        />
      )}

      {/* البانل المنسدل — يتموضع تحت شريط الهيدر (الأب relative في HeaderBar) */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-2 right-2 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-[#0B1A3E]/10 dark:border-white/10 bg-white/90 dark:bg-[#102047] shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-[transform,opacity] duration-200 ${
          open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
      >
        <div className="px-4 py-3">
          {/* روابط */}
          <nav className="flex flex-col gap-1.5 text-base">
            <Link
              href="#features"
              className="block rounded-lg px-2 py-2 text-[#0B1A3E] dark:text-white/90 hover:bg-black/[0.04] dark:hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {labels.features}
            </Link>
            <Link
              href="#faq"
              className="block rounded-lg px-2 py-2 text-[#0B1A3E] dark:text-white/90 hover:bg-black/[0.04] dark:hover:bg:white/10"
              onClick={() => setOpen(false)}
            >
              {labels.faq}
            </Link>
            <Link
              href="#contact"
              className="block rounded-lg px-2 py-2 text-[#0B1A3E] dark:text-white/90 hover:bg-black/[0.04] dark:hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {labels.contact}
            </Link>
          </nav>

          {/* الإعدادات + المتاجر */}
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ThemePill />
              <LangPill />
            </div>

            {/* أيقونات المتجر (تبديل تلقائي حسب الثيم) */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label={labels.ariaGooglePlay} className="ml-1 opacity-90 hover:opacity-100 dark:hidden">
                <img src="/asset/Framewit.png" alt={labels.altPlay} className="h-5 w-5" />
              </a>
              <a href="#" aria-label={labels.ariaAppStore} className="opacity-90 hover:opacity-100 dark:hidden">
                <img src="/asset/Framewote2.png" alt={labels.altAppStore} className="h-5 w-5" />
              </a>

              <a href="#" aria-label={labels.ariaGooglePlay} className="ml-1 opacity-90 hover:opacity-100 hidden dark:inline-flex">
                <img src="/asset/Framedarks1.png" alt={labels.altPlay} className="h-5 w-5" />
              </a>
              <a href="#" aria-label={labels.ariaAppStore} className="opacity-90 hover:opacity-100 hidden dark:inline-flex">
                <img src="/asset/Framedarks2.png" alt={labels.altAppStore} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
