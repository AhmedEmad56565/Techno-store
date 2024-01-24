import Logo from '../UI/Logo';
import { mail, phone, twitter, facebook, instagram } from '../assets/svg';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className='footer'>
      <Logo footerLogo />

      <div className='footer__links mb-6 mt-5'>
        <img src={mail} alt='mail svg' />
        <p className='footer__links__text'>email@gmail.com</p>
      </div>
      <div className='footer__links mb-10'>
        <img src={phone} alt='phone svg' />
        <p className='footer__links__text'>+125 699 9171</p>
      </div>

      <div className='footer__media__links'>
        <motion.a href='https://twitter.com/' whileHover={{ scale: 1.08 }}>
          <img src={twitter} alt='twitter' />
        </motion.a>
        <motion.a href='https://facebook.com/' whileHover={{ scale: 1.08 }}>
          <img src={facebook} alt='facebook' />
        </motion.a>
        <motion.a href='https://instagram.com/' whileHover={{ scale: 1.08 }}>
          <img src={instagram} alt='instagram' />
        </motion.a>
      </div>
    </footer>
  );
}
