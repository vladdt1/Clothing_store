import React from 'react';
import Choice from "../../Сhoice";
import './Track.css'

const Track = () => {
    return (
        <div className='track'>
            <Choice/>
            <div className='track_name'>Отслеживание заказа</div>
        </div>
    );
}

export default Track;
