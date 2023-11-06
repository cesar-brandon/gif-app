import useFetchGifs from "../hooks/useFetchGifs";
import BlurImage from "./BlurImage";

const GiftGrid = ({ category }) => {
  const { gifs } = useFetchGifs({ keyword: category });

  return (
    <li className="mb-8">
      <h3 className="font-semibold mb-4 text-xl">{category}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4 relative z-0">
        {
          gifs.map(({ url, id }) => (
            <div key={id} className="rounded-xl h-[10rem] w-full overflow-hidden">
              <BlurImage
                src={url}
                alt="Gif"
              />
            </div>
          ))
        }
      </div>
    </li>
  );
};

export default GiftGrid;
