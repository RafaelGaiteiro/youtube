import { ReactNode } from "react";
import { Container } from "./styles";
import { Header } from "../../atoms/Header";

type TemplateMovieProps = {
  children: ReactNode;
};

export const TemplateMovie = ({ children }: TemplateMovieProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
