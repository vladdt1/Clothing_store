import React from 'react';
import './Home.css';
import sale1 from './imageHome/sale1.svg'
import sale2 from './imageHome/sale2.svg'
import fir_img from "./imageHome/first.svg";

const Home = () => {
    return (
        <div className='home'>
            <div className='fir'>
                <img src={fir_img} width='100%' alt=''/>
                <div className='text_fir'>DENIM</div>
            </div>
            <div className='sale_home_image'>
                <img className='sale_home_image_one' src={sale1} alt=''/>
                <img className='sale_home_image_two' src={sale2} alt=''/>
            </div>

            <div className='text_home'>
                <div className='text_home_main'>
                    VSite — российский лайфстайл бренд одежды для молодых людей
                </div>
                <div className='text_home_contents'>
                    <div className='indent'>
                        Бренд VSite создан студентами энтузиастами. Мы стремимся удовлетворить все потребности в
                        гардеробе — от верхней одежды до белья и аксессуаров. Для создания коллекций выбираем
                        натуральные ткани и предлагаем актуальные вещи по доступным ценам.
                    </div>
                    <div className='indent'>
                        Также мы создаем одежду для маленьких (2-6 лет) и больших (7-12 лет) детей. Это практичная
                        верхняя одежда для прогулок, а также комфортные вещи для садика и похода на кружки, основу
                        которых составляют футболки, худи и свитшоты, джоггеры и леггинсы, трикотажные платья и многое
                        другое.
                    </div>
                    <div className='indent'>
                        Чтобы быть в курсе всех новостей и акций, рекомендуем подписаться на наши рассылки и телеграм.
                    </div>
                    <div className='indent'>
                        <div>Желаем приятных покупок!</div>
                        <div>Ваш VSite</div>
                    </div>
                </div>
            </div>

            <div className='subscription'>
                <div className='subscription_text'>
                    <line>Подписывайся <br/>на наши обновления</line>
                </div>
                <div className='subscription_text_two'>
                    <line>Узнай первым о старте <br/>скидок и специальных предложений!</line>
                </div>
                <div className='button'>
                    <input className='button_email button_email_text' placeholder='Введите e-mail'
                           name='guruweba_example_email' type='email' alt='name'/>
                    <button className='button_sub button_sub_text'>Подписаться</button>
                </div>
                <div className='pol'>
                    <line>Подписываясь рассылку, вы соглашаетесь<br/>с Политикой конфиденциальности.</line>
                </div>
            </div>
        </div>
    );
}

export default Home;
