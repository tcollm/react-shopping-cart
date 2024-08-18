import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFetchItems from "./useFetchItems";

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: "Test Item 1", price: 10 },
          { id: 2, title: "Test Item 2", price: 20 },
        ]),
    })
  )
);

describe("useFetchItems", () => {
  it("fetches and sets items on successful response", async () => {
    const { result } = renderHook(() => useFetchItems());

    // initially everything should be empty
    expect(result.current.items).toEqual([]);
    expect(result.current.error).toBeNull();

    await waitFor(() => {});

    expect(result.current.items).toHaveLength(2);
    expect(result.current.items[0].title).toBe("Test Item 1");
    expect(result.current.items[1].title).toBe("Test Item 2");
    expect(result.current.error).toBeNull();
  });

  it("sets an error if the fetch fails", async () => {
    window.fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    const { result } = renderHook(() => useFetchItems());

    await waitFor(() => {});

    expect(result.current.error).toBe("API is down");
    expect(result.current.items).toEqual([]);
  });
});
