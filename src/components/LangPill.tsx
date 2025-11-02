'use client';

import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { FiGlobe } from 'react-icons/fi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { i18nRouterConfig } from '@/i18nRouterConfig';

export default function LangPill() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    let newPath: string;

    if (currentLocale === i18nRouterConfig.defaultLocale && !i18nRouterConfig.prefixDefault) {
      newPath = `/${newLocale}${pathname}`;
    } else {
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    window.location.href = newPath;
  };

  return (
    <Select value={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className="h-8 w-auto min-w-[70px] rounded-[8px] border border-[#E7E8EC] dark:border-white/15 bg-[#f4faff] dark:bg-white/10 px-3 text-xs text-[#0B1A3E] dark:text-white/90">
        <FiGlobe className="mr-1 h-4 w-4" />
        <SelectValue placeholder="Lang" />
      </SelectTrigger>
      <SelectContent sideOffset={6}>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ar">AR</SelectItem>
      </SelectContent>
    </Select>
  );
}
