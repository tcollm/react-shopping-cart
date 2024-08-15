import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShoppingPage from "./ShoppingPage";
import { MemoryRouter } from "react-router-dom";

describe("Shopping Page component", () => {
  it("renders correct heading", () => {
    // wrap page in mem router to allow links to work
    render(
      <MemoryRouter>
        <ShoppingPage />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(/shopping/i);
  });
});
