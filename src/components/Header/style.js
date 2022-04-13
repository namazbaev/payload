import styled from "styled-components";
import { device } from "utils/responsive";
export const Container = styled.div`
  padding: 15px 0 15px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3b3b3b;
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Payload = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
`;
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Wrap = styled.div`
  color: #fff;
`;
export const SupportText = styled.p`
  margin: 0;
  font-size: 14px;
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const PhoneText = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
`;
export const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const IconButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 3px 10px 5px rgba(0, 0, 0, 0.2);
  border-radius: ${({ radius }) => radius || "10px"};
  justify-content: ${({ align }) => align || "space-evenly"};
  background-color: ${({ background }) => background || "#5a5859"};
  transition: all 0.2s ease;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${({ hovered }) => hovered || "var(--btn-hover-color)"};
  }

  @media ${device.tablet} {
    width: 45px;
    height: 45px;
  }
  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;
export const IconText = styled.span`
  color: #fff;
  font-size: 12px;
  @media ${device.tablet} {
    font-size: 10px;
  }
  @media ${device.mobile} {
    font-size: 9px;
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
`;
