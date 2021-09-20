import React, { useState } from 'react';
import './index.css';

export default function Language() {
    const [lang, setLang] = useState<'Eng' | 'Рус'>('Eng');

    const changeLang = () => {
        setLang(prevState => prevState === 'Eng' ? 'Рус' : 'Eng');
    }

    return (
        <button className="language" onClick={changeLang}>{lang}</button>
    );
}
