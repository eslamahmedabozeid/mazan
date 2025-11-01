import initTranslations from "@/app/i18n";
import { auth } from "@/auth";

async function ServerComponent({ locale }: { locale: string }) {
  const session = await auth();
  const { t } = await initTranslations(locale, ["homepage"]);
  console.log("session", session);

  return <div>{t("server_component.title")}</div>;
}

export default ServerComponent;
