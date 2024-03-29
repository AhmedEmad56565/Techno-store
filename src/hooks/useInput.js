import { useState } from 'react';

export default function useInput(validationFunc) {
  const [inputVal, setInputVal] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleInputBlur() {
    setInputTouched(true);
  }

  const inputValIsInvalid = !validationFunc(inputVal);
  const inputIsInvalid = inputTouched && inputValIsInvalid;

  return {
    val: inputVal,
    inputValIsInvalid,
    changeFunc: handleInputChange,
    blurFunc: handleInputBlur,
    err: inputIsInvalid,
  };
}
