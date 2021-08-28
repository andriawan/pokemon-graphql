import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const CardPokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid black;
  margin-top: 5rem;
  margin-bottom: 5rem;
  ${mediaQueries[1]} {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`;

export const CardPokemonContent = styled.div`

`;