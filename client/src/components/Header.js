import React from "react"
import { Link } from "react-router-dom"

const Header = props =>
    (
        <div>
            <nav style={{ backgroundColor: "#1387ff" }}>
                <div className="nav-wrapper">
                    <Link to={"/"} className="brand-logo" style={{ marginLeft: "25px", fontSize: 30 }}>Main Page</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/savedBooks"} style={{ fontSize: "30px", marginRight: 25 }}>Saved</Link></li>
                    </ul>

                </div>
            </nav>
            <div>
                <div className="center-align">
                    <h1>(React) Google Books Search</h1>
                    <h3>Search for and Save Books of Interest</h3>
                </div>
                <input style={{ width: "25%", fontSize: 30 }} placeholder="Book title" id="bookName"></input>
                <button onClick={props.takeBook} class="btn waves-effect waves-light btn-large" type="submit" style={{ fontSize: 30, margin: 30, backgroundColor: "#1387ff" }}>Search</button>
            </div>
        </div>

    )


export default Header