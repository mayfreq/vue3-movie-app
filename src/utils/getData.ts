import json from "@/data/movieList.json";

export interface Movie {
  imdbId: string;
  title: string;
  posterUrl: string;
  released: string;
  imdbRating: string;
  runtime: string;
}

export const getMovie = async () => {
  const movieList = [] as Movie[];
  let sayac = 0;

  for (const file of json) {
    const url = "http://www.omdbapi.com/?apikey=54b292b8&i=" + file.id;

    const response = await fetch(url, { method: "GET" });

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();

    movieList.push({
      imdbId: file.id,
      title: result.Title,
      posterUrl: result.Poster,
      released: result.Released,
      imdbRating: result.imdbRating,
      runtime: result.Runtime,
    });

    if (sayac === 10) break;
    else sayac++;
  }
  return movieList;
};
