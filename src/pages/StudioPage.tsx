import TabBar from '../components/common/TabBar';
import { Outlet } from 'react-router-dom';
import { TABS } from '../utils/constants';

const StudioPage: React.FC = () => {
  return (
    <div className='w-full h-[524px]'>
      <TabBar tabs={TABS.STUDIOTABS} />
      <Outlet />
    </div>
  );
};

export default StudioPage;
