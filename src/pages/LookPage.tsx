import { Outlet } from 'react-router-dom';
import TabBar from '../components/common/TabBar';
import { TABS } from '../utils/constants';

const LookPage: React.FC = () => {
  return (
    <div className='w-full h-[524px]'>
      <TabBar tabs={TABS.LOOKTABS} />
      <Outlet />
    </div>
  );
};

export default LookPage;
