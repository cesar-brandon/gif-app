import { useCallback, useEffect, useState } from "react";

const useFetchGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const getGifs = useCallback(async ({ keyword }) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    const res = await fetch(apiURL);
    const { data } = await res.json();

    const gifs = data.map((gif) => {
      const { id, title, images } = gif;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifs;
  }, []);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return { loading, gifs };
}

export default useFetchGifs;
