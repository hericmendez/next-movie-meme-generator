import { useState, useCallback } from "react";
import { language, region } from "@/constants/app";
import { getTopRatedMovies } from "@/api";

interface Movie {
  title: string;
  meme_title: string;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
}

const useFetchRandomMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  // Função que busca o total de páginas e o filme aleatório
  const fetchMovieData = useCallback(async () => {
    const apiUrl = getTopRatedMovies({ language, region, page: "1" });
    try {
      // Obtém o total de páginas
      const responseTotalPages = await fetch(apiUrl);
      const dataTotalPages = await responseTotalPages.json();
      setTotalPages(dataTotalPages.total_pages);

      if (dataTotalPages.total_pages) {
        // Seleciona uma página aleatória
        const randomPage =
          Math.floor(Math.random() * dataTotalPages.total_pages) + 1;

        const apiUrlWithRandomPage = getTopRatedMovies({
          language,
          region,
          page: randomPage,
        });

        const responseRandomMovie = await fetch(apiUrlWithRandomPage);
        const dataRandomMovie = await responseRandomMovie.json();
        const randomMovie =
          dataRandomMovie.results[
            Math.floor(Math.random() * dataRandomMovie.results.length)
          ];

        setMovie(randomMovie);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do filme:", error);
    }
  }, []);

  return { movie, totalPages, fetchMovieData };
};

export default useFetchRandomMovie;
