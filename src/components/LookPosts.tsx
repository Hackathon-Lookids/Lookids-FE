import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IImages {
  imageUrls: string;
}

export interface ILookPostsData {
  lookType: string;
  imageUrls: string[];
  title: string;
  content: string;
  nickname: string;
  likeCount: 0;
  likeStatus: true;
}

export interface ILookPostsProps {
  data: ILookPostsData[];
}

const LookPosts: React.FC<ILookPostsProps> = ({
  data: lookPostsData
}: ILookPostsProps) => {
  const navigator = useNavigate();

  return (
    <div className='grid-gap2 px-3 py-4 shadow-sm'>
      {lookPostsData?.map((post, idx) => (
        <div
          key={idx}
          className='w-[100%] h-[246px] mb-0.5 rounded-md shadow-sm object-cover cursor-pointer border'
          style={{
            background: `no-repeat center/100% url(${post.imageUrls[idx]})`
          }}
          onClick={() => navigator('/look/kids')}
        />
      ))}
    </div>
  );
};

export default LookPosts;
