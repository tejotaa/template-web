import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { AgentLayout } from "@layout";

export default function Home() {
  const { t } = useTranslation();

  return (
    <AgentLayout>
      <Typography variant="h3" data-testid="home-title">
        {t("home")}
      </Typography>
    </AgentLayout>
  );
}
