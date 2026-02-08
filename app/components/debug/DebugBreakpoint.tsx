import styles from './DebugBreakpoint.module.scss';

export function DebugBreakpoint() {
    return (
        <div className={styles.debugBreakpoint}>
            <div className={styles.mobile}>M</div>
            <div className={styles.mobileLandscape}>ML</div>
            <div className={styles.tablet}>T</div>
            <div className={styles.tabletLandscape}>TL</div>
            <div className={styles.desktop}>D</div>
            <div className={styles.desktopWide}>DW</div>
        </div>
    );
}
