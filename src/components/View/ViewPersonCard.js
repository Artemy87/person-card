import React from 'react';

import styles from './view-person-card.module.css';

const ViewPersonCard = () => {
  return (
    <div className={styles.viewPersonCard}>
      <h1>Персональные данные</h1>
      <h2>Василий, 30 лет</h2>
      <h2>Дети</h2>
      <h2>Петр, 10 лет</h2>
      <h2>Васлилй, 14 лет</h2>
  </div>
  )
}

export default ViewPersonCard;