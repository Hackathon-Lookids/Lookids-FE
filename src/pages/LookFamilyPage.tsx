import React from 'react';
import { getLookPosts } from '../apis/postsApi';
import { useQuery } from 'react-query';
import MostPopular from '../components/MostPopular';
import LookPosts from '../components/LookPosts';

const LookFamilyPage: React.FC = () => {
  const { data } = useQuery(['lookFamilyPosts'], () => getLookPosts('FAMILY'));

  return (
    <>
      <MostPopular data={data?.data.mostLikedLooks} title='오늘의 패밀리룩' />
      <LookPosts data={data?.data.randomLooks?.content} />
    </>
  );
};

export default LookFamilyPage;
