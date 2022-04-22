import styled from "styled-components";
import MaskInput from 'react-input-mask';
import { device } from "utils/responsive";
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

export const Delete = styled(DeleteIcon)`
    width: 42px;
    height: 48px;
    @media ${device.tablet1} {
        width: 40px;
        height: 44px;
    }
    @media ${device.tablet} {
        width: 32px;
        height: 34px;
    }
`
export const Div = styled.div`
    width: 100%;
    height: 780px;
    padding: 0 50px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media ${device.tablet}{
        padding: 0 30px;
        height: 480px;
        margin-top: 40px;
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
`
export const DetailsInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const DetailsKeyboard = styled.div`
    display: inline-grid;
    grid-gap: 27px;
    justify-self: center;
    align-content: center;
    grid-template-columns: 140px 140px 140px;

    @media ${device.tablet} {
        grid-template-columns: 80px 80px 80px;
    }
`
export const Keyboard = styled.div`
    height: 80px;
    width: 140px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: #F4F4F4;
    border-radius: var(--card-brd-radius);
    &:active {
        background-color: #F1F1F1;
        transform: translateY(1px);
    }
    @media ${device.tablet1} {
        height: 70px;
        width: 120px;
    }
    @media ${device.tablet} {
        height: 50px;
        width: 80px;
    }
`
export const Number = styled.span`
    color: #453535;
    font-size: 40px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0.04em;
    @media ${device.tablet1} {
        font-size: 30px;
        line-height: 44px;
    }
    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`
export const DetailsCard = styled.div`
    width: 211px;
    height: 128px;
    cursor: pointer;
    border-radius: 8px;
    transition: box-shadow var(--card-transition);
    filter: drop-shadow(0px 4px 20px rgba(34, 37, 48, 0.1));
    @media ${device.tablet} {
        width: 150px;
        height: 80px;
        border-radius: 20px;
    }
    
`
export const CardImage = styled.span`
    width: 100%;
    height: 100%;
    font-size: 0;
    line-height: 0;
    border-radius: 6px;
    display: inline-block;
    vertical-align: middle;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ img }) => img || ''});
    background-size: ${({ size }) => size ? size : '100%'};
    @media ${device.tablet1} {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${({ img }) => img || ''});
        background-size: ${({ size }) => size ? size : 'auto'};
    }
    @media ${device.tablet} {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${({ img }) => img || ''});
        background-size: ${({ size }) => size ? size : '100%'};
    }
`
export const MaskedInput = styled(MaskInput)`
    width: 100%;
    height: 96px;
    color: #3D3D4B;
    font-size: 40px;
    margin-top: 32px;
    font-weight: 700;
    line-height: 64px;
    padding: 16px 120px 16px 24px;
    border: 2px solid var(--line-color);
    border-radius: var(--card-brd-radius);
    &::placeholder {
        color: #3D3D4B;
    }
    &:focus, &:active {
        outline: none;
        border: 2px solid #33BAFF;
        transition: var(--card-click-transition);
    }
    @media ${device.tablet1}{
        width: 500px;
        height: 80px;
        font-size: 36px;
        margin-top: 30px;
        line-height: 56px;
        padding: 16px 100px 16px 24px;
    }
    @media ${device.tablet}{
        width: 100%;
        height: 60px;
        font-size: 26px;
        margin-top: 20px;
        line-height: 56px;
        padding: 16px 0 16px 24px;
    }
`
export const Drop = styled.span`
  width: 4px;
  height: 100%;
  margin: 0 48px;
  background-color: var(--line-color);
  @media ${device.tablet1} {
    height: 50px;
    margin: 0 16px;
  }
  @media ${device.tablet} {
    height: 100%;
    margin: 0 24px;
  }
`
export const Hr = styled.hr`
    border: 0;
    width: 100%;
    margin-top: 32px;
    border-bottom: 2px solid var(--line-color);
    @media ${device.tablet} {
        margin: 15px;
    }
`
export const InfoText = styled.div`
    width: 100%;
    margin-top: 27px;
    font-size: 22px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.04em;

    @media ${device.tablet}{
        margin: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }
`
export const WarningText = styled.span`
    color: #33BAFF;
    /* font-size: 22px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.04em; */
`
export const Text = styled.span`
    color: #5B5B5E;
    /* font-size: 22px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.04em; */
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${device.tablet1} {
        /* margin: 30px 0 30px 65px; */
    }
    @media ${device.tablet} {
        /* margin: 0 0 30px 45px; */
    }
`