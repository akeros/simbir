import React, {Fragment} from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import RightArray from '../RightArray';
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";

interface IProps {
  activeIndex: number;
}

const breadcrumbsArray = [
  {
    id: 'step-one',
    title: 'Местоположение',
  },
  {
    id: 'step-two',
    title: 'Модель',
  },
  {
    id: 'step-three',
    title: 'Дополнительно',
  },
  {
    id: 'step-four',
    title: 'Итого',
  },
];

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.list}>
      {
        breadcrumbsArray.map((item, index, array) => {
          const activePosition = array.findIndex((_item) => location.pathname.match(_item.id));
          const isActiveItem = activePosition === index;
          const navigateTo = () => navigate(`/${item.id}`)

          const isPrevItem = index < activePosition;
          const isNextItem = index > activePosition;

          return (
            <Fragment key={item.id}>
              <button
                className={classNames(styles.listItem, {
                  [styles.activeItem]: isActiveItem,
                  [styles.prevItem]: isPrevItem,
                })}
                onClick={navigateTo}
                disabled={isActiveItem || isNextItem}
              >
                {item.title}
              </button>
              {array.length - 1 !== index && <RightArray/>}
            </Fragment>
          )
        })
      }
    </div>
  );
};

export default Breadcrumbs;
