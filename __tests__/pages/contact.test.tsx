import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Contact from "../../src/pages/contact";
import { BrowserRouter } from "react-router";

describe("Contact", () => {
  it("renders the main title", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    expect(screen.getByTestId("contact-title")).toBeInTheDocument();
  });
});
