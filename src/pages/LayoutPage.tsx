import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import TabBar from '../components/common/TabBar';
import { PATH_URL } from '../utils/constants';
import { getTabs } from '../utils/getTab';
import PostModal from '../components/PostModal';

const LayoutPage = () => {
  const location = useLocation();
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);

  const postModalOpenHandler = () => {
    setPostModalOpen(!isPostModalOpen);
  };

  return (
    <div className='h-screen flex-all-center'>
      <div className='w-[376px] h-[668px] border border-gray-300 flex flex-col justify-between rounded-md shadow-md overflow-hidden'>
        {isPostModalOpen && <PostModal onClick={postModalOpenHandler} />}
        <Header onClick={postModalOpenHandler} />
        <div className='w-full h-full'>
          {!(
            location.pathname === PATH_URL.TREND ||
            location.pathname === PATH_URL.NEARBY ||
            location.pathname === PATH_URL.DONATE
          ) && <TabBar tabs={getTabs(location.pathname)} />}
          <Outlet />
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default LayoutPage;
