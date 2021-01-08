import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  background-color: ${colors.dark_1};
  display: flex;
  justify-content: center;
  height: 30vh;
  position: relative;
  bottom: 0;
`;

export const Title = styled.p`
  color: ${colors.white};
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const SubTitle = styled.p`
  color: ${colors.white};
  font-size: 0.9em;
  font-weight: 500;
  max-width: 50%;
`;

export const CopyRightContainer = styled.div`
  background-color: ${colors.dark_4};
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const CopyRight = styled.p`
  color: ${colors.white};
  font-size: 0.9em;
  font-weight: 100;
  margin: 0px;
  padding: 0px;
`;
