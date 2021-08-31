import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const WrapperSuccess = styled.div`
  position: absolute;
  display: flex;
  border-left: 5px solid #39C16C;
  left:0;
  width: 16rem;
  z-index: 50;
  background-color: #D2E190;
`;

export const SectionSuccess = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextDescriptionSuccess = `
  font-size: 14px;
  color: #39C16C;
  padding: 5px;
  text-align: left;
`;

export const WrapperFailed = styled.div`
  position: absolute;
  display: flex;
  border-left: 5px solid #FF7B7B;
  left:0;
  width: 16rem;
  z-index: 50;
  background-color: #FFBABA;
`;

export const SectionFailed = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextDescriptionFailed = `
  font-size: 14px;
  color: #FF7B7B;
  padding: 5px;
  text-align: left;
`;