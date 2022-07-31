import { useState } from 'react';
import { PAY } from 'routes/route';
import { mobileoperators } from 'utils/json';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LinkButton from 'components/Buttons/LinkButton';
import { Format, Formatting } from 'styles/globalStyles';
import {
	Hr,
	Div,
	Text,
	Drop,
	Number,
	Delete,
	Footer,
	Keyboard,
	InfoText,
	CardImage,
	WarningText,
	DetailsCard,
	DetailsInfo,
	DetailsKeyboard,
	DetailsContainer,
} from './style';
export default () => {
	const countryCode = '+998';
	const { name } = useParams();
	const { t } = useTranslation();
	let result = mobileoperators.find((x) => x.name === name);
	const [number, setNumber] = useState(countryCode);
	const onChangeNumber = (value) => {
		if (number.length >= 13) return;
		setNumber(number + String(value));
	};
	const removeChar = () => {
		if (number === '') return;
		if (number.length !== 4) {
			const value = number.slice(0, -1);
			setNumber(value);
		}
	};
	const length = number.length !== 13;
	const fromPhone = number.split(' ').join('');
	const removeNumbers = () => setNumber(countryCode);
	return (
		<Div>
			<DetailsContainer>
				<DetailsInfo>
					<DetailsCard>
						<CardImage img={result.img} />
					</DetailsCard>
					<Formatting>
						<Format
							value={number}
							displayType='text'
							format='+### ## ### ## ##'
						/>
					</Formatting>
					<Hr />
					<InfoText>
						<Text>
							<WarningText> {t('warning')}</WarningText> {t('block_pay')}
						</Text>
					</InfoText>
				</DetailsInfo>
				<Drop />
				<DetailsKeyboard>
					<Keyboard onClick={() => onChangeNumber(1)}>
						<Number>1</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(2)}>
						<Number>2</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(3)}>
						<Number>3</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(4)}>
						<Number>4</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(5)}>
						<Number>5</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(6)}>
						<Number>6</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(7)}>
						<Number>7</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(8)}>
						<Number>8</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(9)}>
						<Number>9</Number>
					</Keyboard>
					<Keyboard onClick={() => removeNumbers()}>
						<Number>C</Number>
					</Keyboard>
					<Keyboard onClick={() => onChangeNumber(0)}>
						<Number>0</Number>
					</Keyboard>
					<Keyboard onClick={removeChar}>
						<Delete />
					</Keyboard>
				</DetailsKeyboard>
			</DetailsContainer>
			<Footer>
				<LinkButton path={-1} text={t('back')} />
				<LinkButton path='/' text={t('main_page')} />
				<LinkButton length={length} path={PAY}
					text={t('next')} state={fromPhone}
					color={length ? '#aeaeae' : '#00C35A'}
					hoveredColor={length ? '#aeaeae' : '#04B054'} />
			</Footer>
		</Div>
	);
};
