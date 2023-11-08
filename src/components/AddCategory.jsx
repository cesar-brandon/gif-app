import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";
import { addToLocalStorage } from "../lib/utils";
import useHidden from "../hooks/useHidden";

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const { isHidden } = useHidden();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    const existe = categories.find(
      (category) => category.toLowerCase() === inputValue.toLowerCase()
    );

    if (existe) return;

    setCategories([inputValue, ...categories]);
    addToLocalStorage(inputValue, []);
    setInputValue("");
  };

  return (
    <Card className={`lg:flex lg:items-center transition-all duration-300 
          ${isHidden ? "-translate-y-52 md:-translate-y-44 " : "translate-y-0"}`}>
      <CardHeader>
        <CardTitle>Gift App</CardTitle>
        <CardDescription>Buscar gifts</CardDescription>
      </CardHeader>
      <CardContent className="lg:pb-0">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="text"
              placeholder="Buscar gifts"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button type="submit">Agregar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCategory;
