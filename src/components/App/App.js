import React, { Component } from "react";
import AppHeader from "../Header";
import Person from "../Person";
import ChildrenList from "../ChildrenList";
// import ViewPersonCard from "./components/View/ViewPersonCard";
import Footer from "../Footer";

import styles from "./app.module.css";


export default class App extends Component {

  state = {
    personData: [
      { id: 0, name: "Иван", age: 10 },
      { id: 1, name: "Петр", age: 14 },
    ]
  }

  deleteItem = (id) => {
    this.setState(({ personData }) => {
      const index = personData.findIndex((el) => el.id === id);
      return {
        personData: [
          ...personData.slice(0, index),
          ...personData.slice(index + 1)
        ]
      };
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.pageHeader}>
          <AppHeader />
        </div>
        <div className={styles.pagePerson}>
          <Person />
        </div>
        <div className={styles.pageChildren}>
          <ChildrenList
            personData={this.state.personData}
            onDeleted={this.deleteItem}
            />
        </div>
        <div className={styles.pageFooter}>
          <Footer />
        </div>
        {/* <ViewPersonCard /> */}
      </div>
    );
  }
}
