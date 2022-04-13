import styled from "styled-components";
import { device } from "utils/responsive";

export const Title = styled.h3`
    color: #fff;
    font-weight: normal;
    font-size: 22px;
    margin-top: 20px;
    letter-spacing: 1.1px;
    @media ${device.tablet} {
        font-size: 18px;
    }
`