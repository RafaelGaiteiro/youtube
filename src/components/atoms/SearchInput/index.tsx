import { useState } from "react";
import { Container, Input, MicrophoneButton, SearchButton } from "./styles";

export type SearchInputProps = {
  inputSelected: boolean;
};

export const SearchInput = () => {
  const [borderActivate, setBorderActivate] = useState<boolean>(false);

  return (
    <Container>
      <Input
        placeholder="Pesquisar"
        onFocus={() => setBorderActivate(true)} // Quando recebe o foco
        onBlur={() => setBorderActivate(false)} // Quando perde o foco
        inputSelected={borderActivate}
      />
      <SearchButton />
      <MicrophoneButton></MicrophoneButton>
    </Container>
  );
};
