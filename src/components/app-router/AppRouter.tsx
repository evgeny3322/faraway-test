import React from 'react';
import {Route, Routes} from "react-router-dom";
import Persons from "../pages/Person/Persons";
import NotFound from "../pages/NotFound/NotFound";
import style from './AppRouter.module.css'
import Header from "../header/Header";
import Home from "../pages/Home/Home";
import PersonDescription from "../pages/PersonDescription/PersonDescription";
import Favorites from "../pages/Favorites/Favorites";
import Search from "../pages/Search/Search";

const AppRouter = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/people'} element={<Persons/>}/>
                <Route path={'/people/:id'} element={<PersonDescription/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
                <Route path={'/search'} element={<Search/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>


        </div>
    );
};

export default AppRouter;