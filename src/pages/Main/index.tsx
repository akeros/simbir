import React from 'react';
// import { BrowserRouter as  Link } from 'react-router-dom';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import Button from '../../components/Button';
import Header from '../../components/Header';

import styles from './index.module.css';
import { useNavigate } from 'react-router';

const Main = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/step-one")
    }

    return (
    <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>
            <Header />
            <div className={styles.contentCenter}>
                <div className={styles.contentTitle}>Каршеринг</div>
                <div className={classNames(styles.contentTitle, styles.textGreen)}>Need for drive</div>
                <div className={styles.contentDescription}>Поминутная аренда авто твоего города</div>
                <Button classes={styles.contentButton} onClick={handleClick}> Забронировать</Button>
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
);}


export default Main;
