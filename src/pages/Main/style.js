import styled from "styled-components";
import { device } from "utils/responsive";

export const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 70px 20px;
    background-color: gray;
`
export const Info = styled.div`
    width: 40%;
    height: 100%;
    background-color: gray;
`
export const Operators = styled.div`
    width: 60%;
    height: 70%;
    display: flex;
    align-self: baseline;
    flex-direction: column;
    justify-content: space-evenly;
    @media ${device.tablet}{
        flex-wrap: nowrap;
    }
`
export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media ${device.tablet} {
        flex-wrap: wrap;
    }
`