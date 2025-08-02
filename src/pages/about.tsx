import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { AgentLayout } from "@layout";

export default function About() {
  const { t } = useTranslation();

  return (
    <AgentLayout>
      <Typography variant="h3" data-testid="about-title">
        {t("about")}
      </Typography>
    </AgentLayout>
  );
}
