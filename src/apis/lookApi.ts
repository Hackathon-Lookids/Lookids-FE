import { instance } from './instance';

export const getMostPopularLook = async () => {
  try {
    const { data } = await instance.get('/posts');
    console.log(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
