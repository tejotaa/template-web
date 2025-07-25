import { type PropsWithChildren, useState } from "react";
import Header from "../components/header/header";
import { getLocalStorageLanguage } from "../utils/utils";
import i18n from "../../translation/index";

export function AgentLayout({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<string>(getLocalStorageLanguage());

  const handleLocaleChange = (selected: string) => {
    localStorage.setItem("lang", selected);
    setLocale(selected);
    i18n.changeLanguage(selected);
  };

  return (
    <>
      <Header onLocaleChange={handleLocaleChange} locale={locale} />
      {children}
    </>
  );
}
