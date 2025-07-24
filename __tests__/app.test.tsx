import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("renders Vite and React logos with correct links", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");
  });

  it("renders the main title", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("renders the counter button with initial value", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /count is 0/i })
    ).toBeInTheDocument();
  });

  it("increments the counter when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  it("renders the docs message", () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});
