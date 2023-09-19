import { useNavigate } from 'react-router-dom';

interface INavProps {
  children: React.ReactNode;
  label: string;
  path: string;
}

const NavIcon: React.FC<INavProps> = ({ children, label, path }: INavProps) => {
  const navigate = useNavigate();

  return (
    <button
      className='flex flex-col justify-center items-center text-white'
      onClick={() => navigate(path)}
    >
      <div className='w-7 h-7 text-3xl'>{children}</div>
      <span className='text-[10px] pt-1'>{label}</span>
    </button>
  );
};

export default NavIcon;
