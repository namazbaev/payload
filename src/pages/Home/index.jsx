import Card from 'components/Card';
import Keyboard from 'components/Keyboard';
import 'react-multi-carousel/lib/styles.css';
import { mobileoperators } from 'utils/json';
import { LinkTo } from 'styles/globalStyles';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MobileOperators from 'components/Operator';
import { searchAction } from 'redux/slices/search';
import { useSelector, useDispatch } from 'react-redux';
import LinkButton from 'components/Buttons/LinkButton';
import { useState, useEffect, useCallback } from 'react';
import {
	TV,
	WALLET,
	PROVIDERS,
	COMMUNALS,
	CARD_DETAIL,
	MOBILEOPERATOR,
} from 'routes/route';
import {
	Hr,
	TVS,
	Home,
	Taxi,
	Fire,
	Cast,
	Heart,
	Cards,
	Globe,
	Trello,
	Wallet,
	UzCard,
	Medical,
	PayText,
	Service,
	HumoCard,
	Services,
	CardItem,
	CardName,
	Container,
	CardNumber,
	ExpiryDate,
	Smartphone,
	Graduation,
	MainSection,
	UzcardLogos,
	ServiceName,
	KeyboardWrap,
	HumoLogoLogos,
} from './style';
import { Wrap, Content, CardImage } from 'components/Card/style';
export default () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const location = useLocation();
	const [key, setKey] = useState('');
	const { writeText, removeText } = searchAction;
	const text = useSelector((state) => state.search.text);
	const isShow = useSelector((state) => state.search.isShowKeyboard);
	useEffect(() => {
		setKey(key);
		dispatch(writeText(key));
	}, [key]);
	const removeChar = useCallback(() => {
		setKey(text);
		dispatch(removeText());
	}, [key]);
	const content = mobileoperators.map(({ img, name }) => (
		<LinkTo key={name} to={`${name}`}>
			<Content>
				<CardImage prop={location.pathname} img={img} />
			</Content>
		</LinkTo>
	));
	return (
		<Container>
			<MobileOperators />
			<Hr />
			<MainSection>
				<Cards>
					<LinkTo to={`${CARD_DETAIL}/uzcard`}>
						<CardItem>
							<UzCard />
							<UzcardLogos />
							<CardNumber>8600 **** **** ****</CardNumber>
							<CardName>shaxzod namazbaev</CardName>
							<ExpiryDate>12/23</ExpiryDate>
							<PayText>{t('replenishment_uzcard')}</PayText>
						</CardItem>
					</LinkTo>
					<LinkTo to={`${CARD_DETAIL}/humo`}>
						<CardItem>
							<HumoCard />
							<HumoLogoLogos />
							<CardNumber>9860 **** **** ****</CardNumber>
							<CardName>shaxzod namazbaev</CardName>
							<ExpiryDate>01/25</ExpiryDate>
							<PayText>{t('replenishment_humo')}</PayText>
						</CardItem>
					</LinkTo>
				</Cards>
				<Services>
					<LinkTo to={MOBILEOPERATOR}>
						<Service>
							<Smartphone />
							<ServiceName>{t('mobile_operators')}</ServiceName>
						</Service>
					</LinkTo>
					<LinkTo to={TV}>
						<Service>
							<TVS />
							<ServiceName>{t('online_tv')}</ServiceName>
						</Service>
					</LinkTo>
					<LinkTo to={PROVIDERS}>
						<Service>
							<Globe />
							<ServiceName>{t('internet_providers')}</ServiceName>
						</Service>
					</LinkTo>
					<Service>
						<Trello />
						<ServiceName>{t('advertisement')}</ServiceName>
					</Service>
					<LinkTo to={WALLET}>
						<Service>
							<Wallet />
							<ServiceName>{t('electronic_wallet')}</ServiceName>
						</Service>
					</LinkTo>
					<Service>
						<Heart />
						<ServiceName>{t('charity')}</ServiceName>
					</Service>
					<Service>
						<Home />
						<ServiceName>{t('bank_loans')}</ServiceName>
					</Service>
					<Service>
						<Cast />
						<ServiceName>{t('online_services')}</ServiceName>
					</Service>
					<LinkTo to={COMMUNALS}>
						<Service>
							<Fire />
							<ServiceName>{t('utilies_payment')}</ServiceName>
						</Service>
					</LinkTo>
					<Service>
						<Graduation />
						<ServiceName>{t('education')}</ServiceName>
					</Service>
					<Service>
						<Medical />
						<ServiceName>{t('medicine')}</ServiceName>
					</Service>
					<Service>
						<Taxi />
						<ServiceName>{t('taxi')}</ServiceName>
					</Service>
				</Services>
			</MainSection>
			{/* <KeyboardWrap show={isShow}>
				<Keyboard setKey={setKey} removeChar={removeChar} />
				<LinkButton path='/' text={t('main_page')} />
				<Wrap>{content}</Wrap>
			</KeyboardWrap> */}
		</Container>
	);
};
