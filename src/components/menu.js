import React from "react";
import { Link } from 'react-router-dom';



function Menu() {
    return (
        
            <div className="menu">
                <Link className="menuButtons" to="/list">List of Students</Link>

                <Link className="menuButtons" to="/dashBoard">DashBoard</Link>
            </div>
        
    )
}
export default Menu;