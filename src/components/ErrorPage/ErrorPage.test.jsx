import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

describe("Error Page component", () => {
  it("renders correct heading", () => {
    // wrap page in mem router to allow links to work
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      /Oh no, this route doesn't exist!/i
    );
  });
});
