import icon from './img/cancel.svg';
import styles from './Input.module.css';

const Input = ({
                   value,
                   handleInputChange,
                   placeholder,
               }: any) => (
    <div className={styles.wrapper__input}>
        <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img
            onClick={() => value && handleInputChange('')}
            src={icon}
            className={styles.clear}
            alt="Clear"
        />
    </div>
)


export default Input;

