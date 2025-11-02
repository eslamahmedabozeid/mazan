/* eslint-disable @next/next/no-img-element */
// components/HeaderBar.tsx
import Link from 'next/link';
import ThemePill from './ThemePill';
import LangPill from './LangPill';
import initTranslations from '@/app/i18n';
import MobileNav from './MobileNav'; // ⬅️ جديد

export default async function HeaderBar({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['homepage']);

  return (
    <header className="bg-[#B6DFFF80] dark:bg-[hsl(var(--background))]">
      <div className="mx-auto w-[94%] max-w-[1200px] py-6">
        {/* ⬇️ أضفنا relative فقط عشان البانل المنسدل يتموضع صح */}
        <div className="relative flex items-center justify-between py-4 px-6 rounded-xl border border-[#0B1A3E]/10 dark:border-white/10 bg-white/70 dark:bg-[#102047] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
          {/* Left: logo */}
          <div className="flex items-center gap-2">
            <img
              src="/asset/logowit.svg"
              alt={t('homepage.alt.logo')}
              className="rounded dark:hidden"
            />
            <img
              src="/asset/logodark.png"
              alt={t('homepage.alt.logo')}
              className="rounded hidden dark:block"
            />
          </div>

          {/* Middle: nav (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="text-[#0B1A3E] dark:text-white/80 hover:opacity-100 text-base">
              {t('homepage.nav.features')}
            </Link>
            <Link href="#faq" className="text-[#0B1A3E] dark:text-white/80 hover:opacity-100 text-base">
              {t('homepage.nav.faq')}
            </Link>
            <Link href="#contact" className="text-[#0B1A3E] dark:text-white/80 hover:opacity-100 text-base">
              {t('homepage.nav.contact')}
            </Link>
            {/* client children inside server component = OK */}
            <ThemePill />
            <LangPill />
          </nav>

          {/* Right: actions (light) - Desktop only */}
          <div className="flex items-center gap-2 sm:gap-3 dark:hidden max-md:hidden">
            <a href="#" aria-label={t('homepage.aria.googlePlay')} className="ml-1 opacity-90 hover:opacity-100">
              <img src="/asset/Framewit.svg" alt={t('homepage.alt.play')} className="h-5 w-5" />
            </a>
            <a href="#" aria-label={t('homepage.aria.appStore')} className="opacity-90 hover:opacity-100">
              <img src="/asset/Framewote2.svg" alt={t('homepage.alt.appStore')} className="h-5 w-5" />
            </a>
          </div>

          {/* Right: actions (dark) - Desktop only */}
          <div className="items-center gap-2 sm:gap-3 hidden md:dark:flex ">
            <a href="#" aria-label={t('homepage.aria.googlePlay')} className="ml-1 opacity-90 hover:opacity-100">
              <img src="/asset/head_dark.svg" alt={t('homepage.alt.play')} className="h-5 w-5" />
            </a>
            <a href="#" aria-label={t('homepage.aria.appStore')} className="opacity-90 hover:opacity-100">
              <img src="/asset/head_dark1.svg" alt={t('homepage.alt.appStore')} className="h-5 w-5" />
            </a>
          </div>

          {/* ⬇️ زر التوجل + القائمة للموبايل (Client) */}
          <MobileNav
            labels={{
              features: t('homepage.nav.features'),
              faq: t('homepage.nav.faq'),
              contact: t('homepage.nav.contact'),
              ariaMenu: t('homepage.aria.menu') ?? 'Menu',
              ariaGooglePlay: t('homepage.aria.googlePlay'),
              ariaAppStore: t('homepage.aria.appStore'),
              altPlay: t('homepage.alt.play'),
              altAppStore: t('homepage.alt.appStore'),
            }}
          />
        </div>
      </div>
    </header>
  );
}
