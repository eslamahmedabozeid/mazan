export const i18nRouterConfig: {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
  serverSetCookie: "always" | "if-empty" | undefined;
} = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  prefixDefault: false,
  serverSetCookie: "always",
};
