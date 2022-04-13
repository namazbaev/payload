import styled from "styled-components";
import { device } from "utils/responsive";
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';

export const Logo = styled(LogoIcon)`
  width: 150px;
  height: 50px;
  cursor: pointer;
  @media ${device.tablet} {
    width: 120px;
    height: 40px;
  }
`
export const Container = styled.div`
  padding: 36px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 18px 0;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Payload = styled.h1`
  margin: 0;
  color: var(--black);
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
export const Drop = styled.span`
  width: 2px;
  height: 65px;
  margin: 0 24px;
  background-color: var(--line-color);
  @media ${device.tablet} {
    height: 50px;
    margin: 0 16px;
  }
`
export const TerminalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Wrap = styled.div`
  color: #fff;
`;
export const SupportText = styled.p`
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.04em;
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const Number = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--black1);
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
`;
export const Terminal = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  color: var(--black);
  letter-spacing: 0.04em;

  @media ${device.tablet} {
    line-height: 20px;
  }
`
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
`;
