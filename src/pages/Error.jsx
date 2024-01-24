import { useRouteError } from 'react-router-dom';
import { NotFound } from '../components';

export default function Error() {
  const error = useRouteError();

  //IF THE ERROR STATUS IS 404, SHOW THE NOT FOUND COMPONENT
  if (error.status === 404) {
    return <NotFound />;
  }

  //IF THE ERROR STATUS IS NOT 404, SHOW CUSTOME ERROR
  return (
    <div className='container error__container'>
      <div className='max-w-full lg:max-w-[60%] text-center'>
        <h3 className='error__header'>Something went wrong</h3>
      </div>
    </div>
  );
}
