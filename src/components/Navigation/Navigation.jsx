import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [toggledIsOpen, setToggledIsOpen] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef(null);

  function closeToggled() {
    setToggledIsOpen(false);
  }

  useEffect(() => {
    function handleOverlayClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setToggledIsOpen(false);
      }
    }

    if (toggledIsOpen) {
      document.addEventListener('mousedown', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [toggledIsOpen]);

  return (
    <nav>
      <div className='navigation__desktop'>
        <ul className='navigation__link-list'>
          <li
            className={`navigation__link-container ${location.pathname === '/' ? 'navigation__link-container-active' : ''}`}
          >
            <Link className='navigation__link' to='/'>
              Inicio
            </Link>
          </li>
          <li
            className={`navigation__link-container ${location.pathname === '/about-me' ? 'navigation__link-container-active' : ''}`}
          >
            <Link className='navigation__link' to='/about-me'>
              Acerca de mí
            </Link>
          </li>
          <li
            className={`navigation__link-container ${location.pathname === '/projects' ? 'navigation__link-container-active' : ''}`}
          >
            <Link className='navigation__link' to='/projects'>
              Mis proyectos
            </Link>
          </li>
          <li className='navigation__link-container'>
            <a className='navigation__link' href='#footer'>
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <div className='navigation__mobile' ref={wrapperRef}>
        <Hamburger
          size='24'
          toggled={toggledIsOpen}
          toggle={setToggledIsOpen}
        />
        {toggledIsOpen && (
          <ul className='navigation__menu-hamburger'>
            <li>
              <Link className='navigation__link' to='/' onClick={closeToggled}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className='navigation__link'
                to='/about-me'
                onClick={closeToggled}
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                className='navigation__link'
                to='/projects'
                onClick={closeToggled}
              >
                Mis proyectos
              </Link>
            </li>
            <li>
              <a
                className='navigation__link'
                href='#footer'
                onClick={closeToggled}
              >
                Contacto
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
