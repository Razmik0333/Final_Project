import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addUser } from '../../redux/ducks/userDuck';
import './Register.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultInputValues = { username: '', email: '', password: '' };
  const {
    register, handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: defaultInputValues });

  const onSubmit = (data) => {
    dispatch(addUser(data));
    setTimeout(() => { navigate('/login', { replace: true }); }, 1000);
  };

  const [formMessage, setformMessage] = useState('');

  useEffect(() => {
    if (isSubmitSuccessful) {
      setformMessage('Շնորհակալություն գրանցման համար...');
    }
  }, [isSubmitSuccessful]);

  return (
    <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
      <h3>ՍՏԵՂԾԵԼ ՆՈՐ ՀԱՇԻՎ</h3>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{formMessage}</div>
      <div className="form-group">
        <input
          type="text"
          {...register(
            'username',
            { required: 'Այս դաշտը պարտադիր է լրացնել:', maxLength: 100 }
          )}
          placeholder="Անուն"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">
           {errors.username?.message}
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          {...register('email', { required: 'Այս դաշտը պարտադիր է լրացնել:', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Խնդրում ենք մուտքագրել գործող էլեկտրոնային հասցե ' } })}
          placeholder="Էլ․ հասցե"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="form-group">
        <input
          type="password"
          {...register('password', {
            required: 'Այս դաշտը պարտադիր է լրացնել:',
            min: { value: 3, message: 'Password minimum length must be at least 3 characters' },
          })}
          placeholder="Գաղտնաբառ"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="form-group form-bottom">
        <input type="submit" name="Register" value="Ստեղծել հաշիվ" className="btn_submite" />
      </div>
      <span className="register_span">
        Եթե ունեք հաշիվ, կարող եք
        
        <NavLink to="/login" className="nav-link">Մուտք</NavLink>
      </span>

    </form>
  );
}

export default Register;
