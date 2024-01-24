import { Form } from 'react-router-dom';
import Input from '../UI/Input';
import useInput from '../hooks/useInput';
import { motion } from 'framer-motion';

export default function Location() {
  const {
    val: nameVal,
    inputValIsInvalid: nameValIsInvalid,
    changeFunc: handleNameChange,
    blurFunc: handleNameBlur,
    err: nameError,
  } = useInput((val) => val.length > 6);

  const {
    val: phoneVal,
    inputValIsInvalid: phoneValIsInvalid,
    changeFunc: handlePhoneChange,
    blurFunc: handlePhoneBlur,
    err: phoneError,
  } = useInput((val) => val.match(/^[0][1-9]\d{9}$|^[1-9]\d{9}$/g));

  const {
    val: addressVal,
    inputValIsInvalid: addressValIsInvalid,
    changeFunc: handleAddressChange,
    blurFunc: handleAddressBlur,
    err: addressError,
  } = useInput((val) => val.length > 9);

  const formIsInValid =
    nameValIsInvalid || phoneValIsInvalid || addressValIsInvalid;

  return (
    <motion.div
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.5' }}
      className=' lg:max-w-[543px] mx-auto mt-20'
    >
      <h2 className='headers-style text-primary my-4 xs:my-8 lg:my-[46px]'>
        Location
      </h2>

      <Form method='POST'>
        <Input
          id='fullName'
          type='text'
          placeholder='Name'
          label='full name'
          value={nameVal}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          err={nameError}
          errText='full name field must be at least 7 charachters long!'
        />

        <Input
          id='phone'
          type='number'
          placeholder='Phone'
          label='phone number'
          value={phoneVal}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          err={phoneError}
          errText='please enter a correct phone number!'
        />

        <Input
          id='address'
          type='text'
          placeholder='Address'
          label='address'
          Wrapper='textarea'
          value={addressVal}
          onChange={handleAddressChange}
          onBlur={handleAddressBlur}
          err={addressError}
          errText='Address fileld must be at least 10 characters long!'
        />

        <div className='grid place-items-center'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 500 }}
            type='submit'
            className='location__btn'
            disabled={formIsInValid}
          >
            Confirm Payment
          </motion.button>
        </div>
      </Form>
    </motion.div>
  );
}
