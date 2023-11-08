import { useState } from "react";
import "./App.css";
import { GifGrid, AddCategory } from "./components";
import { Separator } from "./components/ui/separator";
import { getKeysFromLocalStorage, removeFromLocalStorage } from "./lib/utils";

function App() {
  const [categories, setCategories] = useState(
    getKeysFromLocalStorage(),
  );

  const handlerRemoveItem = (key) => () => {
    setCategories(categories.filter((category) => category !== key));
    removeFromLocalStorage(key)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full lg:w-auto top-0 fixed p-8 z-10 left-1/2 transform -translate-x-1/2">
        <AddCategory categories={categories} setCategories={setCategories} />
      </div>

      <div className="w-full h-[10rem] lg:h-[6rem]"></div>

      <ul className="pt-8">
        {categories.map((category) => (
          <div key={category}>
            <GifGrid category={category} handlerRemove={handlerRemoveItem} />
            <Separator className="mb-4" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
