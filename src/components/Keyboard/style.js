import styled from "styled-components";
import { device } from "utils/media/responsive";
import { ReactComponent as Shift } from 'assets/icons/shift.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

export const ShiftIcon = styled(Shift)`
    width: 20px;
    height: 50px;
`
export const Delete = styled(DeleteIcon)`
    width: 38px;
    height: 50px;
    @media ${device.tablet} {
        width: 24px;
    }
`
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding }) => (padding || '0 10px')};
`;
export const Row = styled.section`
  display: flex;
  line-height: 50px;
  margin: 0 auto 3px;
  & :not(:last-child) {
    margin-right: 4px;
  }
  @media ${device.tablet} {
    & :not(:last-child) {
      margin-right: 1px;
    }
    margin: 0 auto 1px;
    line-height: 20px;
  }
`;
export const Key = styled.div`
  height: 70px;
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
  text-transform: ${({ size }) => size ? 'uppercase' : 'lowercase'};
  &:active {
      border-color: #2D94C9;
  }
  @media ${device.tablet} {
    height: 40px;
    border: 1.5px solid rgba(0, 0, 0, 0.1);
    font-size: 20px;
  }
`;
