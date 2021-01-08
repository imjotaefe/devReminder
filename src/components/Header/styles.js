import styled from "styled-components";
import { colors } from "../../utils";
import background from "../../assets/images/background.png";

export const Container = styled.div`
  background-color: ${colors.dark_1};
  display: flex;
  justify-content: center;
  height: 50vh;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-image: url(${background});
  background-size: contain;
`;

export const Title = styled.p`
  color: ${colors.white};
  font-size: 4.5em;
  font-weight: 700;
  margin-bottom: 0px;
`;

export const SubTitle = styled.p`
  color: ${colors.white};
  font-size: 1.5em;
  font-weight: 500;
`;
