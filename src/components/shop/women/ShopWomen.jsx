import React from 'react';
import im1 from './imageWomenShop/186157 1.svg'
import im2 from './imageWomenShop/151694.480x617.jpg'
import im3 from './imageWomenShop/165528.480x617.jpg'
import im4 from './imageWomenShop/173490.480x617.jpg'
import im5 from './imageWomenShop/155348.480x617.jpg'
import im6 from './imageWomenShop/174053.480x617.jpg'
import '../shopProductWM/ShopProductWM.css'
import {NavLink} from "react-router-dom";

const ShopWomen = () => {
    return (
        <div className='shop_women'>
            <div className='shop_w_men_title'>Женцины</div>
            <div className='shop_w_men_pro'>
                <NavLink to='/shop' className='shop_w_men_pro_one'>
                    <img src={im1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_two'>
                    <img src={im2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Сумки</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_three'>
                    <img src={im3} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Нижнее белье</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_four'>
                    <img src={im4} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Купальники и пляжная одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_five'>
                    <img src={im5} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Джинсы</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_six'>
                    <img src={im6} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Аксессуары</div>
                </NavLink>
            </div>
        </div>
    );
}

export default ShopWomen;
