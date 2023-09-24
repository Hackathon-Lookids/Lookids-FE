import React from 'react';
import { getLookPosts } from '../apis/postsApis';
import { useQuery } from 'react-query';
import MostPopular from '../components/MostPopular';
import LookPosts from '../components/LookPosts';
// "data": {
//   "mostLikedLooks": [],
//   "randomLooks": {
//       "content": [],
//       "pageable": {
//           "pageNumber": 0,
//           "pageSize": 10,
//           "sort": {
//               "empty": true,
//               "sorted": false,
//               "unsorted": true
//           },
//           "offset": 0,
//           "paged": true,
//           "unpaged": false
//       },
//       "size": 10,
//       "number": 0,
//       "sort": {
//           "empty": true,
//           "sorted": false,
//           "unsorted": true
//       },
//       "numberOfElements": 0,
//       "first": true,
//       "last": true,
//       "empty": true
//   }
// }

const LookKidsPage: React.FC = () => {
  const { data } = useQuery(['lookKidsPosts'], () => getLookPosts('KIDS'));

  return (
    <>
      <MostPopular data={data?.data.mostLikedLooks} title='오늘의 키즈룩' />
      <LookPosts data={data?.data.randomLooks?.content} />
    </>
  );
};

export default LookKidsPage;
