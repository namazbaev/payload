import { device } from "utils/responsive";
import styled, { css } from "styled-components";
import PayImg from "assets/images/cards/payinfo.svg";

const infoCommon = css`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;
export const Div = styled.div`
  height: 80vh;
  display: ${({ isShow }) => (isShow ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-between;
`;
export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  margin-top: 30px;
  @media ${device.tablet} {
    width: 350px;
    margin-top: 8px;
  }
`;
export const ImageWrap = styled.div`
  width: 205px;
  height: 205px;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 135px;
    height: 135px;
  }
`;
export const Image = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
  background-size: 100%;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${PayImg});
`;
export const Formatting = styled.span`
  width: 100%;
  height: 96px;
  display: block;
  color: #3d3d4b;
  font-size: 40px;
  margin-top: 20px;
  font-weight: 700;
  line-height: 64px;
  padding: 16px 20px 16px 24px;
  border: 2px solid #33baff;
  border-radius: var(--card-brd-radius);
  @media ${device.tablet1} {
    height: 70px;
    font-size: 36px;
    margin-top: 30px;
    line-height: 56px;
    padding: 16px 100px 16px 24px;
  }
  @media ${device.tablet} {
    width: 100%;
    height: 50px;
    font-size: 22px;
    margin-top: 10px;
    line-height: 16px;
    border-radius: 4px;
    padding: 16px 0 16px 20px;
  }
`;
export const Hr = styled.hr`
  border: 0;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--line-color);
  @media ${device.tablet} {
    margin-top: 14px;
    margin-bottom: 10px;
  }
`;
export const DataInfo = styled.div``;
export const DataInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media ${device.tablet} {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
export const Label = styled.label`
  color: #5b5b5e;
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;
export const FIO = styled.span`
  ${infoCommon};
  color: #132447;
`;
export const Footer = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
  }
`;
export const FooterBtn = styled.button`
  border: none;
  min-width: 201px;
  min-height: 64px;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.04em;
  outline: none;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  border-radius: var(--card-brd-radius);
  background-color: ${({ color }) => color || "#D8D8D8"};
  &:hover {
    transition: 0.3s;
    background-color: ${({ hoveredColor }) => hoveredColor || "#BFBEBE"};
  }
  &:active {
    transition: 0.2s;
    background-color: #a1a1a1;
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }
  @media ${device.tablet1} {
    min-width: 180px;
    min-height: 55px;
    padding: 8px 16px;
    font-size: 22px;
    line-height: 30px;
    border-radius: var(--card-min-brd-radius);
  }
  @media ${device.tablet} {
    min-width: 130px;
    min-height: 36px;
    padding: 8px 14px;
    font-size: 18px;
    line-height: 20px;
    border-radius: var(--card-min-brd-radius);
  }
`;
export const BtnText = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.04em;
  pointer-events: none;
  @media ${device.tablet1} {
    font-size: 22px;
    line-height: 30px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 20px;
  }
`;
