import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import {
	Dropdown,
	IconWrap,
	RemoveIcon,
	Placeholder,
	ArrowDownIcon,
} from './style';

export default ({ menu, changeValue, placeholder, defaultValue, ...props }) => {
	const menuRef = useRef(null);
	const { t } = useTranslation();
	const useOutsideAlerter = (ref) => {
		useEffect(() => {
			const handleClickOutside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					setActive(false);
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () =>
				document.removeEventListener('mousedown', handleClickOutside);
		}, [ref]);
	};
	useOutsideAlerter(menuRef);
	const [active, setActive] = useState(false);
	const [value, setValue] = useState(undefined);
	const [selectedActive, setSelectedActive] = useState(false);
	useEffect(() => {
		if (defaultValue) {
			const selected =
				menu && menu.length > 0
					? menu.filter((item) => item.value === defaultValue)[0]?.label
					: defaultValue;
			setValue(selected);
		} else {
			setValue(undefined);
		}
	}, [defaultValue, menu]);
	const handleSelect = (value) => {
		setActive(false);
		changeValue(value);
		setSelectedActive(value);
	};
	const menuList = (
		<Dropdown.Menu active={active} length={menu.length > 10}>
			{menu &&
				menu.length > 0 &&
				menu.map((item) => (
					<Dropdown.MenuItem
						key={item.value}
						active={selectedActive === item.value}
						onClick={() => handleSelect(item.value)}>
						{item.label}
					</Dropdown.MenuItem>
				))}
		</Dropdown.Menu>
	);

	return (
		<Dropdown {...props}
			ref={menuRef} active={active}
			onClick={() => setActive(!active)}>
			{value !== undefined ? (
				<Dropdown.Title>{value}</Dropdown.Title>
			) : (
				<Placeholder>{placeholder ? placeholder : t('please_select')}</Placeholder>
			)}
			{menuList}
			<IconWrap>
				{value === undefined ? (
					<ArrowDownIcon active={active ? 'true' : ''} />
				) : (
					<RemoveIcon onClick={() => setValue(undefined)} />
				)}
			</IconWrap>
		</Dropdown>
	);
};
