import { mediaQueries } from '../Global';
import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQueries[1]} {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`;

export const HomeContent = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;