import styled from 'styled-components';
import { device } from 'utils/media/responsive';
import { ReactComponent as ArrowDown } from 'assets/icons/down-arrow.svg';

export const ArrowDownIcon = styled(ArrowDown)
`
  transition: all 0.3s ease;
  transform: ${({ active }) => active ? 'rotate(180deg)' : ''} ;
  width: 36px;
  height: 36px;
  @media ${device.tablet1} {
    width: 25px;
    height: 25px;
  }
`;

export const Dropdown = styled.div `
  width: 100%;
  height: 76px;
  display: flex;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  padding: 0px 18px;
  position: relative;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  border: 2px solid var(--border-color);
  border-radius: var(--card-brd-radius);
  color: var(--input-color);
  @media ${device.tablet} {
    height: 50px;
  }
`;

Dropdown.Title = styled.div `
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  margin-right: 9px;
  @media ${device.tablet1} {
    font-size: 14px;
    margin-right: 5px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    margin-right: 5px;
  }
`;

Dropdown.Menu = styled.ul `
  height: ${({ length }) => length ? '400px' : 'auto'};
  overflow-y: ${({ length }) => length ? 'scroll' : 'hidden'};
  padding: 8px 0;
  min-width: 100%;
  margin-top: 15px;
  list-style: none;
  position: absolute;
  left: 0;
  top: 100%;
  transition: 0.3s;
  border-radius: 4px;
  background-color: #fff;
  opacity: ${({ active }) => active ? 1 : 0};
  box-shadow: 0 6px 12px 0 rgba(73,75,116, 0.16);
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  transform: ${({ active }) => active ? 'translateY(1rem)' : 'translateY(0)'};
  z-index: 30;
`;

Dropdown.MenuItem = styled.li `
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
  color: #181C32;
  line-height: 18px;
  height: 50px;
  padding: 0 16px;
  white-space: nowrap;
  transition: .2s ease-in;
  &:hover {
    background-color: #F8F8F8;
  }
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 12px;
    padding: 6px;
  }
`;