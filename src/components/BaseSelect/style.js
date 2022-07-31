import styled from 'styled-components';
import { device } from 'utils/media/responsive';
import { ReactComponent as Remove } from 'assets/icons/remove.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/down-arrow.svg';

export const ArrowDownIcon = styled(ArrowDown)
	`
	width: 22px;
	height: 22px;
	transition: all 0.2s ease;
	transform: ${({ active }) => active && 'rotate(180deg)'};
	@media ${device.tablet} {
		width: 24px;
		height: 24px;
	}
`;
export const RemoveIcon = styled(Remove)
	`
	width: 14px;
	height: 14px;
	opacity: 0.5;
	@media ${device.tablet} {
		width: 12px;
		height: 12px;
	}
`;

export const Dropdown = styled.div`
	width: 100%;
	display: flex;
	cursor: pointer;
	padding: 14px 16px;
	position: relative;
	align-items: center;
	background-color: #fff;
	color: var(--input-color);
	box-shadow: ${({ active }) =>
		active && '0px 3px 26px -9px rgba(34, 60, 80, 0.2)'};
	border-radius: 4px;
	border: 1px solid #aeaeae;
	@media ${device.tablet} {
		height: 50px;
		border: ${({ active }) => active && '0px solid var(--border-color)'};
	}
`;

Dropdown.Title = styled.span`
	max-width: 500px;
	padding-right: 20px;
	display: inline-block;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
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

Dropdown.Menu = styled.ul`
	width: 100%;
	max-height: 300px;
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

Dropdown.MenuItem = styled.li`
	width: 100%;
	cursor: pointer;
	display: inline-block;
	font-size: 18px;
	font-weight: 500;
	color: #181c32;
	line-height: 24px;
	padding: 4px 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: 0.2s ease-in;
	text-align: start;
	background-color: ${({ active }) => (active ? '#f1f1f1' : '')};
	&:hover {
		background-color: #f1f1f1;
	}
	@media ${device.tablet} {
		font-size: 14px;
		line-height: 16px;
		padding: 0 10px;
		height: 35px;
		max-width: 400px;
	}
`;
export const IconWrap = styled.div`
	position: absolute;
	top: 32%;
	right: 4%;
	@media ${device.tablet} {
		top: 5%;
	}
`;
export const Placeholder = styled.p`
	margin: 0;
	opacity: 0.5;
	color: #181c32;
	font-size: 18px;
	font-weight: 500;
	line-height: 20px;
	@media ${device.tablet} {
		font-size: 14px;
		line-height: 14px;
	}
`;