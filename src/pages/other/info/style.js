import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    padding: 16px 8px;
    background: rgb(87,87,87);
    background: linear-gradient(-45deg, rgba(87,87,87,1) 0%, rgba(161,161,161,1) 50%, rgba(87,87,87,1) 100%);
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Header = styled.div`
    padding: 32px 24px;
    background: rgb(87,87,87);
    background: linear-gradient(-45deg, rgba(87,87,87,1) 0%, rgba(161,161,161,1) 50%, rgba(87,87,87,1) 100%);
`
export const Title = styled.h1`
    font-weight: 600;
    margin: ${({ margin }) => margin || 0};
    text-align: ${({ align }) => align || "start"};
    color: ${({ color }) => color ? "#fdff14" : "#fff"};
    font-size: ${({ size }) => size ? `${size}px` : "32px"};
    text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : ''};
`
export const Form = styled.div`
    width: 75%;
`
export const Info = styled.div`
    width: 25%;
    padding: 0 12px;
`
export const Input = styled.input`
    width: 100%;
    outline: none;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 16px 12px;
    border-radius: 8px;
    background-color: transparent;
    flex-basis: ${({ basis }) => basis || "100%"};
    margin-right: ${({ marginRight }) => marginRight || 0};
    color: ${({ readOnly }) => readOnly ? "#fdff14" : "#fff"};
    border: ${({ borderSize }) => borderSize ? `${borderSize}px solid #fff` : '1.5px solid #fff'};
    &::placeholder {
        font-size: 16px;
        color: ${({ readOnly }) => readOnly ? "#fdff14" : "#fff"};
    }
`
export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${({ marginTop }) => marginTop || 0};
    justify-content: ${({ align }) =>
    align === 'center' ? 'center' :
        align === 'start' ? 'flex-start' :
            align === 'end' ? 'flex-start' : 'space-between'};
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`
export const CheckButton = styled.button`
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    min-width: 200px;
    padding: 18px 24px;
    border-radius: 8px;
    background: rgb(5,152,208);
    background: linear-gradient(-45deg, rgba(5,152,208,1) 0%, rgba(66,199,255,1) 50%, rgba(5,152,208,1) 100%);
`
export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`