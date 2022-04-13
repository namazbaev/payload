import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #85868a;
`;
export const Content = styled.div`
  width: 90%;
  padding: 40px 0 40px 0;
  height: 90%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #707173;
`;
export const Aside = styled.aside`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1.5px solid #868688;
`;
export const TopSection = styled.div`
  padding: 15px 0 30px;
  width: 85%;
  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid #868688;
`;
export const TextWrap = styled.div`
  margin-bottom: 20px;
`;
export const Text = styled.p`
  text-align: center;
  line-height: 25px;
  font-size: ${({ size }) => size || "14px"};
  color: ${({ color }) => color || "#a7a8aa"};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  text-transform: ${({ uppercase }) => (!uppercase ? uppercase : "uppercase")};
`;
export const BottomSection = styled.div`
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Wrap = styled.div`
  padding: 0 100px;
`;
export const Main = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Input = styled.input`
  width: 60%;
  height: 50px;
  margin-top: 15px;
  padding: 10px 30px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 24px;
`;
export const NumberList = styled.div`
  width: 36%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
export const Number = styled.button`
  width: 80px;
  height: 65px;
  background-color: #d7d7d7;
  margin-bottom: 15px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0 3px 10px 5px rgba(0, 0, 0, 0.2);
`;
export const Footer = styled.div`
  width: 100%;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  padding: 10px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;
  text-transform: uppercase;
  box-shadow: 0 0 0.5px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ isBack }) => (isBack ? "#808080" : "#00B9F5")};
`;