import { useState } from "react"
import {NavLink} from "react-router-dom"
import './Register.css';

function Register(){
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [age, setAge]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("");


  function handleName(evt){
    setName(evt.target.value);
      setSubmite(false)

    }

    function handleSurname(evt){
        setSurname(evt.target.value);
        setSubmite(false)

   }
   
    
    function handleAge(evt){
        setAge(evt.target.value);
        setSubmite(false)

    }

    function handleEmail(evt){
      setEmail(evt.target.value);
      setSubmite(false)

  }
    function handlePassword(evt){
        setPassword(evt.target.value)
        setSubmite(false)

    }

    function handleSubmit(evt){
        evt.preventDefault();
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)|| name==="" ||surname==="" ||age==="" || password==="" ||email===""){
            setError(true);
            
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
    <div className="register">
      <div>
        <h2>ՍՏԵՂԾԵԼ ՆՈՐ ՀԱՇԻՎ</h2>
      </div>
 
      
      <div className="errorMessages">
        {errorMessage()}
      </div>
        
          <form className="registtration_form">
              
              <input value={name} placeholder="Անուն" type="text" onChange={handleName}/>
              <br/>
              <input value={surname} placeholder="Ազգանուն" type="text" onChange={handleSurname}/>
              <br/>
              <input value={age} placeholder="Տարիք" type="number" onChange={handleAge}/>
              <br/>
              <input value={email} placeholder="էլ․հասցե" type="text" onChange={handleEmail}/>
              <br/>
              <input value={password} placeholder="Գաղտնաբառ" type="password" onChange={handlePassword}/>
              <br/>

              <button type="Submite"onClick={handleSubmit} className="registration_btn" >Ստեղծել հաշիվ</button>
              <span>Արդեն գրանցվե ՞լ ես  <NavLink className='navLink777' to='/login'>Մուտք</NavLink></span> 
               

          </form>
        </div>
    )
}

export default Register
