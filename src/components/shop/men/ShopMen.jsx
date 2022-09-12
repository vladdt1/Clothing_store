import React from 'react';
import im1 from "./imageMenShop/AYhtqmx4HcDRCSfBG1POBmYuVAQrwNNdUEGiQ8vQ.jpg";
import im2 from "./imageMenShop/2239812708_102_4.jpg";
import im3 from "./imageMenShop/2223028006_1.jpg";
import im4 from "./imageMenShop/2229629763_50_4.jpg";
import im5 from "./imageMenShop/2239911101_50_2.jpg";
import im6 from "./imageMenShop/2223018004_4_1.jpg";
import '../shopProductWM/ShopProductWM.css'
import {NavLink} from "react-router-dom";

const ShopMen = (props) => {
    return (
        <div>
            <div className='shop_w_men_title'>Мужское</div>
            <div className='shop_w_men_pro'>
                <NavLink to='/shop' className='shop_w_men_pro_one'>
                    <img src={im1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_two'>
                    <img src={im2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Джинсы</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_three'>
                    <img src={im3} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Нижнее белье</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_four'>
                    <img src={im4} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Пляжная одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_five'>
                    <img src={im5} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Верхняя одежда</div>
                </NavLink>
                <NavLink to='/' className='shop_w_men_pro_six'>
                    <img src={im6} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Аксессуары</div>
                </NavLink>
            </div>
        </div>
    );
}

export default ShopMen;
