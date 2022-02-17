import { useState } from "react";
import {NavLink} from "react-router-dom";
import './Register.css';

 

function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("")
    
    function handlePassword(evt){
        setPassword(evt.target.value);
        setSubmite(false)

    }
    function handleEmail(event){
      setEmail(event.target.value);
      setSubmite(false)
    }

    function handleSubmit(evt){
       evt.preventDefault();
       if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)|| email==="" || password==="" ){
           setError(true)
       }
       else{
           setSubmite(true);
           setError(false);
       }
    }



   

    function errorMessage(){
      return(
          <div className="error" style={{
            display: error ? '' : 'none',
          }}>
              <span className="error_mesiges">Խնդրում ենք ճիշտ մուտքագրել բոլոր դաշտերը</span>
          </div>
      )
    }
    


    return(

        

        <div className="login">

      <div>
        <h2>ԳՐԱՆՑՎԱԾ ՀԱՃԱԽՈՐԴ</h2>
      </div>
 
      <div className="errorMessages">
        {errorMessage()}
      </div>




          <form className="login_form">
              <input value={email} onChange={handleEmail} placeholder="էլ, հասցե" className="log_inp" type="text"/>
              <br/>
              <input value={password} onChange={handlePassword} placeholder="Գաղտնաբառ" className="log_inp" type="password"/>
              <br/>

              <button onClick={handleSubmit}  className="login_btn" type="Submit">Մուտք</button>
              <span>Եթե չունեք հաշիվ, կարող եք  <NavLink className='navLink777' to='/register'>Գրանցվել </NavLink></span> 


          </form>
        </div>
    )
}

export default Login
