import React from 'react';
import styles from './MainInterior.module.scss';
export function MainInterior({ children }: { children: React.ReactNode }) {
    return <main className={styles.mainInterior}>{children}</main>;
}
