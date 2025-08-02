import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import Header from "../../src/components/header/header";
import { BrowserRouter } from "react-router";

describe("Header", () => {
  vi.mock("react-i18next", () => ({
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
  }));

  it("renders the header", () => {
    render(
      <BrowserRouter>
        <Header
          locale="es"
          onLocaleChange={() => {}}
          onThemeChange={() => {}}
          theme={false}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("header-component")).toBeInTheDocument();
    expect(screen.getByTestId("header-tabs")).toBeInTheDocument();
    expect(screen.getByTestId("language-select")).toBeInTheDocument();
    expect(screen.getByTestId("theme-switch")).toBeInTheDocument();
  });
});
