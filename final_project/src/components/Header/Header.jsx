import React from "react"
import NavBar from "./headerCompontnts/NavBar/NavBar";
import SearchBar from "./headerCompontnts/SearchBar/SearchBar";
// import './Header.css';
// import { NavLink } from "react-router-dom"

const Header = ()=> {
    return (
        <> 
            <NavBar />
            <SearchBar />
        </>
    )
}
export default Header
