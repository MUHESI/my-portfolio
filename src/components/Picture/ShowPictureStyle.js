import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  border: 2px solid #ff622e;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.15);
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
  }
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  width: 150px;
  margin: 0 10px;
  border-radius: 50px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(270deg, #ff622e 0%, #b133ff 100%);
  cursor: pointer;
  transition: 0.5s ease;
  overflow: hidden;
  opacity: 0.8;
  &:hover {
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
  }
`;

export const ButtonLink = styled.a`
  border: none;
  padding: 15px 30px;
  width: 150px;
  // margin: 0 10px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.3em;
  // padding: 0 10px;
  color: #fff;
  background: linear-gradient(270deg, #ff622e 0%, #b133ff 100%);
  cursor: pointer;
  transition: 0.5s ease;
  overflow: hidden;
  opacity: 0.8;
  &:hover {
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
  }
`;

export const Div1 = styled.div`
  flex: 100%;
  textalign: center;
  display: flex;
  flex: wrap;
  justify-content: center;
  align-items: center;
`;


export const ButtonLink2 = styled.a`
  border: none;
  padding: 7px 15px;
  // width: 150px;
  // margin: 0 10px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.3em;
  // padding: 0 10px;
  color: #fff;
  background: linear-gradient(270deg, #ff622e 0%, #b133ff 100%);
  cursor: pointer;
  transition: 0.5s ease;
  overflow: hidden;
  opacity: 0.8;
  &:hover {
    transition: 0.3s;
    opacity: 1;
    cursor: pointer;
  }
`;
