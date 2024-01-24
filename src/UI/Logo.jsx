/* eslint-disable react/prop-types */
import logo from '../assets/img/logo.png';

export default function Logo({ footerLogo }) {
  let style =
    'w-[115] h-[34px] xs:w-[165px] xs:h-[47px] md:w-[200px] md:h-[58px] lg:w-[227px] lg:h-[66px]';

  if (footerLogo) {
    style = 'lg:w-[227px] lg:h-[66px]';
  }
  return <img src={logo} alt='techno store logo' className={style} />;
}
