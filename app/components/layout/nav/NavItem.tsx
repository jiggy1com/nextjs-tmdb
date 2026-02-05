'use client';
import styles from './NavItem.module.scss';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import { ToggleFunctionType } from '@components/layout/nav/Nav';
import { useRouter } from 'next/navigation';

export type NavItemType = {
    name: string;
    href: string;
    children?: NavItemType[];
};

export function NavItem({
    navItem,
    toggleMenuAction,
}: {
    navItem: NavItemType;
    toggleMenuAction: ToggleFunctionType;
}) {
    const router = useRouter();

    const [state, setState] = useState({
        isHovered: false,
    });

    const handleOnMouseOver = () => {
        setState({ isHovered: true });
    };

    const handleOnMouseOut = () => {
        setState({ isHovered: false });
    };

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.target.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }));
        toggleMenuAction();
    };

    const hoverClass = state.isHovered ? styles.hover : '';

    const navItemClassList = [styles.navItem, hoverClass].join(' ').trim();

    return (
        <li
            className={navItemClassList}
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}>
            <Link href={navItem.href} className={styles.navLink} onClick={handleClick}>
                {navItem.name}
            </Link>
            {navItem.children && navItem.children.length > 0 && (
                <ul className={styles.navSubList}>
                    {navItem.children.map((childItem: NavItemType, idx: number) => (
                        <NavItem
                            key={idx}
                            navItem={childItem}
                            toggleMenuAction={toggleMenuAction}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}
