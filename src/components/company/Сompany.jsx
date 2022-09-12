import React from 'react';
import './Company.css';
import {NavLink} from "react-router-dom";

const Company = () => {
    return (
        <div className='company'>
            <div className='company_name'>О компании</div>
            <div className='company_link'>
                <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px',}} to="/online/rules">О
                    нас</NavLink>
                <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px'}}
                         to="/online/rules">Вакансии</NavLink>
                <NavLink style={{textDecoration: 'none', color: 'gray', fontSize: '18px', marginLeft: '40px'}}
                         to="/online/rules">Контакты</NavLink>
            </div>
        </div>
    );
}

export default Company;
