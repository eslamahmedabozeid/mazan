import React from "react";
import FAQ from "./FAQ";
import ContactSection from "./ContactSection";

const Features = () => {
  return (
    <div className="py-[88px] bg-[#FFF] dark:bg-[hsl(var(--background))]">
      <div className="text-center">
        <a
          href="#"
          className="px-6 py-2 bg-white rounded-[32px] border outline-offset-[-1px] outline-text-primary-default inline-flex justify-center items-center gap-2.5 border-[#0F408F] dark:border-[#9CE818] dark:bg-transparent"
        >
          <div className="text-center justify-start text-surface-secondary-default text-base font-medium text-[#0F408F] font-['Brando_Sans_TEST'] leading-5 dark:text-[#9CE818]">
            Features
          </div>
        </a>

         


      </div>
      <div className="flex w-full justify-center">
        <h1 className="self-stretch text-center justify-start text-text-default-heading text-4xl font-semibold font-['Montserrat'] leading-10 mt-6 lg:w-[41%]">
          Smart tools designed to simplify your financial life.
        </h1>
      </div>

      <div className="mt-[64px] max-w-[1600px] mx-auto overflow-hidden xl:scale-[92%] w-[80%] md:w-[90%]">
        <div className="rounded-[32px] bg-[#F4F9FF] dark:bg-[#102047] flex justify-center items-center p-14">
          <div className="flex flex-col items-center">
            <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold">
              Direct Investing
            </h2>
            <p className="text-[#5C667E] dark:text-[#fff] text-lg font-normal text-center w-[74%] pt-3">
              Start new investments directly from the app, whether in stocks,
              mutual funds, or others.
            </p>
          </div>
          <img src="/asset/Frame1820550878.png" className="dark:hidden"/>
           <img src="/asset/darke3.png" className="dark:block hidden" />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto overflow-hidden xl:scale-x-[92%] w-[80%] md:w-[90%] flex gap-3">
        <div className="bg-[#F4F9FF] dark:bg-[#102047] rounded-[32px] p-14 text-center gap-6 grid">
          <div className="text-center flex justify-center">
            <img src="/asset/Frame1820550757.png" />
          </div>
          <div className="">
          <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold">
            Effortlessly track your finances
          </h2>
          <p className="text-[#5C667E] text-lg font-medium text-center pt-3">
            Track your net worth and assets in real time with intuitive charts
            and clear breakdowns that keep you informed.
          </p>
          </div>
        </div>
        <div className="bg-[#F4F9FF] dark:bg-[#102047] rounded-[32px] text-center p-14 gap-6 grid">
          <div className="text-center flex justify-center">
            <img src="/asset/LiabilityTypes.png" />
          </div>
           <div className="">
          <h2 className="text-[#0B1A3E] dark:text-[#fff] text-xl font-semibold">
            Simplified Budget Management
          </h2>
          <p className="text-[#5C667E] text-lg font-medium text-center w-[100%] pt-3">
            Easily set and monitor your budgets for different categories. Get
            helpful reminders and insights to stay on track.
          </p>
          </div>
        </div>
      </div>

<section className="relative overflow-hidden min-h-[792px] image_groub mt-[123px] py-20 md:py-28 dark:hidden">
  <div className="mx-auto max-w-[1660px] xl:max-w-[1470px]   ">
    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
      {/* النص */}
      <div className="md:col-span-6 lg:col-span-5">
        <a
          href="#"
          className="inline-flex items-center rounded-full border border-[#0F408F] px-4 py-1.5 text-sm text-[#0F408F] bg-white"
        >
          Security
        </a>

        <h2 className="mt-5 text-[34px] leading-[1.15] md:text-[44px] xl:text-[48px] font-medium text-[#0B1A3E]">
          Your bank accounts and investments are always secure.
        </h2>

        <p className="mt-8 max-w-[520px] text-[#0B1A3E] text-[18px] md:text-[20px] font-normal">
          Mizan uses advanced encryption and trusted connections to keep your accounts and
          investments safe — always.
        </p>
      </div>

      <div className="relative mt-14 md:mt-0 md:col-span-6 lg:col-span-7 flex md:justify-end">
       
        <div className=" relative w-[82%] max-w-[560px] object-contain
            ltr:md:mr-[-40px] rtl:md:ml-[-40px]
            drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
            [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
          
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
<section className="relative overflow-hidden min-h-[792px] image_groub_dark mt-[123px] py-20 md:py-28 dark:block hidden">
  <div className="mx-auto max-w-[1660px] xl:max-w-[1470px]   ">
    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
      {/* النص */}
      <div className="md:col-span-6 lg:col-span-5">
        <a
          href="#"
          className="inline-flex items-center rounded-full border border-[#9CE818] px-4 py-1.5 text-sm text-[#9CE818]"
        >
          Security
        </a>

        <h2 className="mt-5 text-[34px] leading-[1.15] md:text-[44px] xl:text-[48px] font-medium text-[#fff]">
          Your bank accounts and investments are always secure.
        </h2>

        <p className="mt-20 max-w-[520px] text-[#E7E8EC] text-[18px] md:text-[20px] font-normal">
          Mizan uses advanced encryption and trusted connections to keep your accounts and
          investments safe — always.
        </p>
      </div>

      <div className="relative mt-14 md:mt-0 md:col-span-6 lg:col-span-7 flex md:justify-end">
       
        <div className=" relative w-[82%] max-w-[560px] object-contain
            ltr:md:mr-[-40px] rtl:md:ml-[-40px]
            drop-shadow-[0_25px_60px_rgba(11,26,62,0.25)]
            [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
          
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


    <section className="bg-[#F4F9FF] dark:bg-[#102047] rounded-3xl">
      <div className="py-20">
        <FAQ />
      </div>
    </section>

    <section className="bg-[#FFF] dark:bg-[#0B1A3E]">
    <div className="py-20">
      <ContactSection />
    </div>
  </section>

    </div>
  );
};

export default Features;
