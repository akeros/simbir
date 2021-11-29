import React from 'react';

import styles from './index.module.css';
import group from '../../assets/img/Group.svg';
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }
    return (
  <div className={styles.contentUpper}>
    <button className={styles.logo} onClick={handleClick}>Need for drive</button>
    <div className={styles.contentUpperGeo}>
      <div className={styles.contentUpperGeoSymbol}><img src={group} alt='menu'/></div>
      <div>Ульяновск</div>
    </div>
  </div>
)};

export default Header;
