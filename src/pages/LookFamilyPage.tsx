import React from 'react';
import { getMostPopularFamilyLook } from '../apis/lookApi';
import { useQuery } from 'react-query';
import MostPopular from '../components/MostPopular';
import LookPosts from '../components/LookPosts';
import { IMostPopularData } from './LookKidsPage';

const LookFamilyPage: React.FC = () => {
  const { data } = useQuery<IMostPopularData[]>(
    ['mostPopular'],
    getMostPopularFamilyLook
  );

  return (
    <>
      <MostPopular data={data} title='오늘의 패밀리룩' />
      <LookPosts data={data} />
    </>
  );
};

export default LookFamilyPage;
