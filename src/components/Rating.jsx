/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Rating({ value, text }) {
  const dynamicStarsList = [1, 2, 3, 4, 5].map((index) =>
    value >= index ? (
      <span key={index}>
        <FaStar key={'fullStar' + index} className='text-secondary' />
      </span>
    ) : value >= index - 0.5 ? (
      <span key={index}>
        <FaStarHalfAlt key={'halfStar' + index} className='text-secondary' />
      </span>
    ) : (
      <span key={index}>
        <FaRegStar key={'emptyStar' + index} className='text-secondary' />
      </span>
    )
  );

  return (
    <div className='flex items-center gap-1'>
      {dynamicStarsList}
      <span className='text-[9px] lg:text-[12px] text-primary'>{text}</span>
    </div>
  );
}
