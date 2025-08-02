import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Contact from "../../src/pages/contact";

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
