'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemePill() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      className="inline-flex h-8 items-center gap-1 rounded-full border border-[#0B1A3E]/15 dark:border-white/15 bg-white dark:bg-white/10 px-3 text-xs font-medium text-[#0B1A3E] dark:text-white/90"
      title={isDark ? 'Light' : 'Dark'}
    >
      {isDark ? (
        <>
          <SunIcon className="h-4 w-4" /> Light
        </>
      ) : (
        <>
          <MoonIcon className="h-4 w-4" /> Dark
        </>
      )}
    </button>
  );
}
