// app/[locale]/(homepage)/_components/Features.tsx
import initTranslations from "@/app/i18n";
import FAQ from "./FAQ";
import ContactSection from "./ContactSection";

export default async function Features({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["homepage"]);

  return (
    <div className="py-[88px] bg-[#FFF] dark:bg-[hsl(var(--background))]" id="features">
      <div className="text-center">
        <a
          href="#"
          className="px-6 py-2 bg-white rounded-[32px] border outline-offset-[-1px] outline-text-primary-default inline-flex justify-center items-center gap-2.5 border-[#0F408F] dark:border-[#9CE818] dark:bg-transparent"
        >
          <div className="text-center justify-start text-surface-secondary-default text-base font-brando font-medium text-[#0F408F] leading-5 dark:text-[#9CE818]">
            {t("homepage.features.badge")}
          </div>
        </a>
      </div>

      <div className="flex w-full justify-center">
        <h1 className="self-stretch text-center justify-start  lg:text-[32px] max-sm:text-[29px] font-semibold leading-10 mt-6 lg:w-[31%]">
          {t("homepage.features.title")}
        </h1>
      </div>

      <div className="mt-[64px] max-w-[1600px] mx-auto overflow-hidden xl:scale-[100%] lg:w-[80%] md:w-[90%] max-sm:w-[96%]">
        <div className="rounded-[32px] bg-[#F4F9FF] dark:bg-[#102047] flex justify-center items-center p-14 max-sm:flex-col max-sm:p-8">
          <div className="flex flex-col items-center">
            <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold ">
              {t("homepage.features.block1.heading")}
            </h2>
            <p className="text-[#5C667E] dark:text-[#fff] text-lg font-medium text-center w-[74%] pt-3 max-sm:w-full font-brando">
              {t("homepage.features.block1.text")}
            </p>
          </div>
          <img src="/asset/Frame1820550878.svg" className="dark:hidden" alt={t("homepage.features.block1.imageAlt")} />
          <img src="/asset/darke3.svg" className="dark:block hidden" alt={t("homepage.features.block1.imageAlt")} />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto overflow-hidden xl:scale-x-[100%] lg:w-[80%] md:w-[90%] max-sm:w-[96%] flex gap-3 max-sm:flex-col max-sm:mt-3 mt-3">
        <div className="bg-[#F4F9FF] dark:bg-[#102047] rounded-[32px] p-14 text-center gap-6 grid max-sm:p-8 lg:w-[50%]">
          <div className="text-center flex justify-center">
            <img src="/asset/Frame20550757.svg" alt={t("homepage.features.block2.imageAlt")} className="dark:hidden"/>
            <img src="/asset/Framedark.svg" alt={t("homepage.features.block2.imageAlt")} className="dark:block hidden"/>
          </div>
          <div className="">
            <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold">
              {t("homepage.features.block2.heading")}
            </h2>
            <p className="text-[#5C667E] dark:text-[#fff] text-lg font-medium text-center pt-3 font-brando">
              {t("homepage.features.block2.text")}
            </p>
          </div>
        </div>
        <div className="bg-[#F4F9FF] dark:bg-[#102047] rounded-[32px] text-center p-14 gap-6 grid max-sm:p-8 lg:w-[50%]">
          <div className="text-center flex justify-center">
            <img src="/asset/LiabilityTypes.svg" alt={t("homepage.features.block3.imageAlt")} className="dark:hidden"/>
            <img src="/asset/LiabilityTypesdark.svg" alt={t("homepage.features.block3.imageAlt")} className="dark:block hidden"/>
          </div>
          <div className="">
            <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold">
              {t("homepage.features.block3.heading")}
            </h2>
            <p className="text-[#5C667E] dark:text-[#fff] text-lg font-medium text-center w-[100%] pt-3 font-brando">
              {t("homepage.features.block3.text")}
            </p>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden min-h-[792px] image_groub mt-[123px] py-20 md:py-28 dark:hidden max-sm:p-5">
        <div className="mx-auto max-w-[1660px] xl:max-w-[1470px]  xl:scale-x-[92%] ">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center max-sm:p-6">
            {/* النص */}
            <div className="md:col-span-6 lg:col-span-5">
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-[#0F408F] px-4 py-1.5 text-base text-[#0F408F] bg-white font-brando"
              >
                {t("homepage.features.security.badge")}
              </a>

              <h2 className="mt-5 text-[34px] leading-[1.15] md:text-[44px] xl:text-[48px] font-semibold text-[#0B1A3E]">
                {t("homepage.features.security.heading")}
              </h2>

              <p className="mt-20 max-w-[520px] text-[#0B1A3E] text-[20px] md:text-[20px] font-medium">
                {t("homepage.features.security.text")}
              </p>
            </div>

            <div className="relative mt-14 md:mt-0 md:col-span-6 lg:col-span-7 flex md:justify-end">
              <div
                className=" relative w-[82%] max-w-[560px] object-contain
            ltr:md:mr-[-40px] rtl:md:ml-[-40px]
            drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
            [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              >
              </div>
              {/* <img
                src="/asset/Frame1.png"
                alt="App preview"
                className="
                  relative w-[82%] max-w-[560px] object-contain
                  ltr:md:mr-[-40px] rtl:md:ml-[-40px]
                  drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
                  [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]
                "
              /> */}

              {/* ضبابية خفيفة أسفل الموبايل لتمويه الحافة */}
              <div className="pointer-events-none absolute -bottom-10 ltr:right-10 rtl:left-10 h-[120px] w-[360px] blur-[30px] opacity-50 bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* dark:block */}
      <section className="relative overflow-hidden min-h-[792px] image_groub_dark mt-[123px] py-20 md:py-28 dark:block hidden max-sm:p-5">
        <div className="mx-auto max-w-[1660px] xl:max-w-[1470px]  xl:scale-x-[92%] ">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* النص */}
            <div className="md:col-span-6 lg:col-span-5">
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-[#9CE818] px-4 py-1.5 text-sm text-[#9CE818]"
              >
                {t("homepage.features.security.badge")}
              </a>

              <h2 className="mt-5 text-[34px] leading-[1.15] md:text-[44px] xl:text-[48px] font-medium text-[#fff]">
                {t("homepage.features.security.heading")}
              </h2>

              <p className="mt-20 max-w>[520px] text-[#E7E8EC] text-[18px] md:text-[20px] font-normal">
                {t("homepage.features.security.text")}
              </p>
            </div>

            <div className="relative mt-14 md:mt-0 md:col-span-6 lg:col-span-7 flex md:justify-end">
              <div
                className=" relative w-[82%] max-w-[560px] object-contain
            ltr:md:mr-[-40px] rtl:md:ml-[-40px]
            drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
            [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              >
              </div>
              {/* <img
                src="/asset/Frame1.png"
                alt="App preview"
                className="
                  relative w-[82%] max-w-[560px] object-contain
                  ltr:md:mr-[-40px] rtl:md:ml-[-40px]
                  drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
                  [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]
                "
              /> */}

              {/* ضبابية خفيفة أسفل الموبايل لتمويه الحافة */}
              <div className="pointer-events-none absolute -bottom-10 ltr:right-10 rtl:left-10 h-[120px] w-[360px] blur-[30px] opacity-50 bg-white dark:hidden" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F9FF] dark:bg-[#102047] rounded-3xl lg:mt-[131px]" id="faq">
        <div className="py-20">
          <FAQ locale={locale}/>
        </div>
      </section>

      <section className="bg-[#FFF] dark:bg-[#0B1A3E]" id="contact">
        <div className="py-20">
          <ContactSection locale={locale}/>
        </div>
      </section>
    </div>
  );
}
