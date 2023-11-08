import { X } from "lucide-react";
import BlurImage from "../components/BlurImage";
import { getFromLocalStorage } from "../lib/utils";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GiftGrid = ({ category, handlerRemove }) => {

  const [gifs, setGifs] = useState(getFromLocalStorage(category) || []);

  useEffect(() => {
    if (gifs.length === 0) {
      getGifs({ keyword: category }).then((gifs) => {
        setGifs(prevGifs => [...prevGifs, ...gifs]);
      });
    }
  }, [category]);

  if (gifs.length === 0) return null;

  return (
    <li className="relative group/grid mb-8">
      <h3 className="font-semibold mb-4 text-xl">{category}</h3>
      <X
        className="absolute top-3 right-0 -mt-2 -mr-2 p-[0.2rem] opacity-0 group-hover/grid:opacity-100 cursor-pointer
          transition-opacity duration-300 ease-in-out bg-red-100 rounded-md text-red-500"
        onClick={handlerRemove(category)}
      />

      <div title="gifs-container" className="md:grid md:grid-cols-container gap-4 relative z-0">
        {
          gifs.map(({ url, title, id }) => (
            <div key={id} className="group/gif relative rounded-xl h-[10rem] w-full overflow-hidden">
              <BlurImage
                src={url}
                alt={title}
              />
              <div className="absolute m-2 p-2 bottom-0 left-0 bg-white rounded-md opacity-0 
                transition-opacity duration-300 ease-in-out group-hover/gif:opacity-100">
                <p className="line-clamp-1">{title}</p>
              </div>
            </div>
          ))
        }
      </div>
    </li>
  );
};

export default GiftGrid;
