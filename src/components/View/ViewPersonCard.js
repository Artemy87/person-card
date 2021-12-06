import React from 'react';

import styles from './view-person-card.module.css';


const ViewPersonCard = ({ personData }) => {
  return (
    <div className={styles.person_card}>
      <div className={styles.header_person_card}>Персональные данные</div>
      <div className={styles.name_person_card}>{personData[0].name}</div>
      <div className={styles.header_child}>Дети</div>
      <div className={styles.name_child}>Петр, 10 лет</div>
  </div>
  )
}

export default ViewPersonCard;