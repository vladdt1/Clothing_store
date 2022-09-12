import React from 'react';
import './Footer.css'
import Apple from './footerImage/Apple.svg'
import Tg from './footerImage/Telegram.svg'
import VK from './footerImage/VK.svg'
import Inst from './footerImage/Instagram.svg'
import Google from './footerImage/Google.svg'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_text'>
                <line className='footer_text_one'>
                    <div className='bold'>
                        ПОКУПАТЕЛЯМ
                    </div>
                    <NavLink style={{textDecoration: 'none', color: 'black'}}
                             to="/online/delivery">Доставка</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/track">Отследить
                        заказ</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/pay">Оплата</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/return">Возврат и
                        обмен</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/stocks">Акции и
                        конкурсы</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/sizes">Таблицы
                        размеров</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/rules">Правила
                        продажи</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/checkout">Оформление
                        заказав</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/care">Уход за
                        товаром</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/agreement">Политика
                        конфиденциальности</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/online/bonus">Программа
                        лояльности</NavLink><br/>
                </line>
                <line className='footer_text_two'>
                    <div className='bold'>
                        О КОМПАНИИ
                    </div>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/company">О нас</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/company">Вакансии</NavLink><br/>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/company">Контакты</NavLink><br/>
                </line>
            </div>
            <div className='footer_image_icons'>
                <img src={Tg} alt=''/>
                <img src={VK} alt=''/>
                <img src={Inst} alt=''/>
                <div className='footer_image_icons_apple'>
                    <img src={Apple} alt='apple'/>
                    <div>
                        <line>Загрузите в<br/>
                            <div className='bold'>App Store</div>
                        </line>
                    </div>
                </div>
                <div className='footer_image_icons_apple'>
                    <img src={Google} alt='google_play'/>
                    <div>
                        <line>Доступно в<br/>
                            <div className='bold'>Google Play</div>
                        </line>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
