import { device } from "utils/media/responsive";
import styled, { css } from "styled-components";
import { ReactComponent as RusFlag } from 'assets/icons/russia-flag.svg';
import { ReactComponent as UzFlag } from 'assets/icons/uzbekistan-flag.svg';
import { ReactComponent as EnFlag } from 'assets/icons/great-britain-flag.svg';

export const iconCommon = css`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    @media ${device.tablet1} {
        width: 20px;
        height: 20px;
    }
    @media ${device.tablet} {
        width: 17px;
        height: 17px;
    }
    @media ${device.mobile} {
        width: 15px;
        height: 15px;
    }
`
export const UzFlagIcon = styled(UzFlag)`
    ${iconCommon};
`
export const EnFlagIcon = styled(EnFlag)`
    ${iconCommon};
`
export const RusFlagIcon = styled(RusFlag)`
    ${iconCommon};
`
export const LinkBtn = styled.button`
    border: none;
    min-width: 201px;
    min-height: 64px;
    outline: none;
    cursor: pointer;
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    border-radius: var(--card-brd-radius);
    background-color: ${({ color }) => color || '#D8D8D8'};
    &:hover {
        opacity: 0.99;
        transition: 0.3s;
        background-color: ${({ hoveredColor }) => hoveredColor || '#BFBEBE'};
    }
    &:active {
        transition: 0.2s;
        background-color: #A1A1A1;
    }
    &:disabled,
    &[disabled]{
        opacity: .7;
        cursor: not-allowed;
        }
    @media ${device.tablet1} {
        min-width: 180px;
        min-height: 55px;
        padding: 8px 16px;
        border-radius: var(--card-min-brd-radius);
    }
    @media ${device.tablet} {
        min-width: 140px;
        min-height: 40px;
        padding: 8px 14px;
        border-radius: var(--card-min-brd-radius);
    }
`
export const Text = styled.p`
    color: #fff;
    font-size: 26px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.04em;
    @media ${device.tablet1} {
        font-size: 22px;
        line-height: 30px;
    }
    @media ${device.tablet} {
        font-size: 18px;
        line-height: 20px;
    }
`