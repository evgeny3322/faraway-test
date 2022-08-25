import {Link} from 'react-router-dom';
import styles from './PersonPagination.module.css';
import Button from "../../../common/Button/Button";

type PeopleNavigationType = {
    getResource: (prevPage:string) => void
    prevPage: string
    nextPage: string
    counterPage: number
}

const PersonNavigation = ({getResource, prevPage, nextPage, counterPage}:PeopleNavigationType | any) => {

    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <div className={styles.container}>

            <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                <Button
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>

            <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                <Button
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}


export default PersonNavigation;
