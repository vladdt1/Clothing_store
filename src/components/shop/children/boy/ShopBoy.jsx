import React from 'react';
import im1 from "./imageBoy/186193.480x617.jpg";
import im2 from "./imageBoy/184503.480x617.jpg";
import '../../shopProductWM/ShopProductWM.css'
import {NavLink} from "react-router-dom";

const ShopBoy = () => {
    return (
        <div>
            <div className='shop_w_men_title'>Мальчики</div>
            <div className='shop_w_men_pro'>
                <NavLink to='/shop/children/boy' className='shop_w_men_pro_one'>
                    <img src={im1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Школьная одежда</div>
                </NavLink>
                <NavLink to='/shop/children/girl' className='shop_w_men_pro_two'>
                    <img src={im2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Верхняя одежда</div>
                </NavLink>
            </div>
        </div>
    );
}

export default ShopBoy;
