import {useCallback, useEffect, useState} from 'react';
import {debounce} from 'lodash';
import styles from './Search.module.css';
import {getApiResource} from "../../api/api";
import {getPeopleId, getPeopleImage} from "../../../services/getPeopleData";
import SearchInfo from "./SearchInfo/SearchInfo/SearchInfo";
import {withErrorApi} from "../../../hoc/WithErrorApi";
import Input from "../../common/Input/Input";

const SearchPage = ({setErrorApi}: any) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse = async (param: any) => {
        const res = await getApiResource('https://swapi.dev/api/people/?search=' + param);

        if (res) {
            const peopleList = res.results.map(({name, url}: any) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }
            });

            setPeople(peopleList);
        }

        setErrorApi(!res);
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (value: string) => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Search</h1>

            <Input
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />

            <SearchInfo people={people}/>
        </>
    )
}


export default withErrorApi(SearchPage);
