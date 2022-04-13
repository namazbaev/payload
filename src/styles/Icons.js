import Beeline from "assets/icons/russia.png";
import styled, { css } from "styled-components";

const IconCommon = css`
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
`;
export const Icon = styled.img.attrs(({ src }) => ({ src: src || "" }))`
  ${IconCommon}
`;
export const BeelineIcon = styled.div`
  background-image: url(${Beeline});
`;
export const Image = styled.img``;
