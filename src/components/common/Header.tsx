import { useLocation } from 'react-router-dom';
import { headerTitle } from '../../utils/headerTitle';
import { IoAddOutline } from 'react-icons/io5';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className='h-16 flex justify-between items-center px-5 border-b shadow-sm'>
      <h1 className='text-xl font-bold'>{headerTitle(location.pathname)}</h1>
      <button className='w-7 h-7 flex-all-center border border-black rounded-md'>
        <IoAddOutline />
      </button>
    </header>
  );
};

export default Header;
