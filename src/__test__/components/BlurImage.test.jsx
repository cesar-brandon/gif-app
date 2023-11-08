import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BlurImage from "../../components/BlurImage"; // Asegúrate de que la ruta sea correcta

describe("BlurImage 🟢", () => {
  it("renders an image with the correct initial classes", () => {
    render(<BlurImage src="example.jpg" alt="Example" />);

    const image = screen.getByRole("img");
    
    // Comprueba que isLoading sea verdadero inicialmente
    expect(image).toHaveClass("scale-105 blur-lg");
  });

  it("removes blur classes after image load", () => {
    render(<BlurImage src="example.jpg" alt="Example" />);
    const image = screen.getByRole("img");

    // Simula la carga de la imagen
    fireEvent.load(image);

    // Asegúrate de que las clases de desenfoque se han eliminado
    expect(image).toHaveClass("scale-100 blur-0");
  });
});
