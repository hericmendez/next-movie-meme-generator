// pages/movieDetails/[id].tsx

import { GetServerSideProps } from "next";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { language, region } from "@/constants/app";
import { getMovieById } from "@/api";
import {
  BackdropWrapper,
  Card,
  Content,
  ExtraInfo,
  Footer,
  GenreBadge,
  GenreList,
  Info,
  Overview,
  PosterWrapper,
  Rating,
  Subtitle,
  Tagline,
  Title,
} from "./styles";
type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  name: string;
  logo_path?: string | null;
  origin_country: string;
};

type Country = {
  iso_3166_1: string;
  name: string;
};
// Tipos para os dados do movie
interface Movie {
  title: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genres: Genre[];
  overview: string;
  vote_average: number;
  production_countries: Country[];
  original_language: string;
  tagline: string;
  directors?: string[]; // caso os diretores sejam buscados via API de credits
  production_companies: ProductionCompany[];
}

// Tipo das props que a página irá receber
interface MovieDetailsProps {
  id: string; // Recebe o id do movie como string (você pode converter para number depois, se necessário)
}

export const getServerSideProps: GetServerSideProps<MovieDetailsProps> = async (
  context
) => {
  // Extrai o 'id' da URL usando context.params
  const { id } = context.params as { id: string };

  return {
    props: { id }, // Passa o id como prop para o componente
  };
};

const MovieDetails: FC<MovieDetailsProps> = ({ id }) => {
  const [movie, setmovie] = useState<Movie | null>(null);
  console.log(id);
  const url = getMovieById({ movie_id: id, language, region });

  useEffect(() => {
    const fetchmovie = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setmovie(data);
      console.log(data);
    };

    fetchmovie();
  }, [id]); // Executa a requisição sempre que o id mudar

  // Caso o movie não tenha sido encontrado
  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <Card>
      <BackdropWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </BackdropWrapper>
      <Content>
        <div style={{display:"flex", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginBottom: 30}}>
          <div>
            <Title>{movie.title}</Title>

            <Subtitle>Original: {movie.original_title}</Subtitle>

            <Info>Lançamento: {movie.release_date}</Info>
<br />
            <GenreList>
              {movie.genres.map((genre) => (
                <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
              ))}
            </GenreList>
          </div>
          <div style={{textAlign: 'center'}}>
          <PosterWrapper>
          <Image
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
          />
        </PosterWrapper>
          <Rating>⭐ {movie.vote_average.toFixed(1)}</Rating>

          </div>
 
        
        </div>
        <Tagline>{movie.tagline}</Tagline>

        <Overview>{movie.overview}</Overview>
        <ExtraInfo>
          {movie.directors && movie.directors.length > 0 && (
            <div>
              <strong>Diretor(es):</strong> {movie.directors.join(", ")}
            </div>
          )}
          <div>
            <strong>Produtora(s):</strong>{" "}
            {movie.production_companies
              .map((company) => company.name)
              .join(", ")}
          </div>
        </ExtraInfo>
        <Footer></Footer>
      </Content>
    </Card>
  );
};

export default MovieDetails;
