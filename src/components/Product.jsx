/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { motion } from 'framer-motion';

import heartSvg from '../assets/img/heart.svg';
import { BsCartPlus } from 'react-icons/bs';

export default function Product({ product: { id, name, image, price } }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    const newProduct = { id, name, image, price };
    dispatch(addToCart(newProduct));
    navigate('/cart');
  }

  return (
    <motion.div layout whileHover={{ scale: 1.05 }}>
      <Link to={`product/${id}`}>
        <div className='relative max-h-[210px]'>
          <img
            src={image}
            alt={name}
            className='w-full object-cover rounded-t-lg'
          />
          <div className='product-image-icon'>
            <img src={heartSvg} alt='heart svg' />
          </div>
        </div>
      </Link>

      <div className='product-details-container'>
        <Link to={`product/${id}`}>
          <h3 className='product-header text-text-color hover:underline'>
            {name}
          </h3>
        </Link>
        <p className='product-price'>{price} $</p>

        <div className='flex justify-end items-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            type='button'
            className='product-cart-button'
            onClick={handleAddToCart}
          >
            <BsCartPlus className='text-base lg:text-[35px] text-white' />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
