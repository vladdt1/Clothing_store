import React from 'react';
import ShopProductWM from "../../shopProductWM/ShopProductWM";
import im1 from "./imageGirl/183337.480x617.jpg";
import im2 from "./imageGirl/184264.480x617.jpg";

const ShopGirl = () => {
    return (
        <>
            <ShopProductWM nameG='Девочки' imG1={im1} imG2={im2} G1='Мальчики' G2='Девочки' />
        </>
    );
}

export default ShopGirl;
