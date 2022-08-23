import React, {FC} from 'react';
import {PeopleListType} from "../Persons";
import style from './PersonsList.module.css'

const PersonsList = ({people}: any) => {
    return (
        <ul className={style.personsList}>
            {people.map(({id, name, img}: PeopleListType) =>
                <li className={style.personsList__item} key={id}>

                    <a className={style.personsList__link} href="#">
                        <img className={style.personsList__img} src={img} alt={name}/>
                        <p className={style.personsList__text}>{name}</p>
                    </a>

                </li>
            )}
        </ul>
    );
};

export default PersonsList;