import React from 'react';
import { getMostPopularKidsLook } from '../apis/lookApi';
import { useQuery } from 'react-query';
import MostPopular from '../components/MostPopular';
import LookPosts from '../components/LookPosts';

export interface IMostPopularData {
  id: number;
  title: string;
  location: string;
  price: string;
}

const LookKidsPage: React.FC = () => {
  const { data } = useQuery<IMostPopularData[]>(
    ['mostPopular'],
    getMostPopularKidsLook
  );

  return (
    <>
      <MostPopular data={data} title='오늘의 키즈룩' />
      <LookPosts data={data} />
    </>
  );
};

export default LookKidsPage;
