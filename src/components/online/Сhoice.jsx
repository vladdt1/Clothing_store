import React from 'react';
import {NavLink} from "react-router-dom";

const Choice = () => {
    return (
        <div className='choice'>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px',}}
                     to="/online/delivery">Доставка</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/track">Отследить заказ</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/pay">Оплата</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/return">Возврат и обмен</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/stocks">Акции и конкурсы</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/sizes">Таблицы размеров</NavLink><br/>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px',}} to="/online/rules">Правила
                продажи</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/checkout">Оформление заказав</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/care">Уход за товаром</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/agreement">Политика конфиденциальности</NavLink>
            <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px',}}
                     to="/online/bonus">Программа лояльности</NavLink>
        </div>
    );
}

export default Choice;
