import styled from 'styled-components';
import { device } from 'utils/media/responsive';

export const Container = styled.div `
	height: 70%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;
export const Title = styled.h3 `
	font-size: 48px;
	font-weight: 500;
	line-height: 58px;
	margin-bottom: 60px;
	color: var(--input-color);
	@media ${device.tablet} {
		font-size: 30px;
		font-weight: 500;
		line-height: 24px;
		margin-bottom: 30px;
	}
`;
export const Content = styled.div `
	width: 100%;
	display: flex;
	justify-content: center;
`;
export const ImageWrap = styled.div `
	width: 260px;
	height: 100%;
	margin-right: 60px;
	@media ${device.tablet} {
		width: 200px;
		height: 100%;
		margin-right: 40px;
	}
`;
export const Image = styled.img `
	width: 100%;
	height: 100%;
`;
export const ListWrap = styled.div `
	display: flex;
	align-items: center;
`;
export const List = styled.ul `
	padding: 0;
`;
export const Item = styled.li `
	color: #000000;
	font-size: 24px;
	font-weight: 500;
	line-height: 24px;
	list-style-type: none;
	&:not(:last-child) {
		margin-right: 50px;
		margin-bottom: 35px;
	}
	@media ${device.tablet} {
		font-size: 18px;
		&:not(:last-child) {
			margin-right: 40px;
			margin-bottom: 20px;
		}
	}
`;