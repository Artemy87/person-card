import React, { Component } from "react";

import styles from "./children-list-item.module.css";


export default class ChildrenListItem extends Component {

  state = {
      name: '',
      age: '',
  }

  onNameChange = (event) => {
      this.setState({
          name: event.target.value
      })
  }

  onAgeChange = (event) => {
      this.setState({
          age: event.target.value
      })
  }

  onNameSubmit = (event) => {
      event.preventDefault();
      this.props.onAdd(this.state.name)
  }

  onAgeSubmit = (event) => {
      event.preventDefault();
      this.props.onAdd(this.state.age)
  }

  render() {
    const { onDeleted } = this.props;

    return (
      <>
        <form
          className={styles.form}
          onSubmit={this.onNameSubmit}>
          <div className={styles.formName}>Имя</div>
          <input 
            type='text'
            className={styles.inputName}
            onChange={this.onNameChange}/>
        </form>
        <form
          className={styles.form}
          onSubmit={this.onAgeSubmit}>
          <div className={styles.formAge}>Возраст</div>
          <input 
            type='text'
            className={styles.inputAge}
            onChange={this.onAgeChange}/>
        </form>
        <button
          className={styles.buttonDelete}
          onClick={onDeleted}
          >Удалить</button>
      </>
    );
  }
}

