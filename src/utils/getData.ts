import json from "@/data/movieList.json";

export interface TMovie {
  imdbId: string;
  title: string;
  posterUrl: string;
  released: string;
  imdbRating: string;
  runtime: string;
}

export const getMovie = async (lastId: number, count: number) => {
  const movieList = [] as TMovie[];
  let breakPoint = 1;
  let state = false;

  for (const file of json) {
    if (Number(file.id) === lastId) state = true;

    if (state) {
      const url = "http://www.omdbapi.com/?apikey=apikey&i=" + file.imdbId;

      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const result = await response.json();

      movieList.push({
        imdbId: file.imdbId,
        title: result.Title,
        posterUrl: result.Poster,
        released: result.Released,
        imdbRating: result.imdbRating,
        runtime: result.Runtime,
      });

      if (breakPoint === count) {
        break;
      } else breakPoint++;
    }
  }
  return movieList;
};
