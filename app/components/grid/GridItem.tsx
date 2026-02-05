import styles from './GridItem.module.scss';
import { ReactNode } from 'react';

type GridItemProps = {
    children: ReactNode;
};

export function GridItem({ children }: GridItemProps) {
    return <div className={styles.gridItem}>{children}</div>;
}
