import "./footer.scss";
import { useTranslation } from "react-i18next";
import Icon from "@mui/material/Icon";
import { getYear } from "@utils/utils";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Divider />
      <div id="footer" data-testid="footer-component">
        <Icon color="primary" fontSize="small">
          copyright
        </Icon>
        <Typography variant="caption" color="textSecondary">
          {getYear()}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {t("footer.copyright")}
        </Typography>
      </div>
    </>
  );
}
