import React from "react";

import Header from "./Header"
import SavedBook from "./SavedBook"

class SavedBooks extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch("/getBooks")
            .then(r => r.json)
            .then(r => this.setState({ books: r }))
    }

    render() {
        if (this.state.books === 0) {
            return (
                <div>
                    <Header />
                    <h1>You do not have saved books</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    {this.state.books.map((x) =>

                        <SavedBook
                            key={x.id}
                            title={x.title}
                            img={x.img}
                            description={x.description}
                            authors={x.authors}
                            price={x.price}
                            link={x.link}
                        />)}
                </div>
            )
        }
    }
}

export default SavedBooks;