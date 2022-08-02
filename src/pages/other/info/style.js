import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    padding: 16px;
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Header = styled.div`
    padding: 24px;
`
export const Title = styled.h1`
    font-weight: 600;
    margin: ${({ margin }) => margin || 0};
    text-align: ${({ align }) => align || "start"};
    font-size: ${({ size }) => size ? `${size}px` : "24px"};
    color: ${({ color }) => color ? "#fdff14" : 'var(--black1)'};
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
    font-size: 24px;
    font-weight: 600;
    min-width: 200px;
    padding: 16px 24px;
    border-radius: 8px;
    background-color: #00C35A;
`
export const Image = styled.img`
    width: 100%;
    object-fit: cover;
`