import { Link } from 'react-router-dom';
import notFound from '../assets/img/not-found.svg';

export default function NotFound() {
  return (
    <div className='container error__container'>
      <div className='error__wrapper'>
        <img src={notFound} alt='not found' />
        <h3 className='error__header'>Ohh! Page Not Found</h3>
        <p className='text-primary'>
          we can&apos;t seem to find the page you are looking for
        </p>
        <Link to='/' className=''>
          Back Home
        </Link>
      </div>
    </div>
  );
}
