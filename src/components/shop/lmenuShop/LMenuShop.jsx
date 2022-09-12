import React, {useState} from 'react';
import './LMenuShop.css';
import {Link, NavLink} from 'react-router-dom'
import ModalOpen from "../../leftMenu/ModalOpen";
import slider from './Slider.svg'

const LMenuShop = () => {
    const [showModal, setShowModal] = useState(false);
    const setActive = ({isActive}) => isActive ? 'active-link' : 'link';
    return (
        <div className='l_menu_shop'>
            <div className='l_menu_shop_logo'>
                <button className='l_menu_shop_logo_menu' onClick={() => setShowModal(true)}/>
                <Link className='l_menu_shop_logo_menu_logo' to="/">VSite</Link>
            </div>

            <ModalOpen active={showModal} setActive={setShowModal}/>

            <div className='l_menu_shop_fil'>
                <button className='l_menu_shop_fil_button'>
                    <img className='l_menu_shop_fil_button_img' src={slider} alt=''/>
                    <span className='l_menu_shop_fil_button_text'>Фильтр</span>
                </button>
            </div>

            <div className='l_menu_shop_menu'>
                <div style={{marginTop: "10px"}}>
                    <NavLink to='/shop/women' className={setActive}>
                        Женщины
                    </NavLink>
                </div>

                <div style={{marginTop: "10px"}}>
                    <NavLink to='/shop/men' className={setActive}>
                        Мужчины
                    </NavLink>
                </div>

                <div style={{marginTop: "10px"}}>
                    <NavLink to='/shop/children' className={setActive}>
                        Дети
                    </NavLink>
                </div>

                <div style={{marginTop: "10px"}}>
                    <NavLink to='/shop/news' className={setActive}>
                        Новинки
                    </NavLink>
                </div>

                <div style={{marginTop: "10px", fontSize: "20px"}}>Новинки</div>
                <div style={{marginTop: "10px", fontSize: "20px"}}>Sale</div>
                <div style={{marginTop: "10px", fontSize: "20px"}}>Beauty</div>
            </div>
        </div>
    );
}

export default LMenuShop;
