'use client';

import Link from 'next/link';
import ThemePill from './ThemePill';
import LangPill from './LangPill';

export default function HeaderBar() {
  return (
    <header className="bg-[#B6DFFF80] dark:bg-[hsl(var(--background))]">
      <div className="mx-auto w-[94%] max-w-[1200px] py-3">
        <div className="flex items-center justify-between rounded-xl border border-[#0B1A3E]/10 dark:border-white/10 bg-white/70 dark:bg-[#102047] px-4 sm:px-6 h-12 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
          {/* Left: logo */}
          <div className="flex items-center gap-2">
            <img
              src="/asset/logowit.png"
              alt="MIZAN"
              className="rounded dark:hidden"
            />
               <img
              src="/asset/logodark.png"
              alt="MIZAN"
              className="rounded hidden dark:block"
            />
            {/* <span className="text-sm sm:text-base font-semibold tracking-wide text-[#0B1A3E] dark:text-white">
              MIZAN
            </span> */}
          </div>
          

          {/* Middle: nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="text-[#0B1A3E]/70 dark:text-white/80 hover:opacity-100">
              Features
            </Link>
            <Link href="#contact" className="text-[#0B1A3E]/70 dark:text-white/80 hover:opacity-100">
              Contact Us
            </Link>
            <Link href="#faq" className="text-[#0B1A3E]/70 dark:text-white/80 hover:opacity-100">
              FAQ
            </Link>
              <ThemePill />
            <LangPill />
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-2 sm:gap-3 dark:hidden">
          

            {/* store icons */}
            <a href="#" aria-label="Google Play" className="ml-1 opacity-90 hover:opacity-100">
              <img
                src="/asset/Framewit.png"
                alt="Play"
                className="h-5 w-5"
              />
            </a>
            <a href="#" aria-label="App Store" className="opacity-90 hover:opacity-100">
              <img
                src="/asset/Framewote2.png"
                alt="App Store"
                className="h-5 w-5"
              />
            </a>
          </div>

           <div className=" items-center gap-2 sm:gap-3 hidden dark:flex">
          

            {/* store icons */}
            <a href="#" aria-label="Google Play" className="ml-1 opacity-90 hover:opacity-100">
              <img
                src="/asset/Framedarks1.png"
                alt="Play"
                className="h-5 w-5"
              />
            </a>
            <a href="#" aria-label="App Store" className="opacity-90 hover:opacity-100">
              <img
                src="/asset/Framedarks2.png"
                alt="App Store"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
