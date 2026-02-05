import styles from './Card.module.scss';
import { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
};

export function Card({ children }: CardProps) {
    return <div className={styles.card}>{children}</div>;
}
