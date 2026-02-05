import styles from './Grid.module.scss';
import { ReactNode } from 'react';

type GridProps = {
    children: ReactNode;
    className?: string;
};

export function Grid({ children, className }: GridProps) {
    return <div className={styles.grid + ' ' + className}>{children}</div>;
}
