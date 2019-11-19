import React from "react";

const Book = (props) =>
    (
        <div>
            <img alt={props.volumeInfo.title} src={props.volumeInfo.imageLinks.thumbnail} /> <br />
            <h1>{props.volumeInfo.title}</h1>
            <p>{props.volumeInfo.description}</p>
            <p>{props.volumeInfo.authors}</p>
            <a alt={props.volumeInfo.title} target="_blank" rel="nonopener nonreferrer" href={props.saleInfo.buyLink}>Buy</a> <br />
            <p> {props.saleInfo.listPrice.amount} </p>
            <p>{props.saleInfo.country}</p>
        </div>
    )

export default Book;