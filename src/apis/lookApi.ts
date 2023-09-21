import { instance } from './instance';

export const getMostPopularKidsLook = async () => {
  try {
    const { data } = await instance.get('/posts');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMostPopularFamilyLook = async () => {
  try {
    const { data } = await instance.get('/posts');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
