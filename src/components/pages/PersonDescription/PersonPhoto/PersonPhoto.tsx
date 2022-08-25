import iconFavoriteFill from './img/favorite-fill.svg';
import iconFavorite from './img/favorite.svg';
import styles from './PersonPhoto.module.css';
import {useDispatch} from "react-redux";
import {removePersonFromFavorites, setPersonToFavorite} from "../../../../store/actions/actions";

const PersonPhoto = ({
                         personId,
                         personPhoto,
                         personName,
                         personFavorite,
                         setPersonFavorite
                     }:any) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorites(personId));
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }));
        }

        setPersonFavorite(!personFavorite);
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavoritePeople}
                    className={styles.favorite}
                    alt="Add to favorite"
                />
            </div>
        </>
    )
}

export default PersonPhoto;
