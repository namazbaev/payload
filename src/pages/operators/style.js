import styled from "styled-components";
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
    height: 84vh;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.tablet}{
        padding: 0 30px;
        height: 80vh;
        margin-top: 20px;
    }
`
export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
    @media ${device.tablet} {
        margin-top: 50px;
    }
`
export const DetailsInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const DetailsKeyboard = styled.div`
    height: 100%;
    display: inline-grid;
    grid-gap: 27px;
    justify-self: center;
    align-content: space-between;
    grid-template-columns: auto auto auto;
    @media ${device.tablet} {
        grid-gap: 15px;
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
        transform: translateY(1px);
        background-color: var(--card-click-color);
    }
    @media ${device.tablet1} {
        height: 70px;
        width: 120px;
    }
    @media ${device.tablet} {
        height: 60px;
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