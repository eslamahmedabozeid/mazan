import { i18nRouterConfig } from "@/i18nRouterConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import GlobalProvider from "../../Providers";
import "../../styles/globals.css";

const inter = Inter({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site Title",
  description: "Site Description",
  icons: {
    icon: "/next.svg",
  },
};

export function generateStaticParams() {
  return i18nRouterConfig.locales.map((locale) => ({ locale }));
}

function getFont(locale: string) {
  return locale.startsWith("ar") ? ibmPlexSansArabic : inter;
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const font = getFont(locale);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={font.className}>
        <GlobalProvider locale={locale}>{children}</GlobalProvider>{" "}
      </body>
    </html>
  );
}
