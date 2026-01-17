'use client';
import { NavItem, NavItemType } from '@components/layout/nav/NavItem';
import styles from './Nav.module.scss';
import { useState } from 'react';
import { fontRockSalt } from '@/app/utils/fonts';
import Link from 'next/link';

export type ToggleFunctionType = () => void;
export function Nav() {
    const [state, setState] = useState({
        menuOpen: false,
    });

    const title = `Joe's TMBD API Project`;

    const navList = [
        {
            name: 'Movies',
            href: '/movie',
            children: [
                { name: 'Latest', href: '/movie/latest' },
                { name: 'Now Playing', href: '/movie/now-playing' },
                { name: 'Popular', href: '/movie/popular' },
                { name: 'Top Rated', href: '/movie/top-rated' },
                { name: 'Upcoming', href: '/movie/upcoming' },
            ],
        },
        {
            name: 'TV',
            href: '/tv',
            children: [
                { name: 'Airing Today', href: '/tv/airing-today' },
                { name: 'On The Air', href: '/tv/on-the-air' },
                { name: 'Popular', href: '/tv/popular' },
                { name: 'Top Rated', href: '/tv/top-rated' },
            ],
        },
        { name: 'About', href: '/about' },
    ] as NavItemType[];

    const toggleMenuAction: ToggleFunctionType = () => {
        setState((prevState) => {
            return {
                ...prevState,
                menuOpen: !prevState.menuOpen,
            };
        });
    };

    const navClass = styles.nav + ' ' + (state.menuOpen ? styles.menuOpen : '');
    const navListClass = styles.navList + ' ' + (state.menuOpen ? styles.menuOpen : '');

    return (
        <nav className={navClass}>
            <div className={styles.hamburger} onClick={toggleMenuAction}>
                <span
                    className={`material-symbols-outlined ${state.menuOpen ? styles.goOff : styles.goOn}`}>
                    menu
                </span>
                {/*<span*/}
                {/*    className={`material-symbols-outlined ${state.menuOpen ? styles.goOn : styles.goOff}`}>*/}
                {/*    menu_open*/}
                {/*</span>*/}
            </div>
            <div className={styles.navTitle}>
                <Link href={'/'}>
                    <span className={fontRockSalt.className}>{title}</span>
                </Link>
            </div>
            <div className={styles.break}></div>
            <ul className={navListClass}>
                <div className={styles.search}>
                    <input
                        type={'text'}
                        name={'search'}
                        placeholder={'Search...'}
                        className={styles.searchInput}
                    />
                    <button>GO</button>
                </div>
                {navList.map((navItem: NavItemType, idx: number) => {
                    return (
                        <NavItem key={idx} navItem={navItem} toggleMenuAction={toggleMenuAction} />
                    );
                })}
            </ul>
        </nav>
    );
}
