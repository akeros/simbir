import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

interface IProps {
    isMobile?: boolean;
}

const Language = ({ isMobile }: IProps) => {
    const [lang, setLang] = useState<'Eng' | 'Рус'>('Eng');
    const changeLang = () => setLang(prevState => prevState === 'Eng' ? 'Рус' : 'Eng');

    const classes = classNames(styles.language, {
        [styles.languageMobile]: isMobile,
    });

    return (
        <button className={classes} onClick={changeLang}>{lang}</button>
    );
}

export default Language;
