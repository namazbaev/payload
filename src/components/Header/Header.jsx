import { langList } from 'i18n/config';
import Dropdown from 'components/Dropdown';
import { mobileoperators } from 'utils/json';
import { LinkTo } from 'styles/globalStyles';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
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
import { MOBILEOPERATOR } from 'routes/route';

export const Header = () => {
	const location = useLocation();
	const { t, i18n } = useTranslation();
	const currentLang = localStorage.getItem('lang') || 'uz';
	const [text, setText] = useState('');
	const [show, setShow] = useState(false);
	const [filtered, setFiltered] = useState([]);
	const [lang, setLang] = useState(currentLang);

	useEffect(() => {
		setText(text);
	}, [text]);
	useEffect(() => {
		setFiltered(() =>
			mobileoperators.filter((item) =>
				item.name.toLowerCase().includes(text.toLowerCase()),
			),
		);
	}, [text]);
	const removeChar = () => {
		if (text === '') return;
		const value = text.slice(0, -1);
		setText(value);
	};
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
	const content = filtered.map(({ img, name }) => (
		<LinkTo
			key={name}
			onClick={() => setShow(false)}
			to={`${MOBILEOPERATOR}/${name}`}
		>
			<Content>
				<CardImage prop={location.pathname} img={img} />
			</Content>
		</LinkTo>
	));
	return (
		<>
			<Container>
				<LeftSection show={show}>
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
					<Logo show={show} />
				</LinkTo>
				<RightSection>
					<Search>
						<Input show={show} onClick={() => setShow(!show)}>
							<Placeholder>{text === '' ? 'Поиск' : text}</Placeholder>
						</Input>
						<SearchIcons show={show} />
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
						<Keyboard setKey={setText} removeChar={removeChar} />
					</WrapButton>
				</KeyboardWrap>
			)}
		</>
	);
};
