import { useEffect, useState } from 'react';
import {
	Dropdown,
	IconWrap,
	RemoveIcon,
	Placeholder,
	ArrowDownIcon,
} from './style';

export default ({ menu, changeValue, defaultValue }) => {
	const [active, setActive] = useState(false);
	const [value, setValue] = useState(undefined);
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
	};
	const menuList = (
		<Dropdown.Menu active={active} length={menu.length > 10}>
			{menu &&
				menu.length > 0 &&
				menu.map((item) => (
					<Dropdown.MenuItem
						key={item.value}
						onClick={() => handleSelect(item.value)}
					>
						{item.label}
					</Dropdown.MenuItem>
				))}
		</Dropdown.Menu>
	);

	return (
		<Dropdown active={active} onClick={() => setActive(!active)}>
			{value !== undefined ? (
				<Dropdown.Title>{value}</Dropdown.Title>
			) : (
				<Placeholder>Iltimos, tanlang</Placeholder>
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
