import { FC } from "react";
import { Card, CardImg, CardText } from "./styles";
import Link from "next/link";
import generateMemeMovie from "@/utils/generateMemeMovie";
import Modal from "../Modal";
import MovieDetailsCard from "./MovieDetailsPage/[id]";
interface Movie {
  id?: string;
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieCardProps {
  movie: Movie;
  mod: string;
}

const MovieCard: FC<MovieCardProps> = ({ movie, mod }) => {
  return (
    <Card>
      <CardText>
        <h1>{generateMemeMovie(mod, movie.title)}</h1>
        <span style={{ color: "#ccc" }}>
          {movie.title} ({movie.release_date.split("-")[0]})
        </span>
        <br />

        <br />
        <Modal
          data={movie}
          element={
            <Link href="" style={{ color: "cyan" }}>
              Que filme é esse?
            </Link>
          }
        >
          <div>
            <MovieDetailsCard id={String(movie.id)} />
          </div>
        </Modal>
        <br />
      </CardText>
      <CardImg>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </CardImg>
    </Card>
  );
};

export default MovieCard;
