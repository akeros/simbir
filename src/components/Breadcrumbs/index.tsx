import React, { Fragment } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import RightArray from '../RightArray';

interface IProps {
  activeIndex: number;
}

const breadcrumbsArray = [
  'Местоположение',
  'Модель',
  'Дополнительно',
  'Итого',
];

const Breadcrumbs = ({ activeIndex }: IProps) => (
  <div className={styles.list}>
    {
      breadcrumbsArray.map((item, index, array) => (
        <Fragment key={item}>
          <div className={classNames(styles.listItem, activeIndex === index && styles.activeItem)}>{item}</div>
          {array.length - 1 !== index && <RightArray />}
        </Fragment>
      ))
    }
  </div>
);

export default Breadcrumbs;
