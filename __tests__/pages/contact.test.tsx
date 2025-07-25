import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contact from "../../src/pages/contact/contact";

describe("Contact", () => {
  it("renders Vite and React logos with correct links", () => {
    render(<Contact />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
  });

  it("renders the main title", () => {
    render(<Contact />);
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });
});
