import styled from 'styled-components';
import { ReactComponent as ArrowDown } from 'assets/icons/down-arrow.svg';

export const ArrowDownIcon = styled(ArrowDown)``;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? '#181C32' : '#7E8299')};
  position: relative;
  
  #Path_273 {
    fill: ${({ active }) => (active ? '#181C32' : '#7E8299')};    
  }
`;

Dropdown.Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-right: 9px;
  cursor: pointer;
`;

Dropdown.Menu = styled.ul`
  position: absolute;
  top: 100%;
  ${({ position }) => (position && position === 'left'
    ? 'left: 0;' : position === 'right' ? 'right: 0;' : 'left: 0;')};
  border-radius: 8px;
  padding: 8px 0;
  margin: 4px 0 0 0 ;
  background-color: #fff;
  list-style: none;
  overflow: hidden;
  box-shadow: 0 6px 12px 0 rgba(73,75,116, 0.16);
  display: ${({ active }) => (active ? 'block' : 'none')};
  z-index: 30;
`;

Dropdown.MenuItem = styled.li`
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  color: #181C32;
  line-height: 18px;
  padding: 4px 16px;
  white-space: nowrap;
  transition: .2s ease-in;
  
  &:hover {
    background-color: #F8F8F8;
  }
`;
