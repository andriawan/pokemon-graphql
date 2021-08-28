import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const WrapperSearchPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mediaQueries[1]} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ButtonSearch = `
  background-color: #3B4CCA;
  color: #FFFFFF;
  font-family: 'Poppins', 'Sans-Serif';
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  ${mediaQueries[1]} {
    margin-top: 0rem;
    margin-left: 1rem;
    width: 10rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
`;

export const SearchBoxPokemon = `
  border: 2px solid #CC0000;
  border-radius: 5px;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Poppins', 'Sans-serif';
  font-size: 16px;
  outline: #FF0000;
  letter-spacing: 0.3px;
  ${mediaQueries[1]} {
    width: 100%;
  }
`;