import { i18nRouterConfig } from "@/i18nRouterConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import GlobalProvider from "../../Providers";
import "../../styles/globals.css";

// 👇 استخدم الخطوط المطلوبة عبر next/font
import { Montserrat, Tajawal } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mizan",
  description: "Site Description",
  icons: { icon: "/next.svg" },
};

export function generateStaticParams() {
  return i18nRouterConfig.locales.map((locale) => ({ locale }));
}

function getFont(locale: string) {
  // عربي => Tajawal ، غير ذلك => Montserrat
  return locale.startsWith("ar") ? tajawal : montserrat;
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
        <GlobalProvider locale={locale}>{children}</GlobalProvider>
      </body>
    </html>
  );
}
