import { CARDPAY } from 'routes/route';
import Select from 'components/Select';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { districts, numberKeyboard } from 'utils/json';
import LinkButton from 'components/Buttons/LinkButton';
import { Format, Formatting } from 'styles/globalStyles';
import {
	Div,
	Logo,
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
import { Placeholder } from 'components/Select/style';

export const Electricity = () => {
	const { t } = useTranslation();
	const types = {
		code: 'code',
		phone: 'phone',
		select: 'select',
		uniqeNumber: 'uniqeNumber',
	};
	const phoneCode = '+998';
	const [code, setCode] = useState('');
	const [value, setValue] = useState('');
	const [phone, setPhone] = useState(phoneCode);
	const [uniqeNumber, setUniqueNumber] = useState('');
	const [selectedType, setSelectedType] = useState('');
	const onChangeNumber = (value) => {
		if (selectedType === types.code) {
			if (code.length >= 5) return;
			setCode((prev) => prev + value);
		}
		if (selectedType === types.phone) {
			if (phone.length >= 13) return;
			setPhone((prev) => prev + value);
		}
		if (selectedType === types.uniqeNumber) {
			if (uniqeNumber.length >= 10) return;
			setUniqueNumber((prev) => prev + value);
		}
	};
	const removeChar = () => {
		if (selectedType === types.code) {
			if (code === '') return;
			const value = code.slice(0, -1);
			setCode(value);
		}
		if (selectedType === types.phone) {
			if (phone.length !== 4) {
				const value = phone.slice(0, -1);
				setPhone(value);
			}
		}
		if (selectedType === types.uniqeNumber) {
			if (uniqeNumber === '') return;
			const value = uniqeNumber.slice(0, -1);
			setUniqueNumber(value);
		}
	};
	const clearNumbers = () => {
		if (selectedType === types.code) {
			setCode('');
		}
		if (selectedType === types.phone) {
			setPhone(phoneCode);
		}
		if (selectedType === types.uniqeNumber) {
			setUniqueNumber('');
		}
	};
	const fromData = { code, phone, value, uniqeNumber };
	const changeActive = (type) => setSelectedType(type);
	const onSelect = useCallback((val) => setValue(val), [value]);
	return (
		<Div>
			<Logo>LOGO</Logo>
			<DetailsContainer>
				<DetailsInfo>
					<Select
						menu={districts}
						defaultValue={value}
						changeValue={onSelect}
						active={selectedType === 'selec'}
						onClick={() => changeActive('select')}
					/>
					<Formatting
						size='30px'
						active={selectedType === 'code'}
						onClick={() => changeActive('code')}
					>
						{code === '' ? <Placeholder>23234</Placeholder> : code}
					</Formatting>
					<Formatting
						size='30px'
						active={selectedType === 'uniqeNumber'}
						onClick={() => changeActive('uniqeNumber')}
					>
						{uniqeNumber === '' ? (
							<Placeholder>{t('personal_number')}</Placeholder>
						) : (
							uniqeNumber
						)}
					</Formatting>
					<Formatting size='30px'
						active={selectedType === 'phone'}
						onClick={() => changeActive('phone')}
					>
						{phone.length === 4 ? (
							<Placeholder>{t('phone_for_communication')}</Placeholder>
						) : (
							<Format size='30px'
							format='+### ## ### ## ##'
							value={phone} displayType='text' />
						)}
					</Formatting>
					<InfoText>
						<Text>
							<WarningText> {t('warning')}</WarningText> {t('district_warning')}
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
				<LinkButton path={CARDPAY} state={fromData} text={t('next')} color='#00C35A' />
			</Footer>
		</Div>
	);
};
