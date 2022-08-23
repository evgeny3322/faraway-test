import React from 'react';
import {Route, Routes} from "react-router-dom";
import Persons from "../pages/Person/Persons";
import Description from "../pages/Description/Description";
import NotFound from "../pages/NotFound/NotFound";
import style from './AppRouter.module.css'
import Header from "../header/Header";

const AppRouter = () => {
    return (
        <div className={style.app}>
            <Header />
            <Routes>
                    <Route index element={<Persons/>}/>
                    <Route path={'person'} element={<Persons/>}/>
                    <Route path={'/description'} element={<Description/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;