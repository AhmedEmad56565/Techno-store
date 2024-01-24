/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function CartCheckout({ showLocation, onShowLocation }) {
  const { itemsPrice, taxPrice, shippingPrice, totalPrice } = useSelector(
    (store) => store.cart
  );

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: '0.8' }}
      className='cart-checkout__container'
    >
      <h4 className='cart-checkout__header'>order summary</h4>

      <div className='cart-checkout__wrapper'>
        <div className='cart-checkout__wrapper-item mb-2 lg:mb-6'>
          <h5>Cart total</h5>
          <p>{itemsPrice} $</p>
        </div>
        <div className='cart-checkout__wrapper-item mb-2 lg:mb-6'>
          <h5>Tax</h5>
          <p>{taxPrice} $</p>
        </div>
        <div className='cart-checkout__wrapper-item pb-2 lg:pb-6'>
          <h5>Delivery</h5>
          <p>{shippingPrice} $</p>
        </div>
      </div>

      <div className='cart-checkout__wrapper-item mt-2 lg:mt-6 mb-10'>
        <h5>Total</h5>
        <p className='text-base lg:text-[32px] font-bold text-primary'>
          {totalPrice} $
        </p>
      </div>

      {!showLocation && (
        <div className='grid place-items-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className='cart-checkout__wrapper-btn'
            onClick={() => onShowLocation()}
          >
            Check out
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
