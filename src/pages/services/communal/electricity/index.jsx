import { CARDPAY } from 'routes/route';
import Select from 'components/Select';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { districts, numberKeyboard } from 'utils/json';
import LinkButton from 'components/Buttons/LinkButton';
import { Format, Formatting } from 'styles/globalStyles';
import {
	Hr,
	Div,
	Text,
	Drop,
	Delete,
	Number,
	Footer,
	Keyboard,
	InfoText,
	DetailsInfo,
	WarningText,
	DetailsKeyboard,
	DetailsContainer,
} from './style';

export const Electricity = () => {
	const { t } = useTranslation();
	const [code, setCode] = useState('2964547');
	const [value, setValue] = useState('');
	const [number, setNumber] = useState('');
	const [uniqeNumber, setUniqueNumber] = useState('Shaxsiy raqam');
	const onChangeNumber = (value) => {
		if (number.length >= 16) return;
		setNumber((prev) => prev + value);
	};
	const removeChar = () => {
		if (number === '') return;
		const value = number.slice(0, -1);
		setNumber(value);
	};
	const length = number.length !== 16;
	const clearNumbers = () => setNumber('');
	const fromCard = number.split(' ').join('');
	const onSelect = useCallback((val) => setValue(val), [value]);
	return (
		<Div>
			<div>LOGO</div>
			<DetailsContainer>
				<DetailsInfo>
					<Select
						menu={districts}
						defaultValue={value}
						changeValue={onSelect}
					/>
					<Formatting size='30px' fontWeight='500'>
						{code}
					</Formatting>
					<Formatting size='30px' fontWeight='500'>
						{uniqeNumber}
					</Formatting>
					<Formatting size='30px' fontWeight='500'>
						{Format}
					</Formatting>
					<InfoText>
						<Text>
							<WarningText> {t('warning')}</WarningText> {t('card_pay_warning')}
						</Text>
					</InfoText>
				</DetailsInfo>
				<Drop />
				<DetailsKeyboard>
					{numberKeyboard.map(({ key }) => (
						<Keyboard key={key} onClick={() => onChangeNumber(key)}>
							<Number>{key}</Number>
						</Keyboard>
					))}
					<Keyboard onClick={() => clearNumbers()}>
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
				<LinkButton
					path={CARDPAY}
					length={length}
					state={fromCard}
					text={t('next')}
					color={length ? '#aeaeae' : '#00C35A'}
					hoveredColor={length ? '#aeaeae' : '#04B054'}
				/>
			</Footer>
		</Div>
	);
};
