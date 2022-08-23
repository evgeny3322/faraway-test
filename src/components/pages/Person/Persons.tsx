import React, {useEffect, useState} from 'react';
import {getApiResource, SWAPI_DEV_PEOPLE} from "../../api/api";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";
import PersonsList from "./PersonsList/PersonsList";
import {withErrorApi} from "../../../hoc/WithErrorApi";

export type PeopleListType = {
    id: string
    img: string
    name: string
    url: string
}
const Persons = ({setErrorApi}:any) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const getResource = async (url: string) => {
        const res = await getApiResource(url);
        if (res) {
            const peopleList = res.results.map(({name, url}: PeopleListType) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img
                }
            });
            setPeople(peopleList)
            setErrorApi(false)
        } else{
            setErrorApi(true)
        }


    }

    useEffect(() => {
        getResource(SWAPI_DEV_PEOPLE);
    }, [])


    return (
        <div>
            {people && (
                <PersonsList people={people}/>
            )}

        </div>
    );
};

export default withErrorApi(Persons);