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
	border: ${({ active }) =>
		active ? '4px solid var(--border-color)' : '2px solid var(--border-color)'};
	box-shadow: ${({ active }) =>
		active && '0px 3px 26px -9px rgba(34, 60, 80, 0.2)'};
	border-radius: var(--card-brd-radius);
	@media ${device.tablet} {
		height: 50px;
		border: ${({ active }) =>
			active
				? '3px solid var(--border-color)'
				: '2px solid var(--border-color)'};
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
	padding: 6px 0;
	min-width: 100%;
	list-style: none;
	position: absolute;
	left: 0;
	top: 100%;
	z-index: 30;
	transition: 0.3s;
	border-radius: 4px;
	background-color: #fff;
	opacity: ${({ active }) => (active ? 1 : 0)};
	box-shadow: 0 6px 12px 0 rgba(73, 75, 116, 0.16);
	visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
	transform: ${({ active }) => (active ? 'translateY(1rem)' : 'translateY(0)')};
	::-webkit-scrollbar {
		width: 8px;
		height: 4px;
	}

	::-webkit-scrollbar-track {
		background: #f8f8f8;
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background: rgba(73, 75, 116, 0.1);
	}
	@media ${device.tablet} {
		::-webkit-scrollbar {
			width: 4px;
			height: 4px;
		}
		max-height: 230px;
	}
`;

Dropdown.MenuItem = styled.li `
	width: 600px;
	height: 50px;
	cursor: pointer;
	display: inline-block;
	font-size: 30px;
	font-weight: 500;
	color: #181c32;
	line-height: 50px;
	padding: 0 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: 0.2s ease-in;
	background-color: ${({ active }) => (active ? '#f1f1f1' : '')};
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
	opacity: 0.5;
	@media ${device.tablet} {
		font-size: 20px;
		line-height: 18px;
	}
`;