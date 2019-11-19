import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router } from "react-router-dom"

import Book from "./components/Book";
import Header from "./components/Header";
import Search from "./components/Search"

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  saveBook = (id) => {
    let book_info = [];
    for (let i = 0; i < this.state.items.length; i++){
      if (this.state.items[i].id === id){
       book_info = this.state.items[i]
      }
    } 
    let saved_book = {
      title: book_info.volumeInfo.title,
      img: book_info.volumeInfo.imageLinks.thumbnail,
      descriptioin: book_info.volumeInfo.description,
      authors: book_info.volumeInfo.authors,
      price: book_info.saleInfo.listPrice.amount,
      link: book_info.saleInfo.buyLink
    }
    fetch(`/saveBook`, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({saved_book})
    })
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
              saveBook = {() => this.saveBook(x.id)}
            />)}

        </div>
      )
    }
  }
}


export default App