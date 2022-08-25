import {Link} from 'react-router-dom';
import styles from './SearchInfo.module.css';

type SearchInfoType = {
    id: string
    name: string
    img: string
}

const SearchInfo = ({people}: any) => (
    <div className={styles.list__body}>
        {people.length
            ? (
                <ul className={styles.list__container}>
                    {people.map(({id, name, img}: SearchInfoType) =>
                        <li className={styles.list__item} key={id}>
                            <Link to={`/people/${id}`}>
                                <img className={styles.person__photo} src={img} alt={name}/>
                                <p className={styles.person__name}>{name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            )
            : <h2 className={styles.person__comment}>No results</h2>
        }
    </div>
)

export default SearchInfo;
