import styled from 'styled-components';
import { device } from 'utils/media/responsive';
import { ReactComponent as Remove } from 'assets/icons/remove.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/down-arrow.svg';

export const ArrowDownIcon = styled(ArrowDown)
`
	width: 36px;
	height: 36px;
	transition: all 0.2s ease;
	transform: ${({ active }) => active && 'rotate(180deg)'};
	@media ${device.tablet} {
		width: 24px;
		height: 24px;
	}
`;
export const RemoveIcon = styled(Remove)
`
	width: 28px;
	height: 28px;
	opacity: 0.5;
	@media ${device.tablet} {
		width: 18px;
		height: 18px;
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
	color: var(--input-color);
	border: 2px solid var(--border-color);
	border-radius: var(--card-brd-radius);
	@media ${device.tablet} {
		height: 50px;
	}
`;

Dropdown.Title = styled.span `
	max-width: 500px;
	display: inline-block;
	font-size: 30px;
	font-weight: 700;
	line-height: 40px;
	margin-right: 9px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	@media ${device.tablet} {
		max-width: 350px;
		font-size: 16px;
		margin-right: 5px;
	}
`;

Dropdown.Menu = styled.ul `
	max-height: 430px;
	overflow-y: auto;
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
	opacity: ${({ active }) => (active ? 1 : 0)};
	box-shadow: 0 6px 12px 0 rgba(73, 75, 116, 0.16);
	visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
	transform: ${({ active }) => (active ? 'translateY(1rem)' : 'translateY(0)')};
	@media ${device.tablet} {
		max-height: 230px;
	}
`;

Dropdown.MenuItem = styled.li `
	max-width: 600px;
	cursor: pointer;
	display: inline-block;
	font-size: 30px;
	font-weight: 500;
	color: #181c32;
	line-height: 40px;
	height: 50px;
	padding: 0 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: 0.2s ease-in;
	&:focus {
		background-color: #f8f8f8;
	}
	@media ${device.tablet} {
		font-size: 16px;
		line-height: 20px;
		padding: 0 10px;
		height: 35px;
		max-width: 400px;
	}
`;
export const IconWrap = styled.div `
	position: absolute;
	top: 26%;
	right: 4%;
	@media ${device.tablet} {
		top: 5%;
	}
`;
export const Placeholder = styled.p `
	margin: 0;
	font-size: 30px;
	font-weight: 500;
	line-height: 40px;
	color: #181c32;
	opacity: 0.7;
	@media ${device.tablet} {
		font-size: 20px;
		font-weight: 500;
		line-height: 40px;
	}
`;