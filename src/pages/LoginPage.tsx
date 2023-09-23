import React from 'react';
import { PATH_URL, KAKAO_AUTH_URI } from '../utils/constants';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#222] flex-all-center '>
      <div className='flex flex-col justify-center items-center mb-10'>
        <img src='./img/lookidsLogo.jpg' />
        <Link to={KAKAO_AUTH_URI}>
          <img src='./img/kakao.png' />
        </Link>
        <Link
          to={PATH_URL.LOOK.KIDS}
          className='mt-4 text-white text-sm underline'
        >
          둘러보기
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
