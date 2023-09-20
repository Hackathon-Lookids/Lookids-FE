import { getMostPopularLook } from '../apis/lookApi';
import { useQuery } from 'react-query';

interface IMostPopularData {
  id: number;
  title: string;
  location: string;
  price: string;
}

const LookKidsPage = () => {
  const { data } = useQuery<IMostPopularData[]>(
    ['mostPopular'],
    getMostPopularLook
  );

  return (
    <div>{data?.map((post, idx) => <div key={idx}>{post.title}</div>)}</div>
  );
};

export default LookKidsPage;
