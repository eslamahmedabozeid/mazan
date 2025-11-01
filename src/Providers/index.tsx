import initTranslations from "@/app/i18n";
import ClientComponentsTranslationsProvider from "./client-components-translations-provider";
import ThemeProvider from "./theme-provider";
import TanStackQueryProvider from "./tan-stack-query-provider";
import { Toaster } from "@/components/ui/sonner";
import ClientComponentsAuthSessionProvider from "./client-components-auth-session-provider";

const i18nNamespaces = ["homepage"];

export default async function GlobalProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ClientComponentsTranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <TanStackQueryProvider>
            <ClientComponentsAuthSessionProvider>
              {children}
            </ClientComponentsAuthSessionProvider>
          </TanStackQueryProvider>
          <Toaster />
        </ClientComponentsTranslationsProvider>
      </ThemeProvider>
    </>
  );
}
