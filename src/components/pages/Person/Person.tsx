import React, {useEffect, useState} from 'react';
import {getApiResource, SWAPI_DEV_PEOPLE} from "../../api/api";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";

type PeopleList = {
    name: string
    url: string
}
const Person = () => {
    const [people, setPeople] = useState<any>(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const getResource = async (url: string) => {
        const res = await getApiResource(url);

        const peopleList = res.results.map(({name, url}: PeopleList) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)
            return {
                id,
                name,
                url
            }
        });
        setPeople(peopleList)

    }

    useEffect(() => {
        getResource(SWAPI_DEV_PEOPLE);
    }, [])


    return (
        <div>
            {people && (
                <ul>
                    {people.map(({name, url}: PeopleList) =>
                        <li key={name}>
                            {name}
                        </li>
                    )}
                </ul>
            )}

        </div>
    );
};

export default Person;