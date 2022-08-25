import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styles from './PersonDescription.module.css';
import {getPeopleImage} from "../../../services/getPeopleData";
import {getApiResource} from "../../api/api";
import {withErrorApi} from "../../../hoc/WithErrorApi";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonPhoto from "./PersonPhoto/PersonPhoto";
import PersonBackLink from "../Person/PersonBackLink/PersonBackLink";
import {useSelector} from "react-redux";


const PersonDescription = ({setErrorApi}: any) => {
    const [personId, setPersonId] = useState<string | undefined>('');
    const [personInfo, setPersonInfo] = useState<any>(null);
    const [personName, setPersonName] = useState<string>('');
    const [personPhoto, setPersonPhoto] = useState<string>('');
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    // @ts-ignore
    const storeData = useSelector(state => state.favoriteReducer);

    const {id} = useParams();


    useEffect(() => {
        (async () => {
            setPersonId(id);

            const res = await getApiResource(`${`https://swapi.dev/api/people`}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);
            }

            setErrorApi(!res);
        })();
    }, []);

    return (
        <>
            <PersonBackLink/>

            <div className={styles.wrapper}>
                <div className={styles.container}>

                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} personName={personName} />}

                </div>
            </div>
        </>
    )
}


export default withErrorApi(PersonDescription);