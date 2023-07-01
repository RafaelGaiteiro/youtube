import { styled } from "styled-components";
import { SearchInputProps } from ".";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input<SearchInputProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 15px;
  font-weight: 500;
  color: #858585;
  caret-color: white; // Barrinha que pisca para digitar

  background-color: #121212;
  border: solid 1px ${(props) => (props.inputSelected ? "#3ea6ff" : "#313131")};
  border-radius: 40px 0 0 40px;

  width: 550px;
  height: 43px;
  padding: 0 0 0 15px;

  box-shadow: 1px, 1px, 1px, 1px, rgba(0, 0, 0, 0.1);
`;

export const SearchButton = styled.button`
  border: solid 1px #313131;
  border-radius: 0 40px 40px 0;

  background-color: #3d3d3d;
  width: 65px;
  height: 43px;
`;

export const MicrophoneButton = styled.div``;
