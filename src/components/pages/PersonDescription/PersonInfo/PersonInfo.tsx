import styles from './PersonInfo.module.css';
import React from "react";

const PersonInfo = ({ personInfo,personName }:any) => (
    <>
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <ul className={styles.list__container}>
                {personInfo.map(({ title, data }:any) => (
                    data && (
                        <li className={styles.list__item} key={title}>
                            <span className={styles.item__title}>{title}</span>: {data}
                        </li>
                    )
                ))}
            </ul>
        </div>
    </>
)



export default PersonInfo;