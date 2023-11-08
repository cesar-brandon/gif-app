import { addToLocalStorage } from "../lib/utils";

export const getGifs = async ({ keyword }) => {
  // const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=gE96yMvm9uppFwiCIwSU7j3NBUtwl3MG&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  const res = await fetch(apiURL);
  const { data } = await res.json();

  const gifs = data.map((gif) => {
    const { id, title, images } = gif;
    const { url } = images.downsized_medium;
    return { id, title, url };
  });
  addToLocalStorage(keyword, gifs);
  return gifs;
}
