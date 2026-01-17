import { Container } from '@components/container/Container';
import { ContainerFluid } from '@components/container/ContainerFluid';
import { Heading } from '@components/text/Heading';

export default function HomePage() {
    return (
        <section>
            <ContainerFluid>
                <Heading as="h1">Welcome to the Home Page</Heading>
            </ContainerFluid>
            <Container>
                <p>this is a test</p>
            </Container>
        </section>
    );
}
