import { ReactNode } from "react";
import { Container } from "./styles";
import { Header } from "../../organisms/Header";
import { Movie } from "../../atoms/Movie";

type TemplateMovieProps = {
  children: ReactNode;
};

export const TemplateMovie = ({ children }: TemplateMovieProps) => {
  return (
    <Container>
      <Header />
      <Movie />
      {children}
    </Container>
  );
};
