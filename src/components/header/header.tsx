import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "@mui/material";
import { ThemeSwitch } from "@components/theme/themeSwitch";
import LanguageSelector from "@components/language/languageSelector";
import viteLogo from "/vite.svg";
import "./header.scss";

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function Header({
  onLocaleChange,
  onThemeChange,
  locale,
  theme,
}: {
  onLocaleChange: (selected: string) => void;
  onThemeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  locale: string;
  theme: boolean;
}) {
  const { t } = useTranslation();
  const [tabSelected, setTabSelected] = useState(useLocation().pathname);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setTabSelected(newValue);
      navigate(newValue, { replace: true });
    }
  };

  return (
    <div id="header" data-testid="header-component">
      <img src={viteLogo} className="logo" alt="Company logo" />

      <Tabs
        value={tabSelected}
        onChange={handleChange}
        centered
        aria-label="navigation tabs"
        data-testid="header-tabs"
      >
        <Tab value="/" label={t("home")} />
        <Tab value="/about" label={t("about")} />
        <Tab value="/contact" label={t("contact")} />
      </Tabs>

      <div className="right-side">
        <LanguageSelector value={locale} onChange={onLocaleChange} />
        <ThemeSwitch onChange={onThemeChange} checked={theme} />
      </div>
    </div>
  );
}
