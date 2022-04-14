import { device } from "utils/responsive";
import styled, { css } from "styled-components";
import { ReactComponent as RusFlag } from 'assets/icons/russia-flag.svg';
import { ReactComponent as UzFlag } from 'assets/icons/uzbekistan-flag.svg';
import { ReactComponent as EnFlag } from 'assets/icons/great-britain-flag.svg';

export const iconCommon = css`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    @media ${device.tablet} {
        width: 18px;
        height: 18px;
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