import { useState } from 'react';
import Popup from 'components/Popup';
import Keyboard from 'components/Keyboard';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FooterBtn } from 'pages/card/pay/style';
import LinkButton from 'components/Buttons/LinkButton';
import { Phone, Amount, Format, Formatting } from 'styles/globalStyles';
import {
	Hr,
	Div,
	Text,
	Image,
	Label,
	Footer,
	InfoText,
	DataInfo,
	Container,
	ImageWrap,
	DangerText,
	DataInfoItem,
} from './style';
export default () => {
	const location = useLocation();
	const { t } = useTranslation();
	const [amount, setAmount] = useState('');
	const [active, setActive] = useState(false);
	const removeChar = () => {
		if (amount === '') return;
		const value = amount.slice(0, -1);
		setAmount(value);
	};
	const length = amount === '';
	const status = Math.random() < 0.5;
	const total = amount !== '' ? amount : 0;
	const summa = amount.length > 0 ? amount : 0;
	const phone = location.state !== null ? location.state : '';
	return (
		<>
			<Popup
				status={status}
				setActive={setActive}
				active={active ? active : ''}
			/>
			<Div isShow={active}>
				<Container>
					<ImageWrap>
						<Image />
					</ImageWrap>
					<Formatting>
						<Format value={summa} displayType='text' thousandSeparator={true} />{' '}
						{t('currency')}
					</Formatting>
					<InfoText>
						<Text>
							<DangerText>{t('warning')}</DangerText> {t('standing')}
						</Text>
					</InfoText>
					<Hr />
					<DataInfo>
						<DataInfoItem>
							<Label>{t('phone')}</Label>
							<Phone
								value={phone}
								displayType='text'
								format='+### ## ### ## ##'
							/>
						</DataInfoItem>
						<DataInfoItem>
							<Label>{t('payment_amount')}</Label>
							<Amount
								value={total}
								displayType='text'
								thousandSeparator={true}
								suffix={` ${t('currency')}`}
							/>
						</DataInfoItem>
					</DataInfo>
				</Container>
				<Footer>
					<LinkButton path={-1} text={t('back')} />
					<LinkButton path='/' text={t('main_page')} />
					<FooterBtn
						disabled={length}
						onClick={() => setActive(true)}
						color={length ? '#D8D8D8' : '#00C35A'}
						hoveredColor={length ? '#D8D8D8' : '#04B054'}
					>
						{t('pay')}
					</FooterBtn>
				</Footer>
				<Keyboard setKey={setAmount} removeChar={removeChar} />
			</Div>
		</>
	);
};
