import { useNavigate, useLocation } from 'react-router-dom';
import { ItabType } from './TabBar';

const Tab: React.FC<ItabType> = ({ label, path }: ItabType) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={`w-1/2 h-12 font-semibold font-notoSansKr ${
        location.pathname === path && 'border-b-2 border-black'
      }`}
      onClick={() => navigate(path)}
    >
      {label}
    </button>
  );
};

export default Tab;
