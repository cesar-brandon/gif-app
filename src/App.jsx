import { useState } from "react";
import "./App.css";
import { GifGrid, AddCategory } from "./components";

function App() {
  const [categories, setCategories] = useState([
    "My Neighbor Totoro",
    "Ponyo",
    "Studio Ghibli",
  ]);

  return (
    <>
      <div className="top-0 left-0 w-full fixed p-8 z-10">
        <AddCategory categories={categories} setCategories={setCategories} />
      </div>

      <div className="w-full h-[10rem] md:h-[6rem]"></div>
      
      <ul className="pt-8">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
}

export default App;
