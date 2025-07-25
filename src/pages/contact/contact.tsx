import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./contact.scss";
import { AgentLayout } from "../../layout/agentLayout";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <AgentLayout>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("contact")}</h1>
    </AgentLayout>
  );
}
