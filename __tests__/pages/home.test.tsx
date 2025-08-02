import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Home from "../../src/pages/home";
import { BrowserRouter } from "react-router";

describe("Home", () => {
  it("renders the main title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByTestId("home-title")).toBeInTheDocument();
  });
});
