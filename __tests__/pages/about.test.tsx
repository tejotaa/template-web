import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../../src/pages/about/about";

describe("About", () => {
  it("renders Vite and React logos with correct links", () => {
    render(<About />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
  });

  it("renders the main title", () => {
    render(<About />);
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });
});
