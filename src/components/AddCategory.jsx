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

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

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
    setInputValue("");
  };

  return (
    <Card className="md:flex md:items-center">
      <CardHeader>
        <CardTitle>Gift App</CardTitle>
        <CardDescription>Buscar gifts</CardDescription>
      </CardHeader>
      <CardContent className="md:pb-0">
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
