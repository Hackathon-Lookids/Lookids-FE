import React, { useEffect } from 'react';
import LoadingSpinner from '../assets/loadingSpinner.gif';
import { authKakaoLogin } from '../apis/auth';

const KakaoRedirect: React.FC = () => {
  const redirectCode = new URL(window.location.href).searchParams.get('code');

  const handleLogin = () => {
    authKakaoLogin(redirectCode);
  };

  useEffect(() => {
    if (redirectCode) {
      handleLogin();
    }
  });

  return (
    <div className='h-full flex-all-center'>
      <img src={LoadingSpinner} alt='loading-spinner' />
    </div>
  );
};

export default KakaoRedirect;
