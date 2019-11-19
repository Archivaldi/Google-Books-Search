import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router } from "react-router-dom"

import Book from "./components/Book";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      test: true
    }
  }

  takeBook = () => {
    debugger;
    let book = document.getElementById("bookName").value
    console.log(book)
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
        debugger;

        let items = r.items;

        this.setState({ items }, () => {
          // console.log(r.items)
          debugger;

          console.log(this.state.items);
        })

      })
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <Router>
          <div className="container">
            <Header takeBook={this.takeBook} />
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
              <Header takeBook={this.takeBook} />
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