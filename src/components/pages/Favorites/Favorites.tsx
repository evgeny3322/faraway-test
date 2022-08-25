import {useState, useEffect} from 'react';
import styles from './Favorites.module.css';
import {useAppSelector} from "../../../store/store";
import PersonsList from "../Person/PersonsList/PersonsList";

const FavoritesPage = () => {
    const [people, setPeople] = useState<string[]>([]);

    const storeData = useAppSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map((item: any) => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            setPeople(res);
        }
    }, []);

    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {people.length
                ? <PersonsList people={people}/>
                : <h2 className={styles.comment}>No data</h2>
            }
        </>
    )
}

export default FavoritesPage;
