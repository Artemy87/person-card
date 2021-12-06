import React from 'react';
import headerImage from './image/Logo_imi_horizontal.svg';
import { Link } from 'react-router-dom';

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
        <Link to='/form'>Форма </Link>
        <Link to='/preview'>Превью</Link>
      </div>
    </div>
  )
}

export default AppHeader;