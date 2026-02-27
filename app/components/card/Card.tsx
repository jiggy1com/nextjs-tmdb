import styles from './Card.module.scss';
import { ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
	addBorder?: boolean;
	addPadding?: boolean;
	className?: string;
	heading?: string;
	type?: string;
	isSidebar?: boolean;
	fullHeight?: boolean;
};

export function Card({
	children,
	className = 'noop',
	addBorder = false,
	addPadding = false,
	fullHeight = false,
	heading = '',
	isSidebar = false,
}: CardProps) {
	const getClassList = () => {
		const classList = [styles.card];

		if (className) {
			classList.push(styles[className] ?? '');
		}

		if (addBorder) {
			classList.push(styles.border);
		}

		if (fullHeight) {
			classList.push(styles.fullHeight);
		}

		if (isSidebar) {
			classList.push(styles.sidebar);
		}

		return classList.filter(Boolean).join(' ');
	};

	const cardInteriorClassList = addPadding ? styles.padding : '';

	return (
		<div className={getClassList()}>
			{heading && <div className={styles.cardHeading}>{heading}</div>}
			<div className={cardInteriorClassList}>{children}</div>
		</div>
	);
}
