import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router";
import LanguageSelector from "@components/language/languageSelector";

describe("LanguageSelector", () => {
  const onChangeMock = vi.fn();
  vi.mock("react-i18next", () => ({
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
  }));

  it("renders the language selector", () => {
    render(
      <BrowserRouter>
        <LanguageSelector value="es" onChange={onChangeMock} />
      </BrowserRouter>
    );
    expect(screen.getByTestId("language-select")).toBeInTheDocument();
    expect(screen.getByTestId("language-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("language-dialog")).not.toBeInTheDocument();
  });
});
