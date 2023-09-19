import { IoGlasses, IoLogoYoutube } from 'react-icons/io5';
import { IoIosPin } from 'react-icons/io';
import { GiFilmProjector } from 'react-icons/gi';
import { FaTshirt } from 'react-icons/fa';
import NavIcon from './NavIcon';

const Nav = () => {
  return (
    <div className='h-16 px-5 flex justify-between bg-[#222]'>
      <NavIcon label='룩' path='/look/kids'>
        <IoGlasses />
      </NavIcon>
      <NavIcon label='트렌드' path='/trend'>
        <IoLogoYoutube />
      </NavIcon>
      <NavIcon label='내주변' path='/nearby'>
        <IoIosPin />
      </NavIcon>
      <NavIcon label='스튜디오' path='/studio/rent'>
        <GiFilmProjector />
      </NavIcon>
      <NavIcon label='나눔' path='/donate'>
        <FaTshirt />
      </NavIcon>
    </div>
  );
};

export default Nav;
