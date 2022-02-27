/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../redux/ducks/userDuck';
import '../Register/Register.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userDuck);
  const defaultInputValues = { username: '', password: '' };
  console.log('🚀 ~ file: Login.jsx ~ line 13 ~ Login ~ user', user);
  const {
    register, handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: defaultInputValues });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const [formMessage, setformMessage] = useState('');

  useEffect(() => {
    if (isSubmitSuccessful) {
      if (user.username) {
        setformMessage('Մուտք գործեցիք հաջողությամբ...');
        setTimeout(() => { navigate('/', { replace: true }); }, 500);
      } else {
        setformMessage('Մուտքը չստացվեց:');
      }
    }
  }, [isSubmitSuccessful, user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>ԳՐԱՆՑՎԱԾ ՀԱՃԱԽՈՐԴ</h3>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>{formMessage}</div>
      <div className="form-group">
        <input
          type="text"
          {...register(
            'username',
            { required: 'Այս դաշտը պարտադիր է լրացնել:' },
          )}
          placeholder="Անուն"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.username?.message}</div>
      </div>
      <div className="form-group">
        <input
          type="password"
          {...register('password', { required: 'Այս դաշտը պարտադիր է լրացնել:' })}
          placeholder="Գաղտնաբառ"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="form-group form-bottom">
        <input type="submit" name="Login" value="Մուտք" className="btn_submite" />
      </div>
      <span className="register_span">
        Եթե չունեք հաշիվ, կարող եք

        <NavLink to="/register" className="nav-link">Գրանցվել</NavLink>
      </span>
    </form>
  );
}

export default Login;
