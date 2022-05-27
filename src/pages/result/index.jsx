import React from 'react';
import { useTranslation } from 'react-i18next';
import QrCodeImage from 'assets/images/other/qrcode.svg';
import {
	Item,
	List,
	Title,
	Image,
	Content,
	ListWrap,
	ImageWrap,
	Container,
} from './style';
const QRCode = () => {
	const { t } = useTranslation();
	return (
		<Container>
			<Title>{t('successfully')}</Title>
			<Content>
				<ImageWrap>
					<Image src={QrCodeImage} />
				</ImageWrap>
				<ListWrap>
					<List>
						<Item>{t('receipt_number')}</Item>
						<Item>{t('provider')}</Item>
						<Item>{t('phone')}</Item>
						<Item>{t('time')}</Item>
						<Item>{t('paid')}</Item>
						<Item>{t('balance_replenished')}</Item>
					</List>
					<List>
						<Item>3757457</Item>
						<Item>Телефон</Item>
						<Item>998 88 890 90 10</Item>
						<Item>08.15.2022, 00:22:27</Item>
						<Item>300 000 cyм </Item>
						<Item>300 000 cyм</Item>
					</List>
				</ListWrap>
			</Content>
		</Container>
	);
};
export default QRCode;
