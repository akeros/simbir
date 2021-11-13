import styles from './index.module.css';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import Input from '../../components/Input';
import map from '../../assets/img/map.svg';
import dot from '../../assets/img/dot.svg';
import Button from '../../components/Button';
import { toCapitalize } from '../../utils';

const dots = [
  'Нариманова 42',
  'Гончарова 38',
  'Пушкарева 1а',
  'Московское шоссе 101',
];

const cities = [
  'Ульяновск',
];

const MainOne = () => {
    const [city, setCity] = useState('Ульяновск');
    const [address, setAddress] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    useEffect(() => {
        if (cities.includes(toCapitalize(city)) && dots.includes(toCapitalize(address))) {
            setSubmit(true);
        } else {
            setSubmit(false);
        }
    }, [city, address]);

    return (
      <div className={styles.wrapper}>
          <Sidebar />
          <div className={styles.razmet}>
              <div className={styles.content}>
                  <Header />
              </div>
              <Breadcrumbs activeIndex={0} />
              <div className={styles.razdel}>
                  <div className={styles.left}>
                      <Input
                        label='Город'
                        placeholder='Введите город...'
                        value={city}
                        onChange={setCity}
                      />
                      <Input
                        label='Пункт выдачи'
                        placeholder='Начните вводить пункт...'
                        value={address}
                        onChange={setAddress}
                      />
                      <div className={styles.text}>Выбор на карте:</div>
                      <div className={styles.map}>
                          <img src={map} alt='map' width={736} height={352} />
                          <button className={classNames(styles.dot, styles.dot1)} onClick={() => setAddress(dots[0])}>
                              <img src={dot} alt='dot' width={18} height={18} />
                          </button>
                          <button className={classNames(styles.dot, styles.dot2)} onClick={() => setAddress(dots[1])}>
                              <img src={dot} alt='dot' width={18} height={18} />
                          </button>
                          <button className={classNames(styles.dot, styles.dot3)} onClick={() => setAddress(dots[2])}>
                              <img src={dot} alt='dot' width={18} height={18} />
                          </button>
                          <button className={classNames(styles.dot, styles.dot4)} onClick={() => setAddress(dots[3])}>
                              <img src={dot} alt='dot' width={18} height={18} />
                          </button>
                      </div>
                  </div>
                  <div className={styles.right}>
                      <div>
                          <div className={styles.rightTitle}>Ваш заказ:</div>
                          <div className={styles.address}>
                              <div className={styles.separator}>............................................</div>
                              <div className={styles.pointText}>Пункт выдачи</div>
                              <div className={styles.secondText}>{toCapitalize(city)},<br/>{toCapitalize(address)}</div>
                          </div>
                          <div className={styles.price}><b>Цена:</b> от 8 000 до 12 000 ₽</div>
                          <Button classes={styles.button} disabled={!isSubmit}>Выбрать модель</Button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}


export default MainOne
