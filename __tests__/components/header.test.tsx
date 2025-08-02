import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router";
import Header from "../../src/components/header/header";

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
