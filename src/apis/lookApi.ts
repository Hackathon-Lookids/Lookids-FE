import { instance } from './instance';

export const getMostPopularKidsLook = async () => {
  try {
    const { data } = await instance.get('/api/looks/');
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

export const getKidsLookPosts = async () => {
  try {
    const { data } = await instance.get('/api/looks?type=KIDS');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFamilyLookPosts = async () => {
  try {
    const { data } = await instance.get('/api/looks?type=FAMILY');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
