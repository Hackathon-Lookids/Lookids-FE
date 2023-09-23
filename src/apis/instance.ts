import axios from 'axios';

export const instance = axios.create({ baseURL: process.env.REACT_APP_SERVER });

instance.interceptors.request.use((res) => {
  //   console.log('res요청 객체:', res);
  if (res.headers === undefined) return res;
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    res.headers.authorization = accessToken;
  }
  return res;
});

instance.interceptors.response.use(
  (res) => {
    // console.log('res 응답받았어용', res);
    if (!res.data.data) return res;
    const { authorization } = res.headers;
    // console.log('authorization:', authorization);
    if (authorization) {
      localStorage.setItem('accessToken', authorization);
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
    // 액세스 토큰 만료 시 재발급
    // if (error === 'TOKEN_ERROR') {
    //     const data = await tokenRefresh();
    //     if (data) {
    //       axios.defaults.headers.common.Access_Token = data;
    //       localStorage.setItem('isLoggedIn', true);
    //     }

    //     // 다시 이전요청 보내는 로직
    //     const originalRequests = config;
    //     const accessToken = axios.defaults.headers.common.Access_Token;
    //     if (accessToken) {
    //       // eslint-disable-next-line no-param-reassign
    //       originalRequests.headers.Access_Token = accessToken;
    //       const redirect = await axios(originalRequests);
    //       return redirect; // 이전 요청 에러 메세지 반환하지 않고, 재요청 성공 메세지 반환 후 함수 끝내기
    //     }
    //   }
  }
);
