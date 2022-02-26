import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout() {
  const user = useSelector((state) => state.userDuck.user);

  const loginMenu = <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>;
  const registerMenu = <li className="nav-item"><NavLink to="/register" className="nav-link">Register</NavLink></li>;
  const logoutMenu = <li className="nav-item"><NavLink to="/logout" onClick={() => window.location.assign('/')} className="nav-link">Logout</NavLink></li>;
  const currentUser = <div className="nav-item user-info"><span className="nav-link">{user.username}</span></div>;

  return (

    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills">

              { !user.username ? loginMenu : '' }
              { !user.username ? registerMenu : '' }
              { user.username ? logoutMenu : '' }
            </ul>
            { user.username ? currentUser : ''}
          </div>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
