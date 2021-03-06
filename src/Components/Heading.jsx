import React from 'react';
import {NavLink} from "react-router-dom"

const Heading = () => {
    return (
        <div>
            <header style={{padding: "10px"}} className="pink darken-2 white-text">
            <p className="center"> 
            <NavLink to="/" className="white-text">Home</NavLink> |   
            <NavLink className="white-text" to="/search"> Search By Country</NavLink></p>
            </header>
        </div>
    );
}

export default Heading;
