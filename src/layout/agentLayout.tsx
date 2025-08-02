import { type PropsWithChildren, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import i18n from "@translation";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { getLocalStorageLanguage, getLocalStorageTheme } from "@utils/utils";
import "./agentLayout.scss";

export function AgentLayout({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<string>(getLocalStorageLanguage());
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    getLocalStorageTheme()
  );

  const handleLocaleChange = (selected: string) => {
    localStorage.setItem("lang", selected);
    setLocale(selected);
    i18n.changeLanguage(selected);
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const theme = event.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsDarkTheme(theme === "dark" ? true : false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#222222",
      },
      primary: {
        main: "#ffffff",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#fefefeff",
      },
      primary: {
        main: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <div id="agent-layout" data-testid="agent-layout">
        <Header
          onLocaleChange={handleLocaleChange}
          locale={locale}
          onThemeChange={handleThemeChange}
          theme={isDarkTheme}
        />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
