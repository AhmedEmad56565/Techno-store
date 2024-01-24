import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import HeaderIcons from './header/HeaderIcons';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <Logo />
        </Link>
        <HeaderIcons />
      </div>
    </header>
  );
}
