import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

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
    if (this.state.items.length == 0) {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/">
                <Home takeBook={this.takeBook} />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/">
                  <Home takeBook={this.takeBook} />
                </Route>
              </Switch>
            </div>
          </Router>
          
          {this.state.items.map((x) => 
            <p key={x.id}>
              <img alt={x.volumeInfo.title} src={x.volumeInfo.imageLinks.thumbnail} /> <br />
             {x.volumeInfo.title} <br />
             {x.volumeInfo.authors} <br />
             {x.saleInfo.buyLink} <br />
             {x.saleInfo.country} <br />
            </p>
          )}

        </div>
      )
    }
  }
}

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <input id="bookName"></input> <button onClick={props.takeBook}>Search</button>
  </div>
)


export default App