import React, { useEffect, useState } from 'react';
import { ArrowDownIcon, Dropdown } from './style';

export default (props) => {
    const { menu, position, prefixText, changeValue, defaultValue } = props;
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(undefined);

    useEffect(() => {
        if (defaultValue) {
            const selected = menu && menu.length > 0
                ? menu.filter((item) => item.value === defaultValue)[0].label
                : defaultValue;
            setValue(selected);
        } else {
            setValue(undefined);
        }
    }, [defaultValue, menu]);

    const handleSelect = (value) => {
        changeValue(value);
        setActive(false);
    };

    const menuList = (
        <Dropdown.Menu position={position} active={active}>
            {
                menu && menu.length > 0
                    ? menu.map((item) => (
                        <Dropdown.MenuItem
                            key={item.value}
                            onClick={() => handleSelect(item.value)}
                        >
                            {item.label}
                        </Dropdown.MenuItem>
                    ))
                    : ''
            }
        </Dropdown.Menu>
    );

    return (
        <Dropdown active={active} onClick={() => setActive(!active)}>
            <Dropdown.Title>
                {value ? `${prefixText && `${prefixText} `}${value}` : 'not selected'}
            </Dropdown.Title>
            <ArrowDownIcon />
            {menuList}
        </Dropdown>
    );
};
