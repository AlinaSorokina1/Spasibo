/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';

// import './Navbar.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(user);
  
  const logOut = async (): Promise<void> => {
    const data: { message: string } = await (await fetch('/api/auth/logout')).json();


    if (data.message === 'success') {
      dispatch({ type: 'auth/logout' });
    }
  };

  console.log(user);

  return (
    <>
      <div className="navbar__container">
        <div className="navbar__menu">
          {!user ? (
            <li>
              <NavLink to="/">Log-in</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/students">Our students</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Change students</NavLink>
              </li>
              <li>
                <Link to="/" onClick={logOut}>
                  logout{' '}
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

{
  /* <li>
          <NavLink to="/">Log-in</NavLink>
        </li>
        <li>
          <NavLink to="/students">Our students</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Change students</NavLink>
        </li>
        <li>
          <NavLink to="/">logout</NavLink>
        </li> */
}
