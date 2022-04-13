import { device } from "utils/responsive";
import styled, { css } from "styled-components";
import { ReactComponent as Phone } from 'assets/icons/phone.svg';
import { ReactComponent as Question } from 'assets/icons/question.svg';
import { ReactComponent as RusFlag } from 'assets/icons/russia-flag.svg';
import { ReactComponent as UzFlag } from 'assets/icons/uzbekistan-flag.svg';

export const iconCommon = css`
    width: 20px;
    height: 20px;
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
export const RusFlagIcon = styled(RusFlag)`
    ${iconCommon};
`
export const PhoneIcon = styled(Phone)`
    ${iconCommon};
    path {
        fill: var(--primary-color);
    }
`
export const QuestionIcon = styled(Question)`
    ${iconCommon};
    path {
        fill: var(--primary-color);
    }
`