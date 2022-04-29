import styled, { css } from "styled-components";
import { ReactComponent as Shift } from 'assets/icons/shift.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { device } from "utils/responsive";
const keyCommon = css`
  height: 80px;
  color: #000;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  font-size: 30px;
  background-color: #fff;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.1);
  flex: ${({ flex }) => flex ? flex : 1};
  &:active {
      border-color: #2D94C9;
  }
  @media ${device.tablet} {
    height: 60px;
    font-size: 24px;
  }
`;
export const ShiftIcon = styled(Shift)`
    width: 20px;
    height: 50px;
`
export const Delete = styled(DeleteIcon)`
    width: 30px;
    height: 50px;
`
export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
`;
export const Row = styled.section`
  display: flex;
  line-height: 50px;
  margin: 0 auto 3px;
  & :not(:last-child) {
    margin-right: 5px;
  }
`;
export const Key = styled.div`
    ${keyCommon}
  text-transform: ${({ size }) => size ? 'uppercase' : 'lowercase'};
`;
