import React, {FC} from 'react';
import {PeopleListType} from "../Persons";
import style from './PersonsList.module.css'
import {Link} from "react-router-dom";

const PersonsList = ({people}: any) => {
    return (
        <ul className={style.personsList}>
            {people.map(({id, name, img}: PeopleListType) =>
                <li className={style.personsList__item} key={id}>
                    <Link className={style.personsList__link} to={`/people/${id}`}>
                            <img className={style.personsList__img} src={img} alt={name}/>
                            <p className={style.personsList__text}>{name}</p>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default PersonsList;