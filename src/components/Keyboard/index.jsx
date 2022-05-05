import { useState, memo, useCallback } from 'react';
import { Container, Row, Key, ShiftIcon, Delete } from "./style";

const Keyboard = ({ setKey, removeChar }) => {
    const [click, setClick] = useState(false);
    const textCase = click ? click : ''
    const onChangeText = () => setClick(!click)
    const changeKey = useCallback((value) => setKey(prev => prev + value), []);
    return (
        <Container>
            <Row>
                <Key onClick={() => changeKey('1')}>1</Key>
                <Key onClick={() => changeKey('2')}>2</Key>
                <Key onClick={() => changeKey('3')}>3</Key>
                <Key onClick={() => changeKey('4')}>4</Key>
                <Key onClick={() => changeKey('5')}>5</Key>
                <Key onClick={() => changeKey('6')}>6</Key>
                <Key onClick={() => changeKey('7')}>7</Key>
                <Key onClick={() => changeKey('8')}>8</Key>
                <Key onClick={() => changeKey('9')}>9</Key>
                <Key onClick={() => changeKey('0')}>0</Key>
            </Row>
            <Row>
                <Key onClick={() => changeKey('q')} size={textCase} flex="0.8">q</Key>
                <Key onClick={() => changeKey('w')} size={textCase} flex="0.8">w</Key>
                <Key onClick={() => changeKey('e')} size={textCase} flex="0.8">e</Key>
                <Key onClick={() => changeKey('r')} size={textCase} flex="0.8">r</Key>
                <Key onClick={() => changeKey('t')} size={textCase} flex="0.8">t</Key>
                <Key onClick={() => changeKey('y')} size={textCase} flex="0.8">y</Key>
                <Key onClick={() => changeKey('u')} size={textCase} flex="0.8">u</Key>
                <Key onClick={() => changeKey('i')} size={textCase} flex="0.7">i</Key>
                <Key onClick={() => changeKey('o')} size={textCase} flex="0.7">o</Key>
                <Key onClick={() => changeKey('p')} size={textCase} flex="0.8">p</Key>
                <Key onClick={() => changeKey('.')} flex="0.8">.</Key>
            </Row>
            <Row>
                <Key onClick={() => changeKey('@')} flex="0.8">@</Key>
                <Key onClick={() => changeKey('a')} size={textCase} flex="0.8">a</Key>
                <Key onClick={() => changeKey('s')} size={textCase} flex="0.8">s</Key>
                <Key onClick={() => changeKey('d')} size={textCase} flex="0.8">d</Key>
                <Key onClick={() => changeKey('f')} size={textCase} flex="0.8">f</Key>
                <Key onClick={() => changeKey('g')} size={textCase} flex="0.8">g</Key>
                <Key onClick={() => changeKey('h')} size={textCase} flex="0.8">h</Key>
                <Key onClick={() => changeKey('j')} size={textCase} flex="0.7">j</Key>
                <Key onClick={() => changeKey('k')} size={textCase} flex="0.8">k</Key>
                <Key onClick={() => changeKey('l')} size={textCase} flex="0.7">l</Key>
                <Key onClick={() => changeKey('_')} flex="0.8">_</Key>
                <Key onClick={() => changeKey('-')} flex="0.8">-</Key>
                <Key onClick={() => changeKey('=')} flex="0.8">=</Key>
            </Row>
            <Row>
                <Key onClick={onChangeText} size={textCase}><ShiftIcon /></Key>
                <Key onClick={() => changeKey('z')} size={textCase} flex="0.8">z</Key>
                <Key onClick={() => changeKey('x')} size={textCase} flex="0.8">x</Key>
                <Key onClick={() => changeKey('c')} size={textCase} flex="0.8">c</Key>
                <Key onClick={() => changeKey('v')} size={textCase} flex="0.8">v</Key>
                <Key onClick={() => changeKey('b')} size={textCase} flex="0.8">b</Key>
                <Key onClick={() => changeKey('n')} size={textCase} flex="0.7">n</Key>
                <Key onClick={() => changeKey('m')} size={textCase} flex="0.7">m</Key>
                <Key onClick={() => changeKey('/')} flex="0.8">/</Key>
                <Key onClick={() => removeChar()}><Delete /></Key>
            </Row>
        </Container>
    )
}
export default memo(Keyboard)