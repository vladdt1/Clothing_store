import React from 'react';
import './ShopProductWM.css'
import {NavLink} from "react-router-dom";

const ShopProductWM = (props) => {
    return (
        <div className='shop_w_men'>
            <div className='shop_w_men_title'>{props.nameG}{props.nameB}</div>
            <div className='shop_w_men_pro'>

                {/*Выбор вещей для мальчиков*/}
                <NavLink to='/' className='shop_w_men_pro_one'>
                    <img src={props.imB1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>{props.B1}</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_two'>
                    <img src={props.imB2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>{props.B2}</div>
                </NavLink>

                {/*Выбор вещей для девочек*/}
                <NavLink to='/' className='shop_w_men_pro_one'>
                    <img src={props.imG1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Школьная одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_two'>
                    <img src={props.imG2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Верхняя одежда</div>
                </NavLink>
            </div>
        </div>
    );
}

export default ShopProductWM;
