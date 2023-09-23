import React from 'react';
// import { getKidsLookPosts } from '../apis/lookApi';
// import { useQuery } from 'react-query';
// import MostPopular from '../components/MostPopular';
// import LookPosts from '../components/LookPosts';

export interface IMostPopularData {
  id: number;
  title: string;
  location: string;
  price: string;
}

const LookKidsPage: React.FC = () => {
  // const { data } = useQuery<IMostPopularData[]>(
  //   ['mostPopular'],
  //   getKidsLookPosts
  // );

  return (
    <>
      {/* <MostPopular data={data?.mostLikedLooks} title='오늘의 키즈룩' />
      <LookPosts data={data?.randomLooks.content} /> */}
    </>
  );
};

export default LookKidsPage;
