import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import About from "../../src/pages/about";
import { BrowserRouter } from "react-router";

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
