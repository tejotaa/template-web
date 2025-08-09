import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Home from "@pages/home";

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
