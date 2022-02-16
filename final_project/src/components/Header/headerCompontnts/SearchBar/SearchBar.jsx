import { NavLink } from "react-router-dom"

const SearchBar = () => {
    
    return (
        <>
            <div className="searchings">
                <div className="container">
                    <div className="logos">
                        <NavLink to={'/'}>
                            <img className="logo" src="/icons/2815428.png" alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="searching">
                        <input  className="input_button" type={'text'} placeholder={"Որոնել"}></input>
                        <button className="input_button" >
                            <img className="icon_search" src="/icons/156545.png" alt="serach"/>
                        </button>
                    </div>
                    <div className="action">
                        <div className="action_user">
                            <NavLink className="action_btn" to={'/registration'}>
                                <img className="icon_user" src = "/icons/3329703.png" alt="icon"/> 
                                <span> Մուտք </span>
                            </NavLink>
                        </div>
                        <div className="action_preferred">
                            <NavLink className="action_btn" to={'/Preferred'}>
                                <img className="icon_love" src = "/icons/9358186.png" alt="icon"/> 
                                <span> Նախընտրելի </span> 
                            </NavLink>
                        </div>
                        <div className="action_basket">
                            <NavLink className="action_btn" to={'/basket'}> 
                                <img className="icon_love" src = "/icons/9349824.png" alt="icon"/>
                                <span> Զամբյուղ </span> 
                            </NavLink>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}
export default SearchBar