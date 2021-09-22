import React from 'react';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import Button from '../../components/Button';

import group from '../../assets/img/Group.svg';

import styles from './index.module.css';

const Main = () => (
    <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>
            <div className={styles.contentUpper}>
                <div className={styles.logo}>Need for drive</div>
                <div className={styles.contentUpperGeo}>
                    <div className={styles.contentUpperGeoSymbol}><img src={group} alt='menu'/></div>
                    <div>Ульяновск</div>
                </div>
            </div>
            <div className={styles.contentCenter}>
                <div className={styles.contentTitle}>Каршеринг</div>
                <div className={classNames(styles.contentTitle, styles.textGreen)}>Need for drive</div>
                <div className={styles.contentDescription}>Поминутная аренда авто твоего города</div>
                <Button classes={styles.contentButton}>Забронировать</Button>
            </div>
            <div className={styles.contentLow}>
                <div className={styles.contentLowLeftText}>© 2016-2019 «Need for drive»</div>
                <div className={styles.contentLowLeftPhone}>8 (495) 234-22-44</div>
            </div>
        </div>
        <div className={styles.slider}>
            <Slider />
        </div>
    </div>
);

export default Main;
