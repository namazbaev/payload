import styled from "styled-components";
import ErrorIcon from 'assets/icons/error.svg';
import SuccessIcon from 'assets/icons/success.svg';

export const Container = styled.div`
    width: 544px;
    height: 456px;
    z-index: 2;
    padding: 36px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    opacity: ${({ active }) => active ? 1 : 0};
    top: ${({ active }) => active ? '50%' : '-200%'};
    transform: ${({ active }) => active ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.5)"};
    transition: ${({ active }) => active ? "transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19)" : "opacity 300ms ease-in-out, top 1000ms ease-in-out, transform 1000ms ease-in-out"};
    box-sizing: border-box;
    background-color: #f5f5f5;
    border-radius: var(--card-brd-radius);
`
export const IconSection = styled.div`
    width: 96px;
    height: 96px;
`
export const Icon = styled.span`
    width: 100%;
    height: 100%;
    display: inline-block;
    background-size: 100%;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({ isSuccess }) => isSuccess ? SuccessIcon : ErrorIcon});
`
export const Title = styled.h3`
    color: #132447;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
`
export const Description = styled.p`
    margin: 0;
    color: #717C91;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
`
export const Button = styled.button`
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    background-color: #00C35A;
    border-radius: var(--card-brd-radius);

`