import React from "react"
import { Link } from "react-router-dom"

const Header = () =>
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
        </div>

    )


export default Header