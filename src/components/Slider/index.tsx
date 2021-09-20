import SliderLib from 'react-slick';
import car1 from './car-1.png';
import car2 from './car-2.png';
import car3 from './car-3.png';
import car4 from './car-4.png';
import React from 'react';
import right from '../../pages/Main/right.svg';
import left from '../../pages/Main/left.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Button from '../Button';

interface ISlide {
    title: string;
    description: string;
    image: string;
    link: string;
    colors: [string, string];
}

const slides: ISlide[] = [
    {
        title: 'Бесплатная парковка',
        description: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        image: car1,
        link: '#',
        colors: ['#13493F', '#0C7B1B'],
    },
    {
        title: 'Страховка',
        description: 'Полная страховка страховка автомобиля.',
        image: car2,
        link: '#',
        colors: ['#132949', '#0C7B67'],
    },
    {
        title: 'Бензин',
        description: 'Полный бак на любой заправке города за наш счёт.',
        image: car3,
        link: '#',
        colors: ['#493013', '#7B0C3B'],
    },
    {
        title: 'Обслуживание',
        description: 'Автомобиль проходит еженедельное ТО.',
        image: car4,
        link: '#',
        colors: ['#281349', '#720C7B'],
    },
];

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="slider-arrow slider-next-arrow"
            onClick={ onClick }
        >
            <div id='prev-slide' className="slider-arrow-background"/>
            <img src={ right } alt="right"/>
        </div>
    );
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="slider-arrow slider-back-arrow"
            onClick={ onClick }
        >
            <div id='next-slide' className="slider-arrow-background"/>
            <img src={ left } alt="left"/>
        </div>
    );
}

export default function Slider() {
    const settings = {
        customPaging: function () {
            return (
                <a href="#" className="slider-dot"/>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    return (
        <div className="slider-wrapper">
            <SliderLib { ...settings }>
                { slides.map(slide => (
                    <div className="slider-item" key={slide.title}>
                        <div className="slider-image-wrapper">
                            <img src={ slide.image } alt="car" className="slider-image"/>
                            <div className="slider-image-cover"/>
                        </div>
                        <div className="slider-item-over">
                            <h3 className="slider-item-text-h3">{ slide.title }</h3>
                            <div className="slider-item-text-intro">{ slide.description }</div>
                            <Button classes="slider-item-button" colors={ slide.colors }>Подробнее</Button>
                        </div>
                    </div>
                )) }
            </SliderLib>
        </div>
    );
}
