import React from 'react';
import Choice from "../../Сhoice";
import './Stocks.css'

const Stocks = () => {
    return (
        <div className='stocks'>
            <Choice/>
            <div className='stocks_name'>Акции и конкурсы</div>
        </div>
    );
}

export default Stocks;
