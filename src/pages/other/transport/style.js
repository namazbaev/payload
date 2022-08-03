import styled from 'styled-components';

export const Form = styled.div`
    width: 100%;
    margin-top: 16px;
`
export const Text = styled.h3`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: var(--black);
    text-transform: uppercase;
    margin: ${({ margin }) => margin || 0};
`