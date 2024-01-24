/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Filter({ onFilter }) {
  const category = ['All', 'Sneakers', 'Electronics', 'Beauty'];

  return (
    <div className='flex items-center gap-3 mb-5 lg:mb-9'>
      <h4 className='text-[14px] lg:text-[23px] text-primary font-bold'>
        Filter by category:
      </h4>
      <div className='flex items-center flex-wrap gap-2 lg:gap-4'>
        {category.map((text) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            key={text}
            className='text-white text-[12px] bg-secondary py-1 px-2 rounded-lg lg:text-[23px] lg:py-3 lg:px-5'
            onClick={() => onFilter(text)}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
