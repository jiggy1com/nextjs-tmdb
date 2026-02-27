import styles from './GridItem.module.scss';
import { ReactNode } from 'react';

type GridItemProps = {
	children: ReactNode;
	className?: string;
};

export function GridItem({ children, className = '' }: GridItemProps) {
	const classList = [styles.gridItem, className].filter(Boolean).join(' ');
	return <div className={classList}>{children}</div>;
}
