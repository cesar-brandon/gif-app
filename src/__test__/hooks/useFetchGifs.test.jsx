import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../hooks/useFetchGifs";

describe("useFetchGifs 🟣", () => {
  test("must return to the initial state", () => {
    const { result } = renderHook(() => useFetchGifs({ keyword: "One Punch" }));

    const { gifs } = result.current;
    expect(gifs.length).toBe(0); // Verificar que el arreglo de gifs esté vacío.
  });

  test("should return a series of images and load", async () => {
    const { result } = renderHook(() => useFetchGifs({ keyword: "IT" }));

    await waitFor(() => {
      const { gifs, loading } = result.current;
      expect(gifs.length).toBeGreaterThan(9); // Verificar que haya gifs en el arreglo.
      expect(loading).toBe(false); // Verificar que el loading esté en false.
    });
  });
});
