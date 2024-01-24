import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ShowMessage() {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.8', type: 'spring' }}
      className='xs:max-w-[70%] md:max-w-[60%] mx-auto bg-primary px-4 py-2 lg:px-8 lg:py-5 text-white text-[14px] lg:text-[23px] rounded-lg'
    >
      <p>
        Your cart is empty now, Check our latest products{' '}
        <Link to='/' className='text-secondary hover:underline'>
          here
        </Link>
        .
      </p>
    </motion.div>
  );
}
