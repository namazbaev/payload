import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 32px 16px 0 16px;
    border-radius: 24px;
`
export const Title = styled.h4`
    color: var(--black1);
    font-size: 30px;
    font-weight: 500;
    line-height: 28px;
    margin: ${({ margin }) => margin || 0};
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Footer = styled.div`
    margin-top: 220px;
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
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    text-transform: capitalize;
    background: rgb(5,152,208);
    margin: ${({ margin }) => margin || 0};
    background: #BFBEBE;
`
export const LeftSection = styled.div`
    width: 60%;
    margin-right: 60px;
    text-align: center;
`
export const RightSection = styled.div`
    width: 40%;
    text-align: center;
`
export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: ${({ marginBottom }) => marginBottom || '22px'};
    }
`
export const FlexItemLeft = styled.div`
    width: 40%;
    text-align: ${({ align }) => align || "center"};
`
export const FlexItemRight = styled.div`
    min-width: 65%;
`
export const Text = styled.h3`
    max-width: 230px;
    font-weight: 600;
    line-height: 28px;
    font-size: ${({ size }) => size || "24px"};
    text-align: ${({ align }) => align || 'start'};
    color: ${({ color }) => color ? "var(--black1)" : "var(--black1)"};
`
export const Div = styled.div`
    margin: ${({ margin }) => margin || 0};
`
export const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const RadioButton = styled.button`
    width: 100%;
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
    padding: 14px 24px;
    border-radius: 4px;
    background-color: transparent;
    color: ${({ active }) => active ? "#BCBCBC" : "var(--black1)"};
    border: ${({ active }) => active ? '2.5px solid var(--border-color)' : '2px solid var(--border-color)'};
    &:not(:last-child) {
        margin-right: 6px;
    }
`