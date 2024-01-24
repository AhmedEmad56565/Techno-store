import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeaderIcons() {
  const { totalQuantity } = useSelector((store) => store.cart);
  const { userInfo } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div className='flex justify-end items-center'>
      <FaHeart className='header__icon cursor-pointer' />

      <Link to='/cart' className='flex items-center'>
        <FaShoppingCart className='header__icon ml-2 sm:ml-3' />
        {totalQuantity && totalQuantity > 0 ? (
          <span className='header__badge'>{totalQuantity}</span>
        ) : null}
      </Link>

      {userInfo && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          className='header__logout-btn'
          onClick={handleLogout}
        >
          logout
        </motion.button>
      )}
    </div>
  );
}
