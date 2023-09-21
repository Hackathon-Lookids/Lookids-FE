import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMostPopularData } from '../pages/LookKidsPage';

interface IMostPopularProps {
  data: IMostPopularData[] | undefined;
  title: string;
}

const MostPopular: React.FC<IMostPopularProps> = ({
  data,
  title
}: IMostPopularProps) => {
  const navigator = useNavigate();
  const displaySlide = 3;
  const slideLength = data ? Math.ceil(data.length / displaySlide) : 0;
  const [currentPage, setCurrentPage] = useState<number>(0);

  // PC 슬라이드 드래그 이벤트
  const [startPoint, setStartPoint] = useState<number>(0);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartPoint(e.pageX);
    e.preventDefault();
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startPoint > e.pageX) {
      nextSlide();
    } else if (startPoint < e.pageX) {
      prevSlide();
    }
    e.preventDefault();
  };

  const nextSlide = () => {
    if (currentPage < slideLength - 1) {
      setCurrentPage((page) => page + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <div className='w-full overflow-hidden px-2'>
      <h3 className='font-semibold px-2 pt-1 pb-2'>{title}</h3>
      <div
        className='w-full overflow-hidden'
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      >
        <div
          className={`w-[${
            slideLength * 100
          }%] flex justify-start transition duration-500`}
          style={{
            transform: `translateX(-${currentPage * (100 / slideLength)}%)`
          }}
        >
          {data?.map((post) => (
            <div
              key={post.id}
              className='w-[105px] h-[100px] mx-2 rounded-md bg-slate-400 shadow-sm object-cover cursor-pointer'
              style={{ background: `url(${post.location}) 50% /cover` }}
              onClick={() => navigator('/')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;