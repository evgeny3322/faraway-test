import iconFavoriteFill from './img/favorite-fill.svg';
import iconFavorite from './img/favorite.svg';
import styles from './PersonPhoto.module.css';
import {removePersonFromFavorites, setPersonToFavorite} from "../../../../../store/actions/actions";
import {useAppDispatch} from "../../../../../store/store";

type PersonPhotoType = {
    personId: string | undefined
    personPhoto: string
    personName: string
    personFavorite: boolean
    setPersonFavorite: any
}

const PersonPhoto = ({
                         personId,
                         personPhoto,
                         personName,
                         personFavorite,
                         setPersonFavorite
                     }: PersonPhotoType ) => {
    const dispatch = useAppDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorites(personId!));
        } else {
            dispatch(setPersonToFavorite({
                [personId!]: {
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
                <img className={styles.photo} src={personPhoto} alt={personName}/>
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
