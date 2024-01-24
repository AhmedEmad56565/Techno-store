/* eslint-disable react-refresh/only-export-components */
//path: http://localhost:5173/cart

import { useState, useEffect } from 'react';
import { useActionData, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredintials } from '../store/userSlice';
import { resetCart } from '../store/cartSlice';
import { motion } from 'framer-motion';

import { CartItem, CartCheckout, Location, ShowMessage } from '../components';

export default function Cart() {
  //MANAGE SHOW AND HIDE LOCATION COMPONENT
  const [showLocation, setShowLocation] = useState(false);

  //GET OUR CART ITEMS FROM OUR REDUX STORE
  const { cartItems } = useSelector((store) => store.cart);
  //GET CURRENT USER INFORMATION FROM OUR REDUX STORE
  const { userInfo } = useSelector((store) => store.user);

  //GET CURRENT USER INFORMATION AFTER GIVING LOCATION DATA
  const userData = useActionData();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //ADD THE USER CREDINTIALS TO REDUX STORE AFTER GIVING LOCATION DATA
  useEffect(() => {
    if (userData) {
      dispatch(setCredintials(userData));
      //EMPTY OUR CART
      dispatch(resetCart());
      //NAVIGATE TO ORDER PAGE
      navigate('/order');
    }

    if (cartItems.length === 0) {
      setShowLocation(false);
    }
  }, [dispatch, navigate, userData, cartItems.length]);

  //IF USER EXISTS WE EMPTY OUR CART THEN NAVIGATE TO ORDER PAGE, IF NOT WE SHOW LOCATION FORM
  function handleShowLocation() {
    if (userInfo) {
      dispatch(resetCart());
      navigate('/order');
    } else {
      setShowLocation(true);
    }
  }

  return (
    <div className='container'>
      {/* CART HEADER */}
      <h2 className='cart__header'>cart</h2>

      {/* SHOW CART IF ONLY THERE ARE PRODUCTS TO SHOW OTHERWISE SHOW ShowMessage COMPONENT */}
      {cartItems && cartItems.length > 0 ? (
        <div className='cart__container'>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: '0.8' }}
            className='cart__items-wrapper'
          >
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </motion.div>
          <CartCheckout
            showLocation={showLocation}
            onShowLocation={handleShowLocation}
          />
        </div>
      ) : (
        <ShowMessage />
      )}

      {/* ONLY SHOW LOCATION FORM WHEN NO USER EXISTS */}
      {showLocation && <Location />}
    </div>
  );
}

//ACTION FUNCTION TO GET USER INFO AFTER SUBMITTING LOCATION FORM
export async function action({ request }) {
  try {
    const formData = await request.formData();
    const resData = Object.fromEntries(formData);
    return resData;
  } catch (error) {
    return error;
  }
}
