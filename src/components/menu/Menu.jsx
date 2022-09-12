import React from 'react';
import './Menu.css'
import cart_im from "./imageMenu/basket_img.svg";
import profile_im from "./imageMenu/profile_img.svg";
import favorite_im from "./imageMenu/like_img.svg";
import search_im from "./imageMenu/search_img.svg";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className='menu'>
            <div>
                <NavLink to="/cart"><img className='menu_imag1' src={cart_im} alt=''/></NavLink>
            </div>
            <div>
                <NavLink to="/profile"><img className='menu_imag2' src={profile_im} alt=''/></NavLink>
            </div>
            <div>
                <NavLink to="/favorite"><img className='menu_imag3' src={favorite_im} alt=''/></NavLink>
            </div>
            <div>
                <NavLink to="/search"><img className='menu_imag4' src={search_im} alt=''/></NavLink>
            </div>
        </div>
    );
}

export default Menu;
