import styled from 'styled-components';

export const Content = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding: 32px 16px;
    border-radius: 24px;
    background: rgb(87,87,87);
    background: linear-gradient(-45deg, rgba(87,87,87,1) 0%, rgba(161,161,161,1) 50%, rgba(87,87,87,1) 100%);
`
export const Title = styled.h4`
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    line-height: 16px;
    margin: ${({ margin }) => margin || 0};
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const Footer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: ${({ align }) =>
    align === 'center' ? 'center' :
        align === 'end' ? 'flex-end' :
        align === 'start' ? 'flex-start' :
        align === 'between' ? 'space-between' :
            align === 'evenly' ? 'space-evenly' : 'space-around'};
`
export const Button = styled.button`
    color: #fff;
    border: none;
    min-width: 200px;
    padding: 16px 24px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: uppercase;
    background: rgb(5,152,208);
    margin: ${({ margin }) => margin || 0};
    background: linear-gradient(-45deg, rgba(5,152,208,1) 0%, rgba(66,199,255,1) 50%, rgba(5,152,208,1) 100%);
`
export const LeftSection = styled.div`
    width: 55%;
    margin-right: 40px;
    text-align: center;
`
export const RightSection = styled.div`
    width: 45%;
    text-align: center;
`
export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 28px;
    }
`
export const FlexItemLeft = styled.div`
    width: 40%;
    text-align: ${({ align }) => align || "center"};
`
export const FlexItemRight = styled.div`
    width: 60%;
`
export const Text = styled.h3`
    font-weight: 600;
    line-height: 16px;
    line-height: 18px;
    font-size: ${({ size }) => size || "20px"};
    color: ${({ color }) => color ? "#fdff14" : "#fff"};
`
export const Div = styled.div`
    margin: ${({ margin }) => margin || 0};
`
export const ButtonWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
export const RadioButton = styled.button`
    width: 100%;
    color: ${({ active }) => active ? "#BCBCBC" : "#fff"};
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    padding: 14px 24px;
    border: 1.5px solid #fff;
    background-color: transparent;
`