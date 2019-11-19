import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router } from "react-router-dom"

import Book from "./components/Book";
import Header from "./components/Header";
import Search from "./components/Search"

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      test: true
    }
  }

  takeBook = () => {
    let book = document.getElementById("bookName").value
    fetch('/getBookInfo', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ book })
    })
      .then(r => r.json())
      .then(r => {
        let items = r.items;
        this.setState({ items }, () => {
        })

      })
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <Router>
          <div className="container">
            <Header />
            <Search takeBook={this.takeBook}  />
            <Switch>
              <Route path="/">
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div className="container">
          <Router>
            <div>
              <Header />
              <Search takeBook={this.takeBook}  />
              <Switch>
                <Route path="/">
                </Route>
              </Switch>
            </div>
          </Router>

          {this.state.items.map((x) =>

            <Book
              key={x.id}
              volumeInfo={x.volumeInfo}
              saleInfo={x.saleInfo}
            />)}

        </div>
      )
    }
  }
}


export default App