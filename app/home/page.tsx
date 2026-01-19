import { Container } from '@components/container/Container';
import { ContainerFluid } from '@components/container/ContainerFluid';
import { Heading } from '@components/text/Heading';
import Link from 'next/link';

export default function HomePage() {
    const p = `
    This project uses NextJS with App Router, TypeScript, GraphQL, Apollo Server, Apollo Client.
    TailwindCSS is used for normalizing the styling, but most CSS is custom.
    The GraphQL resolvers use themoviedb.org open API as the datasource.
    Ok, that's enough for now. Start browsing!`;

    return (
        <section>
            <ContainerFluid>
                <pre></pre>
            </ContainerFluid>
            <Container>
                <Heading as="h1">TMDB with NextJS/React</Heading>
                <Heading as={'h2'}>Just a little project by Joe Velez</Heading>
                <Heading as={'h3'}>Under Development</Heading>
                <p>{p}</p>
                <p>
                    You can view the code on{' '}
                    <Link href={'https://github.com/jiggy1com/nextjs-tmdb'} target={'_blank'}>
                        https://github.com/jiggy1com/nextjs-tmdb
                    </Link>
                </p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </Container>
        </section>
    );
}
