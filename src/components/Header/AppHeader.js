import React from 'react';
import headerImage from './image/Logo_imi_horizontal.svg';

import styles from './app-header.module.css';


const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <a>
          <img src={headerImage} alt=''/>
        </a>
      </div>
      <div className={styles.headerForm}>
        <a>Форма </a>
        <a>Превью</a>
      </div>
    </div>
  )
}

export default AppHeader;