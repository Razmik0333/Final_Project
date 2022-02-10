import { NavLink } from "react-router-dom"

const SearchBar = () => {
    
    return (
        <>
            <div className="container">
                <div className="logos">
                    <NavLink to={'/'}>
                        <img className="logo" src="/icons/2815428.png" alt="logo"/>
                    </NavLink>
                </div>
                <div className="searchings">
                    <input  className="input_button" type={'text'} placeholder={"Որոնել"}></input>
                    <button className="input_button" >
                        <img className="icon_search" src="/icons/156545.png" alt="serach"/>
                    </button>
                </div>
                <div className="action">
                    <NavLink className="action_btn icon_user" to={'/registration'}>
                        <img className="icon_user" src = "/icons/958588.png" alt="icon"/> 
                        <span> Մուտք </span>
                    </NavLink>
                </div>
                <div className=" action preferred">
                    <NavLink className="action_btn" to={'/Preferred'}>
                        <img className="icon_love" src = "/icons/2623043.png" alt="icon"/> 
                        <span> Նախնտրելի </span> 
                    </NavLink>
                </div>
                <div className=" action basket">
                    <NavLink className="action_btn" to={'/basket'}> 
                        <img className="icon_user" src = "/icons/819781.png" alt="icon"/>
                        <span> Զամբյուղ </span> 
                    </NavLink>
                </div>
            </div>
        </>
        
    )
}
export default SearchBar

  
//
//
//
//
//
//
//
//