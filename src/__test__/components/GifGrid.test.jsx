import React from "react";
import { render, screen } from "@testing-library/react";
import GiftGrid from "../../components/GifGrid";

// Mock de funciones necesarias
jest.mock("../../lib/utils");
jest.mock("../../helpers/getGifs");

describe("GiftGrid Component", () => {
  test("renders the component with no images", async () => {
    const category = "Test Category";
    const handlerRemove = jest.fn(); // Mock para la función handlerRemove

    render(<GiftGrid category={category} handlerRemove={handlerRemove} />);

    // Verifica que el título de la categoría se muestre
    const categoryTitle = screen.getByText(category);
    expect(categoryTitle).toBeInTheDocument();

    // Verifica que el contenedor de gifs esté vacío
    const gifsContainer = screen.getByTitle("gifs-container");
    expect(gifsContainer).toBeEmptyDOMElement();

    // Verifica que la función handlerRemove no haya sido llamada
    expect(handlerRemove).not.toHaveBeenCalled();
  });

  test("renders images when gifs are provided", async () => {
    const category = "Test Category";
    const handlerRemove = jest.fn(); // Mock para la función handlerRemove
    const gifsData = [
      { url: "url1", title: "gif1", id: "id1" },
      { url: "url2", title: "gif2", id: "id2" },
    ];

    // Simula que getFromLocalStorage retorna datos de gifs
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(JSON.stringify(gifsData));

    render(<GiftGrid category={category} handlerRemove={handlerRemove} />);

    // Verifica que el título de la categoría se muestre
    const categoryTitle = screen.getByText(category);
    expect(categoryTitle).toBeInTheDocument();

    // Verifica que el contenedor de gifs contenga las imágenes
    const gifsContainer = screen.getByTitle("gifs-container");
    expect(gifsContainer).not.toBeEmptyDOMElement();

    // Verifica que la función handlerRemove no haya sido llamada
    expect(handlerRemove).not.toHaveBeenCalled();

    // Verifica que la cantidad de imágenes sea correcta
    const gifImages = gifsContainer.querySelectorAll("img");
    expect(gifImages.length).toBe(2);
  });
});
