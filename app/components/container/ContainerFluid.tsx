import { ReactNode } from 'react';
import styles from './ContainerFluid.module.scss';
export function ContainerFluid({ children }: { children: ReactNode }) {
    return <div className={styles.containerFluid}>{children}</div>;
}
