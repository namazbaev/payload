import styled from 'styled-components';
import { ReactComponent as ArrowDown } from 'assets/icons/down-arrow.svg';
import { device } from 'utils/responsive';

export const ArrowDownIcon = styled(ArrowDown)`
  transition: all 0.3s ease;
  transform: ${({ active }) => active ? 'rotate(180deg)' : ''} ;
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: ${({ active }) => (active ? '#181C32' : '#7E8299')};
  position: relative;
  height: 60px;
  padding: 0px 12px;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(34, 37, 48, 0.08);

  @media ${device.tablet} {
    height: 40px;
    border-radius: 6px;
  }
`;

Dropdown.Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 9px;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 14px;
    margin-right: 5px;
  }
`;

Dropdown.Menu = styled.ul`
  min-width: 150px;
  position: absolute;
  top: 100%;
  ${({ position }) => (position && position === 'left'
    ? 'left: 0;' : position === 'right' ? 'right: 0;' : 'left: 0;')};
  border-radius: 8px;
  padding: 8px 0;
  margin: 4px 0 0 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 6px 12px 0 rgba(73,75,116, 0.16);
  display: ${({ active }) => (active ? 'block' : 'none')};
  z-index: 30;
  @media ${device.tablet} {
    min-width: 110px;
  }
`;

Dropdown.MenuItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  color: #181C32;
  line-height: 18px;
  padding: 12px;
  white-space: nowrap;
  transition: .2s ease-in;
  
  &:hover {
    background-color: #F8F8F8;
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 12px;
    padding: 6px;
  }
`;
