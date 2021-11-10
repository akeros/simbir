import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleLang } from '../../redux/appSlice';

interface IProps {
  isMobile?: boolean;
}

const Language = ({ isMobile }: IProps) => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.app.lang);
  const changeLang = useCallback(() => dispatch(toggleLang()), []);

  const classes = classNames(styles.language, {
    [styles.languageMobile]: isMobile,
  });

  return (
    <button className={ classes } onClick={ changeLang }>{ lang }</button>
  );
};

export default Language;
