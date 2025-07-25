import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Home from "../../src/pages/home/home";
import { BrowserRouter } from "react-router";

describe("Home", () => {
  it("renders Vite and React logos with correct links", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
  });

  it("renders the main title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
