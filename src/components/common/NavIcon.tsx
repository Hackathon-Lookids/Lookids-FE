import { useNavigate } from 'react-router-dom';

const NavIcon = ({
  children,
  label,
  path
}: {
  children: React.ReactNode;
  label: string;
  path: string;
}) => {
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
