import './Register.css';
import { useState } from "react";
import {NavLink} from "react-router-dom"
function Register(){
    const [name, setName]=useState("");
    const [surname, setSurname]=useState("");
    const [age, setAge]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [allEntry,setAllEntry]=useState([]);
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("")
   

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


    function handleSubmite(evt){
        evt.preventDefault();
     
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)|| email==="" || password==="" || name===""|| surname==="" ||age=== ""  ){
            setError(true)
        }
        else{
            setSubmite(true);
            setError(false);
        }

        const newEntry={name:name,surname:surname,age:age,email:email,password:password};
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
            <span className="error_mesiges">շնորհավորում ենք  դուք  գրայնցվեցիք!!</span>
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
        <div className="register">
            <form  className="registtration_form">
            
                <h2>ՍՏԵՂԾԵԼ ՆՈՐ ՀԱՇԻՎ</h2>
                <div className="errorMessages">
                   {errorMessage()}
                   {successMessage()}
                </div>
                <input value={name} onChange={handleName} name="name" placeholder="Անուն" type="text"/>
                <input value={surname} onChange={handleSurname} name="surname" placeholder="Ազգանուն" type="text"/>
                <input value={age} onChange={handleAge} name="age" placeholder="Տարիք" type="number"/>
                <input value={email} onChange={handleEmail} name="email" placeholder="Էլ․ հասցե" type="text"/>
                <input value={password} onChange={handlePassword} name="password" placeholder="Գաղտնաբառ" type="password"/>
                <button onClick={handleSubmite} className="registration_btn" type="submit">Ստեղծել հաշիվ </button>
                <span>Եթե չունեք հաշիվ, կարող եք <NavLink className='navLink777' to='/login'>Մուտք</NavLink></span> 
                
                
            </form>
           
           
             </div>
             )
         };
         export default Register

