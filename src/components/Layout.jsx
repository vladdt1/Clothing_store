import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer";
import '../App.css'

const Layout = (props) => {

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        console.log(pathname)
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <>
            <ScrollToTop/>
            <Outlet/>

            <div className='app-wrapper-footer'>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;
