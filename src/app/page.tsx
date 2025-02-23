"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { API_KEY } from "../../API_KEY";
const Container = styled.div`
  text-align: center;
  padding: 80px 20px;
`;

const MovieCard = styled.div`
  background: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;
const excludedWordsPortuguese: string[] = [
  // Artigos definidos
  "o",
  "a",
  "os",
  "as",
  "e",
  "um",
  "uma",
  "uns",
  "umas",
  "ao",
  "aos",
  "à",
  "às",
  "da",
  "das",
  "do",
  "dos",
  "de",
  "na",
  "nas",
  "no",
  "nos",
  "pra",
  "pro",
  "para",
  "num",
  "nuns",
  "numa",
  "numas",
  "dum",
  "duns",
  "duma",
  "dumas",
];
interface Movie {
  title: string;
  meme_title: string;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
}

export default function Home() {
  const [movie, setMovie] = useState<Movie>();

  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [input, setInput] = useState<string>("");

  // Função para lidar com a mudança no input do input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value); // Atualiza o valor do estado
  };



  const generateMemeMovie = (mod: string, movieTitle: string): string => {
    /*   const randomMovie = movieList[Math.floor(Math.random() * movieList.length)]; */

    const myArr = movieTitle.split(" ");

    const replaceableWords: string[] = myArr.filter(
      (element: string) =>
        !excludedWordsPortuguese.includes(element.toLowerCase())
    );

    const rng =
      replaceableWords[Math.floor(Math.random() * replaceableWords.length)];

    const joined = myArr.join(" ");

    const newMovie = joined.replace(rng, mod);

    return newMovie;
  };
  const fetchTotalPages = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=vote_average.desc&vote_count.gte=1000&page=1`
    );
    const data = await response.json();
    setTotalPages(data.total_pages);
    console.log(totalPages);
  };

  useEffect(() => {
    fetchTotalPages();
  }, []);

  const fetchRandomMovie = async () => {
    if (!totalPages) return;

    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=vote_average.desc&vote_count.gte=1000&page=${randomPage}`
    );
    const data = await response.json();
    console.log("data ==> ", data);

    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length)];
    randomMovie.meme_title = generateMemeMovie(input, randomMovie.title);
    console.log("random movie", randomMovie);
    setMovie(randomMovie);
  };

  return (
    <>
      <Head>
        <title>
          {movie ? `${movie.title}` : "Gerador de filmes da quinta série"}
        </title>
        <meta
          name="description"
          content="Descubra um filme aleatório incrível!"
        />
      </Head>

      <Navbar />

      <Container>
        <h1>Gerador de filmes da quinta série</h1>
        <br />
        <div>
          <label htmlFor="meuInput">Digite algo: </label>
          <input
            id="meuInput"
            type="text"
            value={input} // Atributo que faz o input controlar o input do estado
            onChange={handleInputChange} // Atualiza o estado quando o input muda
          />
          <button onClick={fetchRandomMovie}>Gerar título</button>
        </div>
        <br />
        {movie ? (
          <MovieCard>
            <h1>{movie.meme_title}</h1>
            <span style={{ color: "#ccc" }}>{movie.title}</span>
            <p>
              <strong>Ano:</strong> {movie.release_date.split("-")[0]}
            </p>
            <br />
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <Link href="" style={{ color: "cyan" }}>
              Que filme é esse?
            </Link>
          </MovieCard>
        ) : (
          <p></p>
        )}
      </Container>
    </>
  );
}
