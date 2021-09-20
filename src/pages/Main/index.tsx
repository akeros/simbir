import React from 'react';
import './index.css';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import group from './Group.svg';
import Button from '../../components/Button';

export default function Main() {
    return (
        <div className='main-wrapper'>
            <Sidebar />
            <div className='main-content'>
                <div className='main-content-upper'>
                    <div className='logo'>Need for drive</div>
                    <div className='main-content-upper-geo'>
                        <div className='main-content-upper-geo-symbol'><img src={group} alt='menu'/></div>
                        <div>Ульяновск</div>
                    </div>
                </div>
                <div className='main-content-center'>
                    <div className='main-content-title'>Каршеринг</div>
                    <div className='main-content-title text-green'>Need for drive</div>
                    <div className='main-content-description'>Поминутная аренда авто твоего города</div>
                    <Button classes='main-content-button'>Забронировать</Button>
                </div>
                <div className='main-content-low'>
                    <div className='main-content-low-left-text'>© 2016-2019 «Need for drive»</div>
                    <div className='main-content-low-left-phone'>8 (495) 234-22-44</div>
                </div>
            </div>
            <div className='main-slider'>
                <Slider />
            </div>
        </div>
    );
}
