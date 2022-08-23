import React from 'react';
import style from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={style.notfound}>
            <h1 className={style.notfound__h}>404</h1>
            <div className={style.notfound__text}>
                This is not the <br/>
                web page you <br/>
                are looking for :(
            </div>
        </div>
    );
};

export default NotFound;