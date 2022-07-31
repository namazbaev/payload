import Remove from 'assets/icons/x-icon.png';
import { List, Grid, GridItem, Div, Button } from "./style";
import { Container, Header, Content, Title } from "../info/style";
export default () => {
    const items = []
    for (let i = 0; i < 11; i++) {
        items.push(i)
    }
    return (
        <Container>
            <Header>
                <Title uppercase>список родственников допускаемы для управления тс</Title>
            </Header>
            <Content>
                <Grid>
                    <GridItem size="large">#</GridItem>
                    <GridItem size="large">Ф.И.О</GridItem>
                    <GridItem size="large">Степень родства</GridItem>
                    <GridItem size="large">Комманда</GridItem>
                </Grid>
                <List>
                {items.map((_, i) =>
                    <Grid key={i}>
                        <GridItem>{i + 1}</GridItem>
                        <GridItem>Nuraliyev Nurlan Umarbekovich</GridItem>
                        <GridItem>Не родственник</GridItem>
                        <GridItem>
                            <img width={24} height={24} src={Remove} alt="" />
                        </GridItem>
                    </Grid>)}
                </List>
                <Div>
                    <Button>+</Button>
                </Div>
            </Content>
        </Container>
    )
}