import React from "react";
import initTranslations from '@/app/i18n';


export default async function Hero({ locale }: { locale: string }) {
    const { t } = await initTranslations(locale, ['homepage']);
  
  return (
    <div className="bg-[#B6DFFF80] dark:bg-[hsl(var(--background))] pb-14">
      <div className="relative mt-[131px]">
        <div className=" bg-sky-200/50" />
        <div className="w-full text-center items-center gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="w-full text-center justify-start text-text-default-heading text-5xl font-semibold font-['Brando_Sans_TEST'] leading-[56px] max-sm:text-4xl">
              {t('You can take control of your financial future')}
            </div>
            <div className="self-stretch text-center justify-start text-text-default-heading lg:text-xl max-sm:text-base font-medium font-['Brando_Sans_TEST'] leading-8">
              {t('We help you understand your financial health with detailed insights and easy-to-use tools')}
            </div>
          </div>

          <form className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-xl bg-white/70 dark:bg-[#102047] p-1 shadow max-sm:w-[85%]" dir="ltr">
            <input
              type="tel"
              className="h-12 flex-1 rounded-lg px-4 outline-none placeholder:text-slate-400 dark:bg-transparent"
              placeholder={t("Enter your email and join the waiting list")}
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-lg bg-lime-500 px-5 font-semibold text-white"
            >
              {t('Join')}
            </button>
          </form>
        </div>

        <div className="w-full flex justify-center mt-[131px] dark:hidden">
          <img src="/asset/mock.png" />
        </div>
        <div className="w-full  justify-center mt-[131px] hidden dark:flex">
          <img src="/asset/mockdark.png" />
        </div>  


        <div className="self-stretch text-center text-text-default-heading text-xl font-semibold  leading-6 w-full flex justify-center">
             <p className="lg:w-[40%] max-sm:w-[90%]">{t('Download the app now and start investing and managing your money smarter, faster and better - at your fingertips')}</p> 
            </div>

            <div className="flex justify-center mt-[32px]">
                <img src="/asset/download-on.png"  className="mx-2"/>
                 <img src="/asset/google-play.png"  className="mx-2"/>
            </div>
      </div>
    </div>
    
  );
}