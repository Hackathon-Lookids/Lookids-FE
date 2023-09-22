import { instance } from './instance';

export const authKakaoLogin = async (code: string | null) => {
  try {
    await instance.get(`/oauth/kakao?code=${code}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
