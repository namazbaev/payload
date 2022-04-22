import React, { useState } from 'react'
import { Container, IconSection, Title, Description, Button } from './style.js'
const Popup = ({ active, children }) => {
    return (
        <Container active={active ? active : ''}>
            <IconSection>
                IconSection
            </IconSection>
            <Title>Tabriklaymiz</Title>
            <Description>
                Toʻlov muvaffaqiyatli yakunlandi.Bizning xizmatlarimizdan foydalanganiz
                uchun tashakkur !</Description>
            {children}
            <Button>
                Bosh sahifa
            </Button>
        </Container>
    )
}

export default Popup