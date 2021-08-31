import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const CardPokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;
  max-width: 265px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  ${mediaQueries[1]} {
    max-width: 536px;
  }
  ${mediaQueries[3]} {
    max-width: 804px;
  }
`;

export const CardPokemonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #FFDE00;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 200px;
  padding: 1rem;
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #B3A125;
`;

export const Loader = keyframes`
  to {
    transform: rotate(360deg);
  }
`;