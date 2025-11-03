// app/[locale]/(homepage)/_components/Hero.tsx
import initTranslations from "@/app/i18n";

export default async function Hero({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <div className="bg-[#B6DFFF80] dark:bg-[hsl(var(--background))] pb-14">
      <div className="relative mt-[131px]">
        <div className="bg-sky-200/50" />

        <div className="w-full text-center items-center gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="w-full text-center justify-start text-text-default-heading text-5xl font-semibold leading-[56px] max-sm:text-[40px]">
              {t("homepage.hero.title")}
            </div>
            <div className="self-stretch text-center justify-start text-text-default-heading font-brando text-xl leading-8">
              {t("homepage.hero.subtitle")}
            </div>
          </div>

          <form className="mx-auto h-[54px] mt-6 flex max-w-[28rem] items-center gap-2 rounded-[12px] bg-[#ffffff80] dark:bg-[#102047] p-1 shadow max-sm:mx-6"
          dir="ltr">
            <input
              type="tel"
              className="h-12 flex-1 rounded-lg px-4 outline-none placeholder:text-slate-400 bg-transparent dark:bg-transparent"
              placeholder={t("homepage.hero.placeholder")}
            />
            <button
              type="submit"
              className="h-12 w-[89px] shrink-0 rounded-lg bg-lime-500 px-5 font-semibold text-base text-[#0B1A3E] dark:text-[#fff]"
            >
              {t("homepage.hero.button")}
            </button>
          </form>
        </div>

        <div className="w-full flex justify-center mt-[131px] dark:hidden">
          <img src="/asset/mock.png" alt={t("homepage.hero.mockAlt")} />
        </div>
        <div className="w-full justify-center mt-[131px] hidden dark:flex">
          <img src="/asset/mockdark.png" alt={t("homepage.hero.mockAlt")} />
        </div>

        <div className="self-stretch text-center justify-start text-text-default-heading text-xl font-semibold leading-6 mt-10 max-sm:px-5">
          {t("homepage.hero.footerText")}
        </div>

        <div className="flex justify-center mt-[32px]">
          <img src="/asset/download-on.png" alt={t("homepage.hero.downloadApple")} className="mx-2" />
          <img src="/asset/google-play.png" alt={t("homepage.hero.downloadGoogle")} className="mx-2" />
        </div>
      </div>
    </div>
  );
}
