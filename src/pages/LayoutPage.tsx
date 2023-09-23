import React, { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import TabBar from '../components/common/TabBar';
import { PATH_URL } from '../utils/constants';
import { getTabs } from '../utils/getTab';
import PostModal from '../components/PostModal';

const LayoutPage: React.FC = () => {
  const location = useLocation();
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);

  const postModalOpenHandler = () => {
    setPostModalOpen(!isPostModalOpen);
  };

  return (
    <div className='h-screen flex-all-center'>
      <div className='w-full h-full sm:w-[376px] sm:h-[668px] sm:border border-gray-300 flex flex-col justify-between rounded-md shadow-md overflow-hidden'>
        {isPostModalOpen && <PostModal onClick={postModalOpenHandler} />}
        <Header onClick={postModalOpenHandler} />
        {(location.pathname === PATH_URL.LOOK.KIDS ||
          location.pathname === PATH_URL.LOOK.FAMILY ||
          location.pathname === PATH_URL.STUDIO.RENT ||
          location.pathname === PATH_URL.STUDIO.MODEL) && (
          <TabBar tabs={getTabs(location.pathname)} />
        )}
        <div className='w-full h-[524px] overflow-y-auto'>
          <Outlet />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default LayoutPage;
