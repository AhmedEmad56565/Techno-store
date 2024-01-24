import { shipping, delivering, payment, deals } from '../assets/svg';

export default function SubHeader() {
  const details = [
    { text: 'Shipping', icon: shipping },
    { text: 'Delivering', icon: delivering },
    { text: 'Payment', icon: payment },
    { text: 'Best Deals', icon: deals },
  ];

  return (
    <div className='sub-header'>
      <div className='container sub-header__wrapper'>
        {details.map((d) => (
          <div key={d.text} className='sub-header__item'>
            <img src={d.icon} alt={d.text} className='h-4 md:h-auto' />
            <p className='sub-header__text'>{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
