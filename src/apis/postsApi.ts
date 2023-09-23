import { instance } from './instance';

export const getLookPosts = async (type: string) => {
  try {
    const { data } = await instance.get(`/api/looks?type=${type}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getNearbyPosts = async () => {
  try {
    const { data } = await instance.get('/api/posts');
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
