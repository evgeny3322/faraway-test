import React, {useEffect, useState} from 'react';
import {getApiResource, SWAPI_DEV_PEOPLE, SWAPI_DEV_PEOPLE_PAGE} from "../../api/api";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";
import PersonsList from "./PersonsList/PersonsList";
import {withErrorApi} from "../../../hoc/WithErrorApi";
import {useQueryParams} from "../../../hooks/useQueryParams";

export type PeopleListType = {
    id: string
    img: string
    name: string
    url: string
}
const Persons = ({setErrorApi}: any) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page')
    console.log(queryPage)
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
            setPrevPage(res.previous)
            setNextPage(res.next)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }

    useEffect(() => {
        getResource(SWAPI_DEV_PEOPLE_PAGE + queryPage)
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