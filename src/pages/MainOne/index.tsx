import styles from './index.module.css';
import React from 'react';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import group from '../../assets/img/Group.svg';


const MainOne = () => (
    <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.razmet}>
            <div className={styles.content}>
                <div className={styles.contentUpper}>
                    <div className={styles.logo}>Need for drive</div>
                    <div className={styles.contentUpperGeo}>
                        <div className={styles.contentUpperGeoSymbol}><img src={group} alt='menu'/></div>
                        <div>Ульяновск</div>
                    </div>
                </div> 
            </div>
                <div className={styles.colontikul}>
                    <div className={styles.colontikulText}>Местоположение</div>
                    <div className={styles.colontikulText}>Модель</div>
                    <div className={styles.colontikulText}>Дополнительно</div>
                    <div className={styles.colontikulText}>Итого</div>
                </div>
                <div className={styles.razdel}>
                    <div className={styles.left}>
                        <div>Город<input type="" /></div>
                        <div>Пункт выдачи<input type="" /></div>
                        <div>Выбор на карте</div>
                        </div>
                    <div className={styles.right}>
                        <div>Ваш заказ:</div>
                        <div>
                            <div>Пункт выдачи</div>
                            <div>......................</div>
                            <div>Ульяновск, Нариманова 42</div>
                        </div>
                        <div>Цена: от 8 000 до 12 000 ₽</div>
                        <div>КНОПОЧКАА</div>
                    </div>
                </div>
        </div>
    </div>
);


export default MainOne