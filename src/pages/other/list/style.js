import styled from "styled-components";

export const Grid = styled.div`
    color: #fff;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    &:not(:last-child) {
        margin-bottom: 32px;
    }
`
export const GridItem = styled.div`
    font-size: ${({size}) => size === 'large' ? '24px' : size === 'medium' ? '18px' : '16px'};
`

export const List = styled.div`
    max-height: 66vh;
    overflow: auto;
`
export const Button = styled.button`
    color: #fff;
    font-size: 20px;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: rgb(87,87,87);
    background: linear-gradient(-45deg, rgba(87,87,87,1) 0%, rgba(161,161,161,1) 50%, rgba(87,87,87,1) 100%);
`
export const Div = styled.div`
    display: flex;
    padding: 4px 0;
    justify-content: center;
    align-items: flex-end;
`