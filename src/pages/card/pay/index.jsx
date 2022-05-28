import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Amount, Format, Formatting } from 'styles/globalStyles';
import {
	Hr,
	Div,
	FIO,
	Label,
	Image,
	Footer,
	DataInfo,
	ImageWrap,
	Container,
	FooterBtn,
	DataInfoItem,
} from './style';
import Popup from 'components/Popup';
export default () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { t } = useTranslation();
	const [amount, setAmount] = useState('15000');
	const [active, setActive] = useState(false);
	const status = Math.random() < 0.5;
	const total = amount !== '' ? amount : 0;
	const phone = location.state !== null ? location.state : '';
	const goBack = () => {
		navigate(-1);
		setActive(!active);
	};
	const summa = amount.length > 0 ? amount : 0;
	return (
		<>
			<Popup active={active} setActive={setActive} status={status} />
			<Div isShow={active}>
				<Container>
					<ImageWrap>
						<Image />
					</ImageWrap>
					<Formatting>
						<Format value={summa} displayType='text' thousandSeparator={true} />{' '}
						{t('currency')}
					</Formatting>
					<Hr />
					<DataInfo>
						<DataInfoItem>
							<Label>{t('card_number')}</Label>
							<Phone
								value={phone}
								displayType='text'
								format='#### #### #### ####'
							/>
						</DataInfoItem>
						<DataInfoItem>
							<Label>{t('card_holder_name')}</Label>
							<FIO>Ismoil Erkinov</FIO>
						</DataInfoItem>
						<DataInfoItem>
							<Label>{t('transfer_amount')}</Label>
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
					<FooterBtn onClick={goBack}>{t('back')}</FooterBtn>
					<FooterBtn onClick={() => navigate('/')}>{t('main_page')}</FooterBtn>
					<FooterBtn color='#00C35A' onClick={() => setActive(true)}>
						{t('pay')}
					</FooterBtn>
				</Footer>
			</Div>
		</>
	);
};
