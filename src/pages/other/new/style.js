import styled from 'styled-components';

export const Form = styled.div`
    width: 100%;
`
export const Text = styled.h3`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: var(--black1);
    text-transform: uppercase;
    margin: ${({ margin }) => margin || 0};
`
export const Wrap = styled.div`
    width: ${({ width }) => width || 'auto'};
`