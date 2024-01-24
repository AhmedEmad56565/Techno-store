/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from '../store/cartSlice';

import { minus, plus, trash } from '../assets/svg';
import { motion } from 'framer-motion';

export default function CartItem({
  product: { id, name, image, price, quantity },
}) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newProduct = { id, name, image, price };
    dispatch(addToCart(newProduct));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(id));
  }

  function handleRemoveItemFromCart() {
    dispatch(removeItemFromCart(id));
  }

  return (
    <motion.div layout className='cart-item__container'>
      <img src={image} alt={name} className='cart-item__img' />

      <div className='cart-item__wrapper'>
        <div className='lg:h-full'>
          <Link to={`/product/${id}`}>
            <h3 className='cart-item__header'>{name}</h3>
          </Link>
          <p className='product-price'>{price} $</p>
        </div>

        <div className='flex space-x-2'>
          <div className='cart-item__check'>
            <div className='cart-item__check-item'>
              <motion.button
                onClick={handleRemoveFromCart}
                whileTap={{ scale: 0.92 }}
              >
                <img
                  src={minus}
                  alt='minus svg'
                  className='w-[8px] lg:w-auto'
                />
              </motion.button>
              <p className='cart-item__check-quantity'>{quantity}</p>
              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.92 }}
              >
                <img src={plus} alt='plus svg' className='w-[8px] lg:w-auto' />
              </motion.button>
            </div>
          </div>

          <motion.button
            onClick={handleRemoveItemFromCart}
            whileTap={{ scale: 0.92 }}
          >
            <img src={trash} alt='trash svg' className='h-[22px] lg:h-auto' />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
