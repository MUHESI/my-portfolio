import styled from "styled-components";

export const Container = styled.div`
  // max-width: 1280px;
  width: 100%;
  margin: auto;
`;
export const Main = styled.div`
  border: none;
  padding-top: 70px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 130px;
  }
`;
