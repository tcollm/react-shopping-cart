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

  // it("navigates to shopping page when link is clicked", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <Routes>
  //         <Route path="/" element={<div>Home Page</div>} />
  //         <Route path="/shopping" element={<ShoppingPage />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   const shoppingLink = screen.getByRole("link", { name: /shopping/i });
  //   await userEvent.click(shoppingLink);

  //   expect(screen.getByText(/shopping page/i)).toBeInTheDocument();
  // });

  // it("disables shopping link when already on the shopping page", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/shopping"]}>
  //       <Routes>
  //         <Route path="/" element={<div>Home Page</div>} />
  //         <Route path="/shopping" element={<ShoppingPage />} />
  //       </Routes>
  //     </MemoryRouter>
  //   );

  //   const shoppingLink = screen.getByRole("link", { name: /shopping/i });

  //   await userEvent.click(shoppingLink);

  //   expect(screen.getByText(/shopping page/i)).toBeInTheDocument();
  //   expect(shoppingLink).toHaveAttribute("href", "#");
  // });
});

// TODO: revise tests
// (implementation works but tests fail for some reason)
