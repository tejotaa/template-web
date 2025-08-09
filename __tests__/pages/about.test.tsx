import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import About from "@pages/about";

describe("About", () => {
  it("renders the main title", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByTestId("about-title")).toBeInTheDocument();
  });
});
