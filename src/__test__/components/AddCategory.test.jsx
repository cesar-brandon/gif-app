import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddCategory from "../../components/AddCategory"; // Asegúrate de que la ruta sea correcta

describe("AddCategory 🟢", () => {
  it("renders the component with the correct elements", () => {
    render(<AddCategory categories={[]} setCategories={() => {}} />);

    // Asegúrate de que los elementos esperados estén en el DOM
    const cardTitle = screen.getByText("Gift App");
    const cardDescription = screen.getByText("Buscar gifts");
    const inputElement = screen.getByPlaceholderText("Buscar gifts");
    const addButton = screen.getByText("Agregar");

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("handles input changes correctly", () => {
    render(<AddCategory categories={[]} setCategories={() => {}} />);

    const inputElement = screen.getByPlaceholderText("Buscar gifts");
    fireEvent.change(inputElement, { target: { value: "New Category"} });  
    expect(inputElement).toHaveValue("New Category");
  });

  it("submits the form correctly", () => {
    const setCategoriesMock = jest.fn();
    render(<AddCategory categories={[]} setCategories={setCategoriesMock} />);

    const inputElement = screen.getByPlaceholderText("Buscar gifts");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(inputElement, { target: { value: "New Category" } });
    fireEvent.click(addButton);

    // Asegúrate de que se haya llamado la función setCategories con el nuevo valor
    expect(setCategoriesMock).toHaveBeenCalledWith(["New Category"]);
  });
});
