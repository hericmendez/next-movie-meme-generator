"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

import useFetchRandomMovie from "@/hooks/useFetchRandomMovies";
import { GitHub, Facebook, LinkedIn, Email } from "@mui/icons-material";
import MovieCard from "@/components/MovieCard";
import {
  Button,
  Container,
  Content,
  Footer,
  FooterIcons,
  FooterText,
  IconButton,
  Input,
  InputDiv,
  Select,
  Text,
  Title,
} from "./styles";

export default function HomePage() {
  const { movie, fetchMovieData } = useFetchRandomMovie();
  console.log("movie ==> ", movie);
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <div>
          <Title>Gerador de Filmes da Qunta Série</Title>
          <Text>
            Digite uma palavra para substituir parte de um título aleatório de
            filme, e veja o resultado.
          </Text>
          <Text>E talvez descubra um filme incrível no processo!</Text>
        </div>
        <InputDiv>
          <Input
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            required={true}
            placeholder="Digite algo..."
          />
          <Select>
            <option value="">Selecione a categoria</option>
            <option disabled value="">
              Nada aqui por enquanto...
            </option>
          </Select>
          <Button onClick={() => inputValue && fetchMovieData()}>
            GERAR TÍTULO!
          </Button>
        </InputDiv>
        {/* Seção 2/3 */}
        {!movie ? (
          <div></div>
        ) : !movie ? (
          <div></div>
        ) : (
          <MovieCard mod={inputValue} movie={movie} />
        )}{" "}
        {/* o erro está na prop movie */}
      </Content>

      <Footer>
        <FooterText>
          <span>Footer description here</span>
          <span>© 2011 John Doe</span>
        </FooterText>

        <FooterIcons>
          <IconButton>
            <GitHub color="secondary" />
          </IconButton>
          <IconButton>
            <Facebook color="secondary" />
          </IconButton>
          <IconButton>
            <LinkedIn color="secondary" />
          </IconButton>
          <IconButton>
            <Email color="secondary" />
          </IconButton>
        </FooterIcons>
      </Footer>
    </Container>
  );
}
