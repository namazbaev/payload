import styled from 'styled-components';
import { device } from 'utils/media/responsive';
import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

export const Logo = styled(LogoIcon)
`
	width: 150px;
	height: 50px;
	cursor: pointer;
	@media ${device.tablet1} {
		width: 120px;
		height: 40px;
	}
	@media ${device.tablet} {
		width: 100px;
		height: 30px;
	}
`;
export const SearchIcons = styled(SearchIcon)
`
	width: 24px;
	height: 24px;
	cursor: pointer;
	position: absolute;
	top: 25%;
	right: 5%;
	&:hover {
		path {
			fill: #000;
		}
	}
	@media ${device.tablet1} {
		width: 19px;
		height: 19px;
		top: 21%;
		right: 6%;
	}
	@media ${device.tablet} {
		width: 16px;
		height: 16px;
		top: 21%;
		right: 6%;
	}
`;
export const Container = styled.div `
	padding: 36px 48px;
	display: flex;
	align-items: center;
	background-color: #fff;
	justify-content: space-between;
	box-shadow: 0px 4px 16px rgba(90, 90, 90, 0.08);
	@media ${device.tablet1} {
		padding: 16px 24px;
	}
	@media ${device.tablet} {
		padding: 14px 20px;
	}
`;
export const LeftSection = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Payload = styled.h1 `
	margin: 0;
	color: var(--black);
	font-size: 24px;
	font-weight: bold;
	@media ${device.tablet} {
		font-size: 20px;
	}
	@media ${device.mobile} {
		font-size: 16px;
	}
`;
export const RightSection = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Drop = styled.span `
	width: 2px;
	height: 65px;
	margin: 0 24px;
	background-color: var(--line-color);
	@media ${device.tablet1} {
		height: 50px;
		margin: 0 16px;
	}
	@media ${device.tablet} {
		height: 50px;
		margin: 0 12px;
	}
`;
export const TerminalWrap = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const WrapTerminal = styled.div `
	color: #fff;
`;
export const WrapButton = styled.div `
	margin: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
export const SupportText = styled.p `
	margin: 0;
	font-size: 14px;
	letter-spacing: 0.04em;
	@media ${device.tablet} {
		font-size: 12px;
	}
	@media ${device.mobile} {
		font-size: 12px;
	}
`;
export const Number = styled.p `
	margin: 0;
	font-size: 22px;
	font-weight: 600;
	letter-spacing: 0.04em;
	color: var(--black1);
	@media ${device.tablet1} {
		font-size: 16px;
	}
	@media ${device.tablet} {
		font-size: 14px;
	}
	@media ${device.mobile} {
		font-size: 12px;
	}
`;
export const Terminal = styled.span `
	font-size: 16px;
	font-weight: 500;
	line-height: 32px;
	color: var(--black);
	letter-spacing: 0.04em;
	@media ${device.tablet1} {
		font-size: 15px;
		line-height: 20px;
		letter-spacing: 0.02em;
	}
	@media ${device.tablet} {
		line-height: 10px;
		letter-spacing: 0.01em;
	}
`;
export const IconText = styled.span `
	color: #fff;
	font-size: 12px;
	@media ${device.tablet} {
		font-size: 10px;
	}
	@media ${device.mobile} {
		font-size: 9px;
	}
`;
export const IconWrap = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Search = styled.div `
	display: flex;
	position: relative;
	margin-right: 32px;
	@media ${device.tablet} {
		margin-right: 12px;
	}
`;
export const Placeholder = styled.p `
	color: #c4c4c4;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media ${device.tablet} {
		font-size: 14px;
		font-weight: 400;
	}
`;
export const Input = styled.div `
	width: 256px;
	height: 48px;
	outline: none;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
	border-radius: 4px;
	border: 1px solid #d0cfcf;
	padding: 12px 40px 12px 16px;
	color: var(--card-text-color);
	&:focus,
	&:active {
		border: 1px solid rgb(196, 196, 196);
		box-shadow: 0 0 5px rgb(196, 196, 196);
		transition: var(--card-click-transition);
	}
	@media ${device.tablet} {
		width: 150px;
		height: 30px;
		font-size: 14px;
		font-weight: 400;
		border: 0.7px solid #d0cfcf;
		padding: 4px 16px 12px 12px;
	}
`;