import React from 'react';
import Person from "./Person";
import ChildrenList from "../ChildrenList";

import styles from './FormPersonCard.module.css';


const FormPersonCard = ({ personData, deleteItem, addItem, saveClick }) => {
  debugger;
    return (
    <>
        <div className={styles.pagePerson}>
            <Person />
        </div>
        <div className={styles.pageChildren}>
            <ChildrenList
                personData={personData}
                onDeleted={deleteItem}
                onAdd={addItem}
                saveClick={saveClick}
            />
        </div>
    </>
  )
}

export default FormPersonCard;