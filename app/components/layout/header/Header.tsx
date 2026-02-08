import { Nav } from '@components/layout/nav/Nav';

export function Header() {
    return (
        <header
            style={{
                zIndex: 9999,
            }}>
            <Nav />
        </header>
    );
}
