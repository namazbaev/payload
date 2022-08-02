import styled from "styled-components";

export const Grid = styled.div`
    color: #fff;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    &:not(:last-child) {
        margin-bottom: 28px;
    }
`
export const TextWrap = styled.div`
	display: flex;
	justify-content: center;
`
export const GridItem = styled.div`
		color: var(--black1);
    font-size: ${({size}) => size === 'large' ? '24px' : size === 'medium' ? '18px' : '16px'};
`

export const List = styled.div`
    max-height: 66vh;
    overflow: auto;
`
export const Button = styled.button`
    border: none;
		cursor: pointer;
    font-size: 20px;
		margin-top: 12px;
    padding: 8px 24px;
    border-radius: 6px;
    color: var(--black1);
`
export const Div = styled.div`
    display: flex;
    padding: 4px 0;
    justify-content: center;
    align-items: flex-end;
`