import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ShoppingPage from "../ShoppingPage/ShoppingPage";
import { ItemCountProvider } from "../Items/ItemCountContext";
import { ItemsProvider } from "../Items/ItemsContext";
import NavBar from "./NavBar";

// item object:
// {
//   id:1,
//   title:'...',
//   price:'...',
//   category:'...',
//   description:'...',
//   image:'...'
// },

const mockItems = [
  {
    id: 0,
    title: "0Title",
    price: 10.277,
    category: "null",
    description: "About item 0",
    image: "null",
  },
  {
    id: 1,
    title: "1Title",
    price: 32.41,
    category: "null",
    description: "About item 1",
    image: "null",
  },
  {
    id: 2,
    title: "2Title",
    price: 67.701,
    category: "null",
    description: "About item 2",
    image: "null",
  },
];

// TODO: fix tests / component errors
// (website seems to work correctly but tests are failing)

describe("NavBar Component", () => {
  it("navigates to home page when link is clicked", async () => {
    render(
      // TODO: pass use items
      <ItemsProvider value={{ items: mockItems, error: null }}>
        <MemoryRouter initialEntries={["/shopping"]}>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/shopping" element={<ShoppingPage />} />
          </Routes>
        </MemoryRouter>
      </ItemsProvider>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    await userEvent.click(homeLink);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("displays the correct item count after adding items", async () => {
    render(
      <MemoryRouter initialEntries={["/shopping"]}>
        <ItemCountProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="shopping" element={<ShoppingPage />} />
          </Routes>
        </ItemCountProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/cart \(0\)/i)).toBeInTheDocument();

    const addButton = screen.getAllByText(/\+ add/i)[0];
    await userEvent.click(addButton);
    await userEvent.click(addButton);

    expect(screen.getByText(/cart \(2\)/i)).toBeInTheDocument();
  });
});
