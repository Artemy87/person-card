import React from 'react';

import  styles from './person.module.css';

const Person = () => {
    return (
        <div className={styles.person}>
            <div className={styles.personHeader}>
                Персональные данные
            </div>
            <div className={styles.form}>
                <div>Имя</div>
                <input placeholder='Иван'/>
            </div>
            <div className={styles.form}>
                <div>Возраст</div>
                <input placeholder='99'/>
            </div>
        </div>
    )
}

export default Person;