import React, {useState} from 'react';
import './LeftMenu.css';
import {NavLink} from 'react-router-dom'
import ModalOpen from "./ModalOpen";

const LeftMenu = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <NavLink to="/">
                <div className='logo_t'>VSite</div>
            </NavLink>
            <div className='map'>Липецк</div>
            <div className='address'>Адреса магазинов</div>
            <button className='min-menu' onClick={() => setShowModal(true)}/>
            <ModalOpen active={showModal} setActive={setShowModal}/>

        </div>
    );
}

export default LeftMenu;
