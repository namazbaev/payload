import { langList } from 'i18n/config';
import Dropdown from 'components/Dropdown';
import { LinkTo } from 'styles/globalStyles';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { searchAction } from 'redux/slices/search';
import { useSelector, useDispatch } from 'react-redux';
import {
	Wrap,
	Logo,
	Drop,
	Input,
	Number,
	Search,
	Terminal,
	Container,
	SearchIcons,
	Placeholder,
	LeftSection,
	RightSection,
	TerminalWrap,
} from './style';
export const Header = () => {
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();
	const { toggle } = searchAction;
	const currentLang = localStorage.getItem('lang') || 'uz';
	const [lang, setLang] = useState(currentLang);
	const text = useSelector((state) => state.search.text);
	const isShow = useSelector((state) => state.search.isShowKeyboard);
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
	const onShowClick = () => dispatch(toggle(!isShow));
	return (
		<Container>
			<LeftSection>
				<TerminalWrap>
					<Terminal>{t('terminal')}</Terminal>
					<Number>№12345678</Number>
				</TerminalWrap>
				<Drop />
				<Wrap>
					<Terminal>{t('support_service')}</Terminal>
					<Number>+998 888 62 62</Number>
				</Wrap>
			</LeftSection>
			<LinkTo to='/'>
				<Logo />
			</LinkTo>
			<RightSection>
				<Search>
					<Input onClick={() => onShowClick()}>
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
	);
};
