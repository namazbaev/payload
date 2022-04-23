import React, { useState } from 'react'
import { Container, IconSection, More, Icon, Title, BackDrop, Description, Button } from './style.js'
const Popup = ({ active, setActive, children }) => {
    return (
        <BackDrop active={active}>
            <Container active={active ? active : ''}>
                <IconSection>
                    <Icon />
                </IconSection>
                <Title>Tabriklaymiz</Title>
                <More>
                    <Description>
                        Toʻlov muvaffaqiyatli yakunlandi. Bizning xizmatlarimizdan foydalanganingiz
                        uchun tashakkur!
                    </Description>
                </More>
                {children}
                <Button onClick={() => setActive(false)}>
                    Bosh sahifa
                </Button>
            </Container>
        </BackDrop>
    )
}

export default Popup