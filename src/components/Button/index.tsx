import React, { PropsWithChildren } from 'react';
import './index.css';
import ellipse from './ellipse.svg';

interface IProps {
    classes?: string;
    colors?: [string, string];
    loading?: boolean;
    disabled?: boolean;
}

export default function Button({ classes, colors, loading, disabled, children }: PropsWithChildren<IProps>) {
    const styles = colors
        ? { background: `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 100%)` }
        : {}

    return (
        <button className={`button ${classes}`} style={styles} disabled={disabled}>
            { loading ? <img src={ ellipse } alt="loading"/> : children}
        </button>
    )
}
