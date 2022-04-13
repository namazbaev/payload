import React from 'react'
import Ucell from 'components/Operators/Ucell'
import Mobiuz from 'components/Operators/Mobiuz'
import Humans from 'components/Operators/Humans'
import Beeline from 'components/Operators/Beeline'
import Uztelecom from 'components/Operators/Uztelecom'
import Perfectum from 'components/Operators/Perfectum'
import { Container, Operators, Info, Wrap } from './style'
const Main = () => {
    return (
        <Container>
            <Info>Date</Info>
            <Operators>
                <Wrap>
                    <Humans />
                    <Beeline />
                    <Ucell />
                </Wrap>
                <Wrap>
                    <Uztelecom />
                    <Mobiuz />
                    <Perfectum />
                </Wrap>
            </Operators>
        </Container>
    )
}

export default Main