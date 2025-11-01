import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#B6DFFF80] dark:bg-[hsl(var(--background))] pb-14">
      <div className="relative mt-[131px]">
        <div className=" bg-sky-200/50" />
        <div className="w-full text-center items-center gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="w-full text-center justify-start text-text-default-heading text-5xl font-semibold font-['Montserrat'] leading-[56px]">
              Your trusted financial partner.
            </div>
            <div className="self-stretch text-center justify-start text-text-default-heading text-xl font-medium font-['Brando_Sans_TEST'] leading-8">
              Plan, track, and grow your finances with confidence.
            </div>
          </div>

          <form className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-xl bg-white/70 dark:bg-[#102047] p-1 shadow">
            <input
              type="tel"
              className="h-12 flex-1 rounded-lg px-4 outline-none placeholder:text-slate-400 dark:bg-transparent"
              placeholder="Enter your phone & Join the waitlist"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-lg bg-lime-500 px-5 font-semibold text-white"
            >
              Join
            </button>
          </form>
        </div>

        <div className="w-full flex justify-center mt-[131px] dark:hidden">
          <img src="/asset/mock.png" />
        </div>
        <div className="w-full  justify-center mt-[131px] hidden dark:flex">
          <img src="/asset/mockdark.png" />
        </div>  


        <div className="self-stretch text-center justify-start text-text-default-heading text-xl font-semibold font-['Montserrat'] leading-6">
              Join the waitlist and download the app to get started.
            </div>

            <div className="flex justify-center mt-[32px]">
                <img src="/asset/download-on.png"  className="mx-2"/>
                 <img src="/asset/google-play.png"  className="mx-2"/>
            </div>
      </div>
    </div>
  );
};

export default Hero;
