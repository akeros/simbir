import React from 'react';

import styles from './index.module.css';
import group from '../../assets/img/Group.svg';

const Header = () => (
  <div className={styles.contentUpper}>
    <div className={styles.logo}>Need for drive</div>
    <div className={styles.contentUpperGeo}>
      <div className={styles.contentUpperGeoSymbol}><img src={group} alt='menu'/></div>
      <div>Ульяновск</div>
    </div>
  </div>
);

export default Header;
