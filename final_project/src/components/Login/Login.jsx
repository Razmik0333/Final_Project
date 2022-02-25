import { useState } from "react";
import './Register.css';
import {NavLink}from "react-router-dom";

function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("")
   
//     function submiteForm(e){
//     e.preventDefault()
   
//    const newEntry={email:email,password:password};
//    setAllEntry([...allEntry, newEntry]);
//    console.log(allEntry);

//     }
    function handleSubmit(evt){
        evt.preventDefault();
     
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)|| email==="" || password==="" ){
            setError(true)
        }
        else{
            setSubmite(true);
            setError(false);
        }

        const newEntry={email:email,password:password};
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
     }

     const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display:submite ? '' : 'none',
            }}>
            <span className="error_mesiges">շնորհավորում ենք  դուք  մուտք գործեցիք!!</span>
          </div>
        );
      };
  
  
     
  
      function errorMessage(){
        return(
            <div className="error" style={{
              display: error ? '' : 'none',
            }}>
                <span >Խնդրում ենք ճիշտ մուտքագրել բոլոր դաշտերը</span>
            </div>
        )
      }
      
  




    return(
          <div className="login">
              
            <form className="login_form" >
                 <h2>ԳՐԱՆՑՎԱԾ ՀԱՃԱԽՈՐԴ</h2>
                 <div className="errorMessages">
                {errorMessage()}
                {successMessage()}
              </div>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} name="email" placeholder="էլ․ հասցե" autoComplete="off" type="text"/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} name="password" placeholder="Գաղտնաբառ" autoComplete="off" type="password"/>
                <button onClick={handleSubmit}  className="login_btn" type="submit">Մուտք</button>
                <span>Եթե չունեք հաշիվ, կարող եք  <NavLink className='navLink777' to='/register'>Գրանցվել </NavLink></span>
                

             </form>
            

        </div>
    )
}
export default Login