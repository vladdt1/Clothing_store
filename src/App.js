import './App.css';
import React from 'react';
import Menu from "./components/menu/Menu";
import Home from "./components/Home/Home";
import Profile from "./components/profile/Profile";
import LeftMenu from "./components/leftMenu/LeftMenu";
import {Routes, Route} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Favorite from "./components/favorite/Favorite";
import Search from "./components/search/Search";
import Online from "./components/online/Online";
import Delivery from "./components/online/components_online/delivery/Delivery";
import Track from "./components/online/components_online/track/Track";
import Agreement from "./components/online/components_online/agreement/Agreement";
import Bonus from "./components/online/components_online/bonus/Bonus";
import Care from "./components/online/components_online/care/Care";
import Checkout from "./components/online/components_online/checkout/Checkout";
import Pay from "./components/online/components_online/pay/Pay";
import Return from "./components/online/components_online/return/Return";
import Rules from "./components/online/components_online/rules/Rules";
import Sizes from "./components/online/components_online/sizes/Sizes";
import Stocks from "./components/online/components_online/stocks/Stocks";
import Company from "./components/company/Сompany";
import Shop from "./components/shop/Shop";
import LMenuShop from "./components/shop/lmenuShop/LMenuShop";
import ShopWomen from "./components/shop/women/ShopWomen";
import Layout from "./components/Layout";
import ShopMen from "./components/shop/men/ShopMen";
import ShopChildren from "./components/shop/children/ShopChildren";
import ShopBoy from "./components/shop/children/boy/ShopBoy";
import ShopGirl from "./components/shop/children/girl/ShopGirl";

const App = (props) => {
    return (

        <div className="app-wrapper">
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='*' element={<Home/>}/>

                        <Route path='/shop' element={<Shop/>}/>
                        <Route path='/shop/women' element={<ShopWomen/>}/>
                        <Route path='/shop/men' element={<ShopMen/>}/>
                        <Route path='/shop/children' element={<ShopChildren/>}/>
                        <Route path='/shop/children/boy' element={<ShopBoy/>}/>
                        <Route path='/shop/children/girl' element={<ShopGirl/>}/>

                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/favorite' element={<Favorite/>}/>
                        <Route path='/search' element={<Search/>}/>
                        <Route index path='/' element={<Home/>}/>

                        <Route path='/online' element={<Online/>}/>
                        <Route path='/online/delivery' element={<Delivery/>}/>
                        <Route path='/online/track' element={<Track/>}/>
                        <Route path='/online/agreement' element={<Agreement/>}/>
                        <Route path='/online/bonus' element={<Bonus/>}/>
                        <Route path='/online/care' element={<Care/>}/>
                        <Route path='/online/checkout' element={<Checkout/>}/>
                        <Route path='/online/pay' element={<Pay/>}/>
                        <Route path='/online/return' element={<Return/>}/>
                        <Route path='/online/rules' element={<Rules/>}/>
                        <Route path='/online/sizes' element={<Sizes/>}/>
                        <Route path='/online/stocks' element={<Stocks/>}/>

                        <Route path='/company' element={<Company/>}/>
                    </Route>
                </Routes>
            </div>

            <div className='app-wrapper-r_menu'>
                <Routes>
                    <Route path='*' element={<Menu/>}/>
                </Routes>
            </div>

            <div className='app-wrapper-l_menu'>
                <Routes>
                    <Route path='*' element={<LeftMenu/>}/>

                    <Route path='/shop' element={<LMenuShop/>}/>
                    <Route path='/shop/women' element={<LMenuShop/>}/>
                    <Route path='/shop/men' element={<LMenuShop/>}/>
                    <Route path='/shop/children' element={<LMenuShop/>}/>
                    <Route path='/shop/children/boy' element={<LMenuShop/>}/>
                    <Route path='/shop/children/girl' element={<LMenuShop/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
