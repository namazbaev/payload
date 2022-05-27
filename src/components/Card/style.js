import styled from 'styled-components';
import { MOBILEOPERATOR } from 'routes/route';
import { device } from 'utils/media/responsive';
export const Container = styled.div `
	width: 100%;
	height: 86vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Footer = styled.div `
	width: 50%;
	display: flex;
	align-items: center;
	margin: 40px 0 30px 65px;
	justify-content: space-between;
	@media ${device.tablet1} {
		margin: 30px 0 30px 65px;
	}
	@media ${device.tablet} {
		width: 60%;
		margin: 20px 0;
		padding-left: 20px;
	}
`;
export const Wrap = styled.div `
	width: 100%;
	display: grid;
	padding: 0 40px;
	margin-top: 27px;
	grid-template-columns: repeat(5, 1fr);
	@media ${device.tablet} {
		margin-top: 20px;
		padding: 0 30px;
		grid-template-columns: repeat(5, 1fr);
		gap: 1em;
	}
`;
export const Content = styled.div `
	margin: 12px;
	height: 128px;
	cursor: pointer;
	border-radius: 8px;
	transition: box-shadow var(--card-transition);
	filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
	&:hover {
		box-shadow: var(--card-hover-shadow);
	}
	&:active {
		transition: 0.2s;
		transform: translateY(1px);
	}
	@media ${device.tablet1} {
	}
	@media ${device.tablet} {
		margin: 0;
		height: 75px;
	}
`;
export const CardImage = styled.span `
	width: 100%;
	height: 100%;
	font-size: 0;
	line-height: 0;
	border-radius: 6px;
	display: inline-block;
	vertical-align: middle;
	background-color: #fff;
	background-size: auto auto;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-image: url(${({ img }) => img || ''});
	@media ${device.tablet} {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url(${({ img }) => img || ''});
		background-size: ${({ prop }) =>
			prop === MOBILEOPERATOR ? '115%' : '20vw 16vh'};
	}
`;