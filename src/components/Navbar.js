import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Profile } from './Profile'; 

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };
  
  const handleSignUp =() =>{
    loginWithRedirect({ screen_hint: 'signup' });
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            My Adventures
            <i class='fa-solid fa-location-dot' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {isAuthenticated ? (
            <>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Noticias
              </Link>
            </li>
            <li className='nav-item'>
            <span className='nav-links' onClick={handleLogout}>
              Cerrar sesión
              <Profile />   
            </span>          
          </li> 
               
        </>
          ) : (
            <><li className='nav-item'>
            <span className='nav-links' onClick={handleLogin}>
              Iniciar sesión
            </span>
          </li><li className='nav-item'>
              <span className='nav-links' onClick={handleSignUp}>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
              </span>
            
            </li></>   
            )}
            {!isAuthenticated && (
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
             
            </li>
             )}
          </ul>
          
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;