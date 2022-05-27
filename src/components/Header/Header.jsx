import { langList } from 'i18n/config';
import Dropdown from 'components/Dropdown';
import { mobileoperators } from 'utils/json';
import { LinkTo } from 'styles/globalStyles';
import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
	Logo,
	Drop,
	Input,
	Number,
	Search,
	Terminal,
	Container,
	WrapButton,
	SearchIcons,
	Placeholder,
	LeftSection,
	RightSection,
	TerminalWrap,
	WrapTerminal,
} from './style';
import Keyboard from 'components/Keyboard';
import { KeyboardWrap } from 'pages/home/style';
import LinkButton from 'components/Buttons/LinkButton';
import { Wrap, Content, CardImage } from 'components/Card/style';

export const Header = () => {
	const location = useLocation();
	const { t, i18n } = useTranslation();
	const currentLang = localStorage.getItem('lang') || 'uz';
	const [text, setText] = useState('');
	const [show, setShow] = useState(false);
	const [lang, setLang] = useState(currentLang);
	const changeLang = useCallback(
		(e) => {
			localStorage.setItem('lang', e);
			i18n.changeLanguage(e);
			setLang(e);
		},
		[lang],
	);
	const selected = langList.find((x) => x.value === currentLang);
	const langs = currentLang !== null ? selected.flag : langList[0].flag;
	const content = mobileoperators.map(({ img, name }) => (
		<LinkTo key={name} to={`${name}`}>
			<Content>
				<CardImage prop={location.pathname} img={img} />
			</Content>
		</LinkTo>
	));
	return (
		<>
			<Container>
				<LeftSection>
					<TerminalWrap>
						<Terminal>{t('terminal')}</Terminal>
						<Number>№12345678</Number>
					</TerminalWrap>
					<Drop />
					<WrapTerminal>
						<Terminal>{t('support_service')}</Terminal>
						<Number>+998 888 62 62</Number>
					</WrapTerminal>
				</LeftSection>
				<LinkTo to='/'>
					<Logo />
				</LinkTo>
				<RightSection>
					<Search>
						<Input onClick={() => setShow(!show)}>
							<Placeholder>{text === '' ? 'Поиск' : text}</Placeholder>
						</Input>
						<SearchIcons />
					</Search>
					<Dropdown
						menu={langList}
						position='right'
						prefixText={langs}
						defaultValue={lang}
						changeValue={changeLang}
					/>
				</RightSection>
			</Container>
			{show && (
				<KeyboardWrap show={show}>
					<Wrap>{content}</Wrap>
					<WrapButton>
						<LinkButton margin='0 0 15px 0' path='/' text={t('main_page')} />
						<Keyboard />
					</WrapButton>
				</KeyboardWrap>
			)}
		</>
	);
};
