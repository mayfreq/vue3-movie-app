import json from "@/data/movieList.json";

export const getMovie = async () => {
  const movieList = [];
  let sayac = 0;

  for (const file of json) {
    const url = "http://www.omdbapi.com/?apikey=apikey&i=" + file.id;

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
  console.log(movieList);
  return movieList;
};
