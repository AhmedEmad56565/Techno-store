/* eslint-disable react/prop-types */
export default function Input({
  id,
  type,
  placeholder,
  label,
  Wrapper = 'input',
  value,
  onChange,
  onBlur,
  err,
  errText,
}) {
  let inputStyle = err
    ? 'border-2 border-[#B21807] outline-none rounded-sm px-2 py-1'
    : 'border-2 border-text-color outline-none rounded-sm px-2 py-1';

  if (Wrapper === 'textarea') {
    inputStyle = err
      ? 'border-2 border-[#B21807] outline-none rounded-sm px-2 py-1'
      : 'border-2 border-text-color outline-none rounded-sm px-2 py-1 h-20';
  }

  return (
    <div className='flex flex-col space-y-1 mb-4'>
      <label
        htmlFor={id}
        className={
          err
            ? 'text-[#B21807] capitalize lg:text-[23px]'
            : 'text-primary capitalize lg:text-[23px]'
        }
      >
        {label}
      </label>
      <Wrapper
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={inputStyle}
        required
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        err={err.toString()}
      />
      {err && (
        <p className='text-[#B21807] text-[12px] lg:text-sm'>{errText}</p>
      )}
    </div>
  );
}
