import React, { useRef, useEffect, useState } from 'react';
import { TbCurrencyWon } from 'react-icons/tb';

const locations = [
  {
    id: 1,
    type: 'free',
    latitude: 37.018009,
    longitude: 127.108566,
    title: '당근입니다.',
    description:
      '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
    price: '10,000,000',
    image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
  },
  {
    id: 2,
    type: 'free',
    latitude: 37.02009,
    longitude: 127.4808876,
    title: '제목입니다.',
    description:
      '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
    price: '10,000,000',
    image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
  },
  {
    id: 3,
    type: 'nearby',
    latitude: 37.3180094,
    longitude: 127.8808776,
    title: '제목입니다.',
    description:
      '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
    price: '10,000,000',
    image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
  },
  {
    id: 4,
    type: 'nearby',
    latitude: 37.1180093,
    longitude: 127.2808576,
    title: '제목입니다.',
    description:
      '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
    price: '10,000,000',
    image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
  }
];

interface ILocationData {
  id: number;
  type: string;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const NearByPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isPlaceOpen, setIsPlaceOpen] = useState<boolean>(false);
  const [placeInfo, setPlaceInfo] = useState<ILocationData>();

  const handlePlaceToggle = () => setIsPlaceOpen(!isPlaceOpen);

  useEffect(() => {
    const { naver } = window;

    // 내 위치 정보 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      // 지도상에 내위치 설정
      const location = new naver.maps.LatLng(latitude, longitude);
      const mapOptions = { center: location, zoom: 16 };

      if (mapRef.current) {
        // 지도 연결
        const map = new naver.maps.Map(mapRef.current, mapOptions);
        // 내 위치 마커
        const myLocation = './img/myLocation.png';
        const nearbyLocation = './img/nearbyLocation.png';
        const freeLocation = './img/freeLocation.png';

        new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map,
          icon: {
            content: '<img src="' + myLocation + '" width="32" height="32">'
          }
        });

        // 주변 위치 마커 표시
        const markers: naver.maps.Marker[] = [];
        locations.map((loc) => {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(loc.latitude, loc.longitude),
            map,
            icon: {
              content:
                loc.type === 'free'
                  ? '<img src="' + freeLocation + '" width="32" height="32">'
                  : '<img src="' + nearbyLocation + '" width="32" height="32">'
            }
          });

          // 마커정보 배열에서 관리
          markers.push(marker);
        });

        // 마커 클릭 시 위치 정보 가져오기
        const handleMakerClick = (i: number) => {
          const position = markers[i].getPosition() as naver.maps.LatLng; // 타입 강제 지정
          const lat = position.lat();
          const lng = position.lng();

          locations.forEach((loc) => {
            if (loc.latitude === lat && loc.longitude === lng) {
              return setPlaceInfo(loc);
            }
          });
        };

        markers.map((maker, idx) => {
          naver.maps.Event.addListener(markers[idx], 'click', () => {
            handlePlaceToggle(), handleMakerClick(idx);
          });
        });
      }
    });
  }, [navigator]);

  return (
    <div className='relative w-full h-full overflow-hidden'>
      <div ref={mapRef} className='w-full h-full' />
      {isPlaceOpen && (
        <div
          className='w-full h-full absolute top-0 bg-[#00000034] flex items-end cursor-pointer overflow-hidden'
          onClick={handlePlaceToggle}
        >
          <div
            className='w-full h-80 bg-white rounded-t-lg p-5'
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className='w-full h-40 rounded-lg'
              style={{ background: `url(${placeInfo?.image}) 50% /cover` }}
            />
            <h4 className='h-9 font-semibold mt-2 text-overflow flex items-center'>
              <span
                className={`w-auto font-light text-xs p-1 mr-3 text-white rounded-sm ${
                  placeInfo?.type === 'free' ? 'bg-[#05A33A]' : 'bg-[#FF9E0D]'
                }`}
              >
                {placeInfo?.type === 'free' ? '무료나눔' : '중고 거래'}
              </span>
              {placeInfo?.title}
            </h4>
            <p className='h-8 text-xs my-1 overflow-hidden'>
              {placeInfo?.description}
            </p>
            <span className='font-semibold text-sm text-orange-600 flex items-center'>
              <TbCurrencyWon />
              {placeInfo?.price}원
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NearByPage;
