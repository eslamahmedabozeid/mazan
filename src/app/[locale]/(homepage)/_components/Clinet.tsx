// app/[locale]/(homepage)/_components/Clinet.tsx
import initTranslations from '@/app/i18n';

export default async function Client({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ['homepage']);

  return (
    <>
      {/* Light */}
      <div className="flex p-14 justify-center items-center gap-16 dark:bg-[hsl(var(--background))] border-b border-solid dark:hidden max-sm:flex-col">
        <div className="text-center justify-start text-text-default-heading text-base font-medium font-['Brando_Sans_TEST'] leading-5">
          {t('homepage.client.authorizedBy')}
        </div>
        <img src="/asset/Sudialogo1.png" alt={t('homepage.client.logo1Alt')} />
        <img src="/asset/Sudialogo2.png" alt={t('homepage.client.logo2Alt')} />
      </div>

      {/* Dark */}
      <div className="flex p-14 justify-center items-center gap-16 dark:bg-[hsl(var(--background))] border-b border-solid dark:flex hidden max-sm:flex-col">
        <div className="text-center justify-start text-text-default-heading text-base font-medium font-['Brando_Sans_TEST'] leading-5">
          {t('homepage.client.authorizedBy')}
        </div>
        <img src="/asset/dark1.png" alt={t('homepage.client.logo1Alt')} />
        <img src="/asset/dark2.png" alt={t('homepage.client.logo2Alt')} />
      </div>
    </>
  );
}
