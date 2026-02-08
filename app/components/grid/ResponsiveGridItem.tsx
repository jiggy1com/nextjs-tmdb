import styles from '@components/grid/ResponsiveGridItem.module.scss';
import { ReactNode } from 'react';

type ResponsiveGridItemProps = {
    children: ReactNode;
    mobile?: number;
    mobileLandscape?: number;
    tablet?: number;
    tabletLandscape?: number;
    desktop?: number;
    desktopWide?: number;
};

export function ResponsiveGridItem({
    children,
    mobile,
    mobileLandscape,
    tablet,
    tabletLandscape,
    desktop,
    desktopWide,
}: ResponsiveGridItemProps) {
    const getClassNames = () => {
        const classNames: string[] = [];

        if (mobile) {
            classNames.push(styles[`mobile-` + mobile]);
        }

        if (mobileLandscape) {
            classNames.push(styles['mobileLandscape-' + mobileLandscape]);
        }

        if (tablet) {
            classNames.push(styles['tablet-' + tablet]);
        }

        if (tabletLandscape) {
            classNames.push(styles['tabletLandscape-' + tabletLandscape]);
        }

        if (desktop) {
            classNames.push(styles['desktop-' + desktop]);
        }

        if (desktopWide) {
            classNames.push(styles['desktopWide-' + desktopWide]);
        }

        return classNames.join(' ');
    };

    return <div className={styles.gridItem + ' ' + getClassNames()}>{children}</div>;
}
