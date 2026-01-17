import { ContainerFluid } from '@components/container/ContainerFluid';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';

export default function MoviePage() {
    return (
        <section>
            <ContainerFluid></ContainerFluid>
            <Container>
                <Heading as="h1">Movies</Heading>
                <p>this is a test</p>
            </Container>
        </section>
    );
}
