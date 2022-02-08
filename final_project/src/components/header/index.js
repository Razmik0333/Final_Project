import React from "react"
import NavBar from "../navBar"
import SearchBar from "../searchBar"
// import { NavLink } from "react-router-dom"

const Header = ()=> {
    return (
        <>
            <div className="navigations">
                <NavBar />
            </div>
            <div className="searching">
                <SearchBar />
            </div>
        </>
    )
}
export default Header

// <NavLink to={'/searchBar'}> SearchBaraso </NavLink>
// <NavLink to={'/'}> NavBar </NavLink>