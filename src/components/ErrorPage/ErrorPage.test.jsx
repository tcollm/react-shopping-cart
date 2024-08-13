import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
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

  it("navigates to home page when link is clicked", async () => {
    // create placeholder routes to ensure confidence in router without depending on home page implementation
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", {
      name: /you can go back to the home page by clicking here, though!/i,
    });
    await userEvent.click(link);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
