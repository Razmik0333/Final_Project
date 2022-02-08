import { NavLink } from "react-router-dom"

const SearchBar = () => {
    
    return (
        <>
            <div className="container">
                    <div className="logos">
                        <NavLink to={'/'}><img className="logo" src="/icons/2815428.png" alt="logo"/></NavLink>
                    </div>
                    <div className="searchings">
                        <input type={'text'}></input>
                        <button><img className="icon_search" src="/icons/156545.png" alt="serach"/></button>
                    </div>
                    <div className="action">
                        <div><img className="icon_user" src = "/icons/958588.png" alt="icon"/></div>
                        <div><NavLink  className="action_btn" to={'/registration'}> Մուտք </NavLink></div>
                    </div>
                    <div className=" action preferred">
                        <div><img className="icon_love" src = "/icons/2623043.png" alt="icon"/></div>
                        <div><NavLink className="action_btn" to={'/Preferred'}> Նախնտրելի </NavLink></div>
                    </div>
                    <div className=" action basket">
                        <div><img className="icon_user" src = "/icons/819781.png" alt="icon"/></div>
                        <div><NavLink className="action_btn" to={'/basket'}> Զամբյուղ </NavLink></div>
                    </div>
            </div>
        </>
        
    )
}
export default SearchBar