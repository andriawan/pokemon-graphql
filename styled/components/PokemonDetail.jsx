import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const PokemonDetailWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const PokemonDetailContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #B3A125;
  border-radius: 10px;
  padding: 1rem;
`;

export const WrapperExperience = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #FF0000;
  color: white;
  border-radius: 100px;
  height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
`;

export const WrapperWeightHeight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperWeight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #3B4CCA;
  color: white;
  border-radius: 100px;
  height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
`;

export const WrapperHeight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: #3B4CCA;
  color: white;
  border-radius: 100px;
  height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
`;

export const WrapperDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  ${mediaQueries[0]} {
    flex-direction: row;
  }
`;

export const WrapperAbilities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperContentAbilities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentAbilities = styled.div`
  display: flex;
  background-color: #CC0000;
  color: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 100px;
`;

export const WrapperMoves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperContentMoves = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries[1]} {
    flex-direction: row;
  }
`;

export const ContentMoves = styled.div`
  display: flex;
  background-color: #3B4CCA;
  color: white;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 100px;
`;

export const WrapperTypes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperContentTypes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentTypes = styled.div`
  display: flex;
  background-color: #FFDE00;
  color: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 100px;
`;

export const WrapperSpecies = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperContentSpecies = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentSpecies = styled.div`
  display: flex;
  background-color: #B3A125;
  color: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 100px;
`;

export const TextTitle = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFDE00;
  border-radius: 5rem;
  color: #FFFFFF;
`;

export const Bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;