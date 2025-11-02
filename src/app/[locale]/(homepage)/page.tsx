import {
  ClientComponent,
  LanguageChanger,
  ServerComponent,
  ThemeChanger,
  Footer
} from "@/components";
import HeaderBar from '@/components/HeaderBar';

import React from "react";
import Hero from "./_components/Hero";
import Client from "./_components/Clinet";
import Features from "./_components/Features";
function page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col">
      <HeaderBar locale={locale}/>

      <Hero locale={locale}/>
      <Client locale={locale}/>
      <Features locale={locale}/>
      <Footer locale={locale}/>
      {/* <div className="flex justify-between ">
        <LanguageChanger />
        <ThemeChanger />
      </div> */}
      {/* <ServerComponent locale={locale} />
      <ClientComponent /> */}
    </div>
  );
}

export default page;
