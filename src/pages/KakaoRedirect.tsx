import React from 'react';
import LoadingSpinner from '../assets/loadingSpinner.gif';
import { useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { authKakaoLogin } from '../apis/auth';

const KakaoRedirect: React.FC = () => {
  const navigate = useNavigate();
  const redirectCode = new URL(window.location.href).searchParams.get('code');

  useQuery(
    'kakaoAuth',
    async () => {
      const result = await authKakaoLogin(redirectCode);
      return result;
    },
    {
      onSuccess: () => {
        alert('로그인 성공');
        navigate('/main');
      },
      onError: () => {
        alert('로그인 실패');
        navigate('/login');
      }
    }
  );

  return (
    <div className='h-full flex-all-center'>
      <img src={LoadingSpinner} alt='loading-spinner' />
    </div>
  );
};

export default KakaoRedirect;
