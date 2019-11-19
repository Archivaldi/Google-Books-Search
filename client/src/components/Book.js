import React from "react";

const Book = (props) =>

    (
        <div>
            <div className="col s12 m7">
                <h2 style={{ marginTop: 25 }} className="header">{props.volumeInfo.title}</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{props.volumeInfo.description}</p>
                            <br />
                            <br />
                            <p className="right">{props.volumeInfo.authors}</p>
                        </div>
                        <div className="card-action">
                            <p> ${props.saleInfo.listPrice.amount} </p>
                            <p>
                                <a style={{display: "inline-block"}} href={props.saleInfo.buyLink}>Buy</a>
                                <a onClick={props.saveBook} style={{ backgroundColor: "#1387ff", display: "inline-block" }} className="btn-floating btn-large waves-effect waves-light right">Save</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //       <img alt={props.volumeInfo.title} src={props.volumeInfo.imageLinks.thumbnail} /> <br />
        //        <h1>{props.volumeInfo.title}</h1>
        //       <p>{props.volumeInfo.description}</p>
        //        <p>{props.volumeInfo.authors}</p>
        //       <a alt={props.volumeInfo.title} target="_blank" rel="nonopener nonreferrer" href={props.saleInfo.buyLink}>Buy</a> <br />
        //       <p> {props.saleInfo.listPrice.amount} </p>
        //       <p>{props.saleInfo.country}</p>
        // </div>
    )

export default Book;