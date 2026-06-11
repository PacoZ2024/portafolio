import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <Link className='header__logo' to='/'>
            Francisco Zepeda
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
