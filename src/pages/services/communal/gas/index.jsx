import { CARDPAY } from 'routes/route';
import Select from 'components/Select';
import RegionSelect from 'components/Select';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Formatting } from 'styles/globalStyles';
import LinkButton from 'components/Buttons/LinkButton';
import { regions, districts, numberKeyboard } from 'utils/json';
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

export const Gas = () => {
	const { t } = useTranslation();
	const [region, setRegion] = useState('');
	const [district, setDistrict] = useState('');
	const [uniqeNumber, setUniqueNumber] = useState('');
	const [selectedType, setSelectedType] = useState('');
	const onChangeNumber = (value) => {
		if (uniqeNumber.length >= 10) return;
		setUniqueNumber((prev) => prev + value);
	};
	const removeChar = () => {
		if (uniqeNumber === '') return;
		const value = uniqeNumber.slice(0, -1);
		setUniqueNumber(value);
	};
	const clearNumbers = () => setUniqueNumber('');
	const fromData = { region, district, uniqeNumber };
	const changeActive = (type) => setSelectedType(type);
	const onSelectRegion = useCallback((val) => setRegion(val), [region]);
	const onSelectDistrict = useCallback((val) => setDistrict(val), [district]);
	return (
		<Div>
			<Logo>LOGO</Logo>
			<DetailsContainer>
				<DetailsInfo>
					<RegionSelect
						menu={regions}
						defaultValue={region}
						changeValue={onSelectRegion}
						active={selectedType === 'selec'}
						onClick={() => changeActive('select')}
					/>
					<br />
					<Select
						menu={districts}
						defaultValue={district}
						changeValue={onSelectDistrict}
						active={selectedType === 'selec'}
						onClick={() => changeActive('select')}
					/>
					<Formatting
						size='30px'
						marginTop='20px'
						active={selectedType === 'uniqeNumber'}
						onClick={() => changeActive('uniqeNumber')}
					>
						{uniqeNumber === '' ? (
							<Placeholder>{t('personal_number')}</Placeholder>
						) : (
							uniqeNumber
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
				<LinkButton
					path={CARDPAY}
					state={fromData}
					text={t('next')}
					color='#00C35A'
				/>
			</Footer>
		</Div>
	);
};
