import styled from 'styled-components';
import { colors } from '../../utils';

export const Container = styled.div`
  background-color: ${colors.fullDark};
  display: flex;
  justify-content: center;
  height: 50vh;
  padding-top: 80px;
`;

export const Title = styled.p`
  color: ${colors.white};
  font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 35px;
  font-weight: 700;
`;

