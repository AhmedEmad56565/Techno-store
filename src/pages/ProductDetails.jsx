/* eslint-disable react-refresh/only-export-components */
//path: http://localhost:5173/product/:id

import { useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { BsCartPlus } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Rating } from '../components';

export default function ProductDetails() {
  //GET A SINGLE PRODUCT DATA BASED ON ITS (ID)
  const {
    id,
    name,
    image,
    description,
    brand,
    category,
    price,
    rating,
    numReviews,
  } = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //DETAILS HELPRR ARRAY
  const details = [
    { text: 'name:', value: name },
    { text: 'brand:', value: brand },
    { text: 'category:', value: category },
    { text: 'price:', value: `${price} $` },
  ];

  //MANAGE ADDING A PRODUCT TO OUR CART IN REDUX STORE THEN NAVIGATE TO CART PAGE
  function handleAddToCart() {
    const newProduct = { id, name, image, price };
    dispatch(addToCart(newProduct));
    navigate('/cart');
  }

  return (
    <div className='container'>
      <div className='details__wrapper'>
        {/* PRODUCT IMAGE */}
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: '0.8' }}
          src={image}
          alt={name}
          className='details__img'
        />

        {/* PRODUCT DETAILS */}
        <motion.div
          className='details__product-container'
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: '0.8' }}
        >
          {details.map((d) => (
            <div key={d.text} className='details__product-item'>
              <h5 className='product-header'>{d.text}</h5>
              <p className='product-price'>{d.value}</p>
            </div>
          ))}
        </motion.div>

        {/* PRODUCT DESCRIPTION */}
        <motion.div
          className='flex flex-col'
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: '0.8' }}
        >
          <h5 className='product-header mb-1'>description:</h5>
          <p className='product-price mb-5'>- {description}</p>

          <div className='flex-between mb-5'>
            <h5 className='product-header mb-1'>Review:</h5>
            <Rating value={rating} text={`(${numReviews}) review`} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            type='button'
            className='product-cart-button self-end'
            onClick={handleAddToCart}
          >
            <BsCartPlus className='details__icon' />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

//LOADER FUNCTION TO FETCH PRODUCT DATA BASED ON ITS (ID)
export async function loader({ params }) {
  try {
    const response = await fetch(`/api/v1/products/${params.id}`);
    return response;
  } catch (error) {
    return error;
  }
}
