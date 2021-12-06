import React, { Component } from "react";
import AppHeader from "../Header";
import FormPersonCard from "../FormPersonCard";
import ViewPersonCard from "../View";
import Footer from "../Footer";
import { Routes, Route } from 'react-router-dom';

import styles from "./app.module.css";


export default class App extends Component {
  ID = 100;

  state = {
    personData: [this.createItem()]
  }

  deleteItem = (id) => {
    this.setState(({ personData }) => {
      const ind = personData.findIndex((el) => el.id === id);
      return {
          personData: [...personData.slice(0, ind), ...personData.slice(ind + 1)],
      };
    });
  };

  createItem(name, age) {
    return {id: this.ID++, name, age, children: []};
  };

  addItem = (name, age) => {
    this.setState(({ personData }) => {
      return {
        personData: [...personData, this.createItem(name, age)],
      };
    });
  };

  saveClick(){
    console.log('Написать ф-ю onClick в app.js')
  }

  render() {
    return (
      <div className={styles.app}>
        <AppHeader />
        <Routes>
          <Route
            path={'/form'}
            element={ <FormPersonCard
                personData={this.state.personData}
                deleteItem={this.deleteItem}
                addItem={this.addItem}
                saveClick={this.saveClick}
                />
            } />
          <Route
            path='/preview'
            element={ <ViewPersonCard
              personData={this.state.personData} /> } />
        </Routes>
        <Footer />
      </div>
    );
  }
}
