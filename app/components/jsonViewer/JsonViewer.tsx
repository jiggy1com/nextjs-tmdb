'use client';
import styles from './JsonViewer.module.scss';
import dynamic from 'next/dynamic';

const ReactJsonView = dynamic(() => import('react-json-view'), {
    ssr: false,
});

type Props = {
    data: any;
};

export default function JsonViewer({ data }: Props) {
    return (
        <div className={styles.reactJsonView}>
            <ReactJsonView
                src={data}
                theme={'apathy'}
                name={false}
                collapsed={2}
                enableClipboard={true}
                displayDataTypes={false}
            />
        </div>
    );
}
