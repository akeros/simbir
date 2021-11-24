import React from 'react';
import SliderLib from 'react-slick';

import Button from '../Button';
import classNames from 'classnames';

import car1 from '../../assets/img/car-1.png';
import car2 from '../../assets/img/car-2.png';
import car3 from '../../assets/img/car-3.png';
import car4 from '../../assets/img/car-4.png';
import right from '../../assets/img/right.svg';
import left from '../../assets/img/left.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.css';
import '../../index.css';

interface ISlide {
    title: string;
    description: string;
    image: string;
    link: string;
    color?: 'blue' | 'red' | 'purple';
}

const slides: ISlide[] = [
    {
        title: 'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        image: car1,
        link: '#',
    },
    {
        title: 'Страховка',
        description: 'Полная страховка страховка автомобиля.',
        image: car2,
        link: '#',
        color: 'blue',
    },
    {
        title: 'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт.',
        image: car3,
        link: '#',
        color: 'red',
    },
    {
        title: 'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО.',
        image: car4,
        link: '#',
        color: 'purple',
    },
];

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className={classNames(styles.arrow, styles.nextArrow)}
            onClick={ onClick }
        >
            <div className={styles.arrowBackground} />
            <img src={ right } alt="right"/>
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className={classNames(styles.arrow, styles.backArrow)}
            onClick={ onClick }
        >
            <div className={styles.arrowBackground} />
            <img src={ left } alt="left"/>
        </div>
    );
}

const Slider = () => {
    const settings = {
        customPaging: () => <a href="#" className={'dot'} />,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <div className={styles.wrapper}>
            <SliderLib { ...settings }>
                { slides.map(slide => (
                    <div className={styles.item} key={slide.title}>
                        <div className={styles.imageWrapper}>
                            <img src={ slide.image } alt="car" className={styles.image} />
                            <div className={styles.imageCover} />
                        </div>
                        <div className={styles.itemOver}>
                            <h3 className={styles.itemTextH3}>{ slide.title }</h3>
                            <div className={styles.itemTextIntro}>{ slide.description }</div>
                            <Button classes={styles.itemButton} color={ slide.color }>Подробнее</Button>
                        </div>
                    </div>
                )) }
            </SliderLib>
        </div>
    );
}

export default Slider;
