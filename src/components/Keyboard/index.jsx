import { useState } from 'react';
import { Container, Row, Key, ShiftIcon, Delete } from "./style";

export default () => {
    const [click, setClick] = useState(false);
    const onChangeText = () => setClick(!click)
    const textCase = click ? click : ''
    return (
        <Container>
            <Row>
                <Key>1</Key>
                <Key>2</Key>
                <Key>3</Key>
                <Key>4</Key>
                <Key>5</Key>
                <Key>6</Key>
                <Key>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Key>0</Key>
            </Row>
            <Row>
                <Key size={textCase} flex="0.8">q</Key>
                <Key size={textCase} flex="0.8">w</Key>
                <Key size={textCase} flex="0.8">e</Key>
                <Key size={textCase} flex="0.8">r</Key>
                <Key size={textCase} flex="0.8">t</Key>
                <Key size={textCase} flex="0.8">y</Key>
                <Key size={textCase} flex="0.8">u</Key>
                <Key size={textCase} flex="0.7">i</Key>
                <Key size={textCase} flex="0.7">o</Key>
                <Key size={textCase} flex="0.8">p</Key>
                <Key flex="0.8">.</Key>
            </Row>
            <Row>
                <Key flex="0.8">@</Key>
                <Key size={textCase} flex="0.8">a</Key>
                <Key size={textCase} flex="0.8">s</Key>
                <Key size={textCase} flex="0.8">d</Key>
                <Key size={textCase} flex="0.8">f</Key>
                <Key size={textCase} flex="0.8">g</Key>
                <Key size={textCase} flex="0.8">h</Key>
                <Key size={textCase} flex="0.7">j</Key>
                <Key size={textCase} flex="0.8">k</Key>
                <Key size={textCase} flex="0.7">l</Key>
                <Key flex="0.8">_</Key>
                <Key flex="0.8">-</Key>
                <Key flex="0.8">=</Key>
            </Row>
            <Row>
                <Key onClick={onChangeText} size={textCase}><ShiftIcon /></Key>
                <Key size={textCase} flex="0.8">z</Key>
                <Key size={textCase} flex="0.8">x</Key>
                <Key size={textCase} flex="0.8">c</Key>
                <Key size={textCase} flex="0.8">v</Key>
                <Key size={textCase} flex="0.8">b</Key>
                <Key size={textCase} flex="0.7">n</Key>
                <Key size={textCase} flex="0.7">m</Key>
                <Key flex="0.8">/</Key>
                <Key><Delete/></Key>
            </Row>
        </Container>
    )
}