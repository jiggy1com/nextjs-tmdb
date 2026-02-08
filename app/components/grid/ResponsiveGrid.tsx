import styles from '@components/grid/ResponsiveGrid.module.scss';
import { ReactNode } from 'react';

type ResponsiveGridProps = {
    children: ReactNode;
    className?: string;
};

export function ResponsiveGrid({ children, className }: ResponsiveGridProps) {
    return <div className={styles.grid + ' ' + className}>{children}</div>;
}
