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
export const Fixed = styled.div`
	left: 0;
	width: 100%;
	bottom: 10px;
	display: flex;
	position: fixed;
	transition: 0.2s;
	background-color: #fff;
	justify-content: center;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`