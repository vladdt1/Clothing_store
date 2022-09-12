import React from 'react';
import './Modal.css';
import one_Lin_one from './M_menu/Ellipse 1.svg'
import one_Lin_two from './M_menu/Ellipse 2.svg'
import one_Lin_three from './M_menu/Ellipse 3.svg'
import two_Lin_one from './M_menu/62836e951d9b0b001537b21d 1.svg'
import two_Lin_two from './M_menu/62836e951d9b0b001537b220 1.svg'
import two_Lin_three from './M_menu/62836e951d9b0b001537b223 1.svg'
import two_Lin_four from './M_menu/62836e951d9b0b001537b226 1.svg'
import three_Lin_one from './M_menu/Ellipse 4.svg'
import three_Lin_two from './M_menu/Ellipse 5.svg'
import three_Lin_three from './M_menu/Ellipse 6.svg'
import {NavLink} from "react-router-dom";


const ModalOpen = ({active, setActive}) => {
    return (
        <div className={active ? "M_menu active" : "M_menu"} onClick={() => setActive(false)}>
            <div className='M_menu_content'>
                <div className='M_menu_content_one'>
                    <div className='M_menu_content_one_lin'>
                        <NavLink to="/shop/women" style={{textDecoration: 'none', color: 'black'}}>
                            <div className='M_menu_content_one_lin_one'>
                                <img src={one_Lin_one} width='130px' alt=''/>
                                <div>Для неё</div>
                            </div>
                        </NavLink>

                        <NavLink to="/shop/men" style={{textDecoration: 'none', color: 'black'}}>
                            <div className='M_menu_content_one_lin_two'>
                                <img src={one_Lin_two} width='130px' alt=''/>
                                <div>Для него</div>
                            </div>
                        </NavLink>
                        <NavLink to="/shop/children" style={{textDecoration: 'none', color: 'black'}}>
                            <div className='M_menu_content_one_lin_three'>
                                <img src={one_Lin_three} width='130px' alt=''/>
                                <div>Дети</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='M_menu_content_two'>
                    <div className='M_menu_content_two_lin'>
                        <div className='M_menu_content_two_lin_one'>
                            <img src={two_Lin_one} width='130px' alt=''/>
                        </div>
                        <div className='M_menu_content_two_lin_two'>
                            <img src={two_Lin_two} width='130px' alt=''/>
                        </div>
                        <div className='M_menu_content_two_lin_three'>
                            <img src={two_Lin_three} width='130px' alt=''/>
                        </div>
                        <div className='M_menu_content_two_lin_four'>
                            <img src={two_Lin_four} width='130px' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='M_menu_content_three'>
                    <div className='M_menu_content_three_Lin'>
                        <div className='M_menu_content_three_lin_one'>
                            <img src={three_Lin_one} width='130px' alt=''/>
                            <div>Новинки</div>
                        </div>
                        <div className='M_menu_content_three_lin_two'>
                            <img src={three_Lin_two} width='130px' alt=''/>
                            <div>SALE</div>
                        </div>
                        <div className='M_menu_content_three_lin_three'>
                            <img src={three_Lin_three} width='130px' alt=''/>
                            <div>Beauty</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalOpen;
