import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <div className='navigation__desktop'>
        <ul className='navigation__link-list'>
          <li className='navigation__link-container'>
            <Link className='navigation__link' to='/'>
              Inicio
            </Link>
          </li>
          <li className='navigation__link-container'>
            <Link className='navigation__link' to='/about-me'>
              Acerca de mí
            </Link>
          </li>
          <li className='navigation__link-container'>
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
    </nav>
  );
}
