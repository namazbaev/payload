import { CARDPAY } from 'routes/route';
import Select from 'components/Select';
import { useTranslation } from 'react-i18next';
import { useState, useId, useCallback } from 'react';
import { districts, numberKeyboard } from 'utils/json';
import LinkButton from 'components/Buttons/LinkButton';
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

export default function () {
	const { t } = useTranslation();
	const [value, setValue] = useState('');
	const [number, setNumber] = useState('');
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
	const id = useId();
	const onSelect = useCallback((val) => setValue(val), [value]);
	return (
		<Div>
			<DetailsContainer>
				<DetailsInfo>
					<Select
						menu={districts}
						defaultValue={value}
						changeValue={onSelect}
					/>
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
}
