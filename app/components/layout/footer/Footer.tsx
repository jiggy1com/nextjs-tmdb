import Link from 'next/link';
import styles from './Footer.module.scss';
export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © The Open Movie Database API Project by{' '}
                <Link href={'https://www.josephadamvelez.com'} target={'_blank'}>
                    Joseph Adam Velez
                </Link>
            </p>
        </footer>
    );
}
