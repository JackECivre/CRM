import React from 'react';
import Time from "./time";
import {Link} from "react-router-dom";
import "../fonts/crm.otf"


function Navbar() {
    return (
        <div className="headerContainer">

            <Link className="header" to="/">
                <h1>
                    HOGWARTS CRM
                </h1>
            </Link>
            <Time />
        </div>
    )
}

export default Navbar;






