import React from 'react';
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    {/*<Route path={'login'} element={<Login/>}/>*/}


                    {/*<Route path={'*'} element={<NotFound/>}/>*/}

                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;