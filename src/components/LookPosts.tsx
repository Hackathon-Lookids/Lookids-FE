import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMostPopularData } from '../pages/LookKidsPage';

export interface ILookPostsProps {
  data: IMostPopularData[] | undefined;
}

const LookPosts: React.FC<ILookPostsProps> = ({ data }: ILookPostsProps) => {
  const navigator = useNavigate();

  return (
    <div className='grid-gap2 px-3 py-4 shadow-sm'>
      {data?.map((post) => (
        <div
          key={post.id}
          className='w-[100%] h-[246px] mb-0.5 rounded-md shadow-sm object-cover cursor-pointer'
          style={{ background: `url(${post.location}) 50% /cover` }}
          onClick={() => navigator('/look/kids')}
        />
      ))}
    </div>
  );
};

export default LookPosts;
