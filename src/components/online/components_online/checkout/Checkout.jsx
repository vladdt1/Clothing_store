import React from 'react';
import Choice from "../../Сhoice";
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='checkout'>
            <Choice/>
            <div className='checkout_name'>Оформление заказа</div>
        </div>
    );
}

export default Checkout;
