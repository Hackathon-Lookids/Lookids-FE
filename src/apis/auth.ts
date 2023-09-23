import { instance } from './instance';

export const authKakaoLogin = async (code: string | null) => {
  try {
    await instance.get(`/api/users/kakao/callback?code=${code}`);
    alert('로그인 성공');
    location.href = '/look/kids';
  } catch (err) {
    alert('로그인 실패');
    location.href = '/login';
    throw err;
  }
};
