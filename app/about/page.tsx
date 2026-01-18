import { ContainerFluid } from '@components/container/ContainerFluid';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';

export default function AboutPage() {
    return (
        <section>
            <ContainerFluid>
                jumbotron
            </ContainerFluid>
            <Container>
                <Heading as="h1">About</Heading>
                <p>this is a test</p>
            </Container>
        </section>
    );
}
