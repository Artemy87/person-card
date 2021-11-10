import React, { Component } from "react";
import AppHeader from "../Header";
import Person from "../Person";
import ChildrenList from "../ChildrenList";
// import ViewPersonCard from "./components/View/ViewPersonCard";
import Footer from "../Footer";

import styles from "./app.module.css";

const personData = [
  { id: 0, name: "Иван", age: 10 },
  { id: 1, name: "Петр", age: 14 },
];

const removeChildren = (personData) => {
  return (
    console.log(personData.name)
  )
}

export default class App extends Component {
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
            personData={personData}
            removeChildren={removeChildren}
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
