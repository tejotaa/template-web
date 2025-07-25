import "./header.scss";
import { NavLink } from "react-router";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export default function Header({
  onLocaleChange,
  locale,
}: {
  onLocaleChange: (selected: string) => void;
  locale: string;
}) {
  const { t } = useTranslation();

  return (
    <>
      <nav>
        <NavLink to="/" end>
          {t("home")}
        </NavLink>
        <NavLink to="/about" end>
          {t("about")}
        </NavLink>
        <NavLink to="/contact">{t("contact")}</NavLink>
      </nav>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={locale}
        label="Language"
        onChange={(event) => onLocaleChange(event.target.value)}
      >
        <MenuItem value={"en"}>English</MenuItem>
        <MenuItem value={"es"}>Spanish</MenuItem>
        <MenuItem value={"fr"}>French</MenuItem>
      </Select>
    </>
  );
}
