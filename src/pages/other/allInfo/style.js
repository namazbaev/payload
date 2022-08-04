import styled from 'styled-components';
import Currency from 'react-currency-format';

export const Content = styled.div`
	margin-top: 24px;
	width: 100%;
	//height: 100%;
	padding: 0 24px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`
export const Div = styled.div`
  position: relative;
	margin: 0 16px 48px 16px;
`
export const Label = styled.label`
  position: absolute;
  top: -22px;
  margin: 10px;
  padding: 0 8px;
  font-size: 20px;
	font-weight: 500;
  background-color: #fff;
`
export const SummaryContent = styled.div`
  width: 100%;
	min-height: 160px;
  padding: 24px;
  font-size: 20px;
  font-weight: 800;
  color: var(--black);
  background-color: #fff;
  border: 2px solid var(--border-color);
`
export const Value = styled.p`
	margin: 0;
	font-size: 17px;
	font-weight: 500;
	line-height: 26px;
`
export const Amount = styled(Currency)`
    font-size: 17px;
    font-weight: 500;
    line-height: 26px;
		color: var(--black);
`;