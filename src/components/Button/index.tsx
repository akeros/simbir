import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import ellipse from '../../assets/img/ellipse.svg';

import styles from './index.module.css';

interface IProps {
    classes?: string;
    color?: 'red' | 'blue' | 'purple';
    loading?: boolean;
    disabled?: boolean;
    onClick?(): void;
}

const Button = ({ classes, color, loading, disabled, children, onClick}: PropsWithChildren<IProps>) => {
    const _classes = classNames(classes, {
        [styles.button]: !color,
        [styles.buttonBlue]: color === 'blue',
        [styles.buttonRed]: color === 'red',
        [styles.buttonPurple]: color === 'purple',
    });

    return (
        <button className={_classes} disabled={disabled} onClick={onClick} >
            { loading ? <img src={ ellipse } alt="loading"/> : children}
        </button>
    )
}

export default Button;
