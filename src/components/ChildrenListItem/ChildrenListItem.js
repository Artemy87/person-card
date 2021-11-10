import React, { Component } from "react";

import styles from "./children-list-item.module.css";


export default class ChildrenListItem extends Component {

  removeChildren = () => {
    console.log(this.props.name)
  }

  render() {

    const { name, age } = this.props;

    return (
      <>
        <div className={styles.form}>
          <div className={styles.formName}>Имя</div>
          <div>{name}</div>
        </div>
        <div className={styles.form}>
          <div className={styles.formAge}>Возраст</div>
          <div>{age}</div>
        </div>
        <button
          className={styles.buttonRemove}
          onClick={this.removeChildren}
          >Удалить</button>
      </>
    );
  }
}

