import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';

const LayoutPage = () => {
  return (
    <div className='h-screen flex-all-center'>
      <div className='w-[376px] h-[668px] border border-gray-300 flex flex-col justify-between rounded-md shadow-md overflow-hidden'>
        <Header />
        <Outlet />
        <Nav />
      </div>
    </div>
  );
};

export default LayoutPage;
