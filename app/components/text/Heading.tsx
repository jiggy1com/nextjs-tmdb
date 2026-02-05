import * as React from 'react';
import { fontMerienda, fontPlaywriteUSTrad, fontRockSalt } from '@/app/utils/fonts';
import styles from './Heading.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3';

type HeadingProps<T extends HeadingLevel> = {
    as?: T;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Heading<T extends HeadingLevel = 'h1'>({
    as,
    children,
    ...props
}: HeadingProps<T>) {
    const Component = as ?? 'h1';
    return (
        <Component {...props} className={fontMerienda.className + ' ' + styles.heading}>
            {children}
        </Component>
    );
}
