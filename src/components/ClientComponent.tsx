"use client";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

function ClientComponent() {
  const session = useSession();
  const { t } = useTranslation("homepage");
  console.log("session", session);

  return <div>{t("client_component.title")}</div>;
}

export default ClientComponent;
