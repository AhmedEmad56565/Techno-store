//path: http://localhost:5173/order

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import deliveredImg from '../assets/img/delivery.png';

export default function Order() {
  //GET CURRENT USER INFORMATION FROM OUR REDUX STORE
  const { userInfo } = useSelector((store) => store.user);

  const navigate = useNavigate();

  //PROTECT THIS ROUTE FROM UNAUTHED USERS
  useEffect(() => {
    if (!userInfo) {
      navigate('/cart');
    }
  }, [navigate, userInfo]);

  return (
    <div className='container'>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: '0.8', type: 'spring' }}
        className='order__wrapper'
      >
        <div className='order__box'>
          <h4 className='order__box-header'>
            Your order is on its way:{'  '}
            <span className='font-black'>{userInfo?.fullName}</span>
          </h4>
          <p className='order__box-text'>Thank you for contacting with us</p>
          <img
            src={deliveredImg}
            alt='delivery img'
            className='order__box-img'
          />
        </div>
      </motion.div>
    </div>
  );
}
