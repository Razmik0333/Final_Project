import React from "react"
import NavBar from "../navBar"
import SearchBar from "../searchBar"
import './Header.css';
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
