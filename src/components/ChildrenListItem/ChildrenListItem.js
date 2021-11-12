import React, { Component } from "react";

import styles from "./children-list-item.module.css";


export default class ChildrenListItem extends Component {

  render() {
    const { name, age, onDeleted } = this.props;

    return (
      <>
        <form className={styles.form}>
          <div className={styles.formName}>Имя</div>
          <input 
            type='text'
            className={styles.inputName} />
        </form>
        <form className={styles.form}>
          <div className={styles.formAge}>Возраст</div>
          <input 
            type='text'
            className={styles.inputAge} />
        </form>
        <button
          className={styles.buttonRemove}
          onClick={onDeleted}
          >Удалить</button>
      </>
    );
  }
}

