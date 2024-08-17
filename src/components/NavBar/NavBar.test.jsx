import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// import NavBar from "./NavBar";
import ShoppingPage from "../ShoppingPage/ShoppingPage";

describe("NavBar Component", () => {
  it("navigates to home page when link is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/shopping"]}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/shopping" element={<ShoppingPage />} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    await userEvent.click(homeLink);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
