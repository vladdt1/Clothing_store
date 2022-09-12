import React from 'react';
import '../shopProductWM/ShopProductWM.css'
import im1 from "./imageChildrenShop/185667.480x617.jpg";
import im2 from "./imageChildrenShop/185843.480x617.jpg";
import {NavLink} from "react-router-dom";

const ShopChildren = () => {
    return (
        <>
            <div className='shop_w_men_title'>Дети</div>
            <div className='shop_w_men_pro'>
                <NavLink to='/shop/children/boy' className='shop_w_men_pro_one'>
                    <img src={im1} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Мальчики</div>
                </NavLink>
                <NavLink to='/shop/children/girl' className='shop_w_men_pro_two'>
                    <img src={im2} alt='' className='shop_product_img_wom_1'/>
                    <div className='shop_product_text_wom_1'>Девочки</div>
                </NavLink>
            </div>
        </>
    );
}

export default ShopChildren;
