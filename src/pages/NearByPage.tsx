import React, { useRef, useEffect, useState } from 'react';
import { TbCurrencyWon } from 'react-icons/tb';
import { useQuery } from 'react-query';
import { getNearbyPosts } from '../apis/postsApi';

// const locations = [
//   {
//     id: 1,
//     type: 'free',
//     latitude: 37.018009,
//     longitude: 127.108566,
//     title: '당근입니다.',
//     description:
//       '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
//     price: '10,000,000',
//     image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
//   },
//   {
//     id: 2,
//     type: 'free',
//     latitude: 37.02009,
//     longitude: 127.4808876,
//     title: '제목입니다.',
//     description:
//       '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
//     price: '10,000,000',
//     image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
//   },
//   {
//     id: 3,
//     type: 'nearby',
//     latitude: 37.3180094,
//     longitude: 127.8808776,
//     title: '제목입니다.',
//     description:
//       '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
//     price: '10,000,000',
//     image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
//   },
//   {
//     id: 4,
//     type: 'nearby',
//     latitude: 37.1180093,
//     longitude: 127.2808576,
//     title: '제목입니다.',
//     description:
//       '당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요당근사세요당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요.당근사세요',
//     price: '10,000,000',
//     image: 'https://src.hidoc.co.kr/image/lib/2021/9/3/1630652987056_0.jpg'
//   }
// ];

// interface ILocationData {
//   id: number;
//   type: string;
//   latitude: number;
//   longitude: number;
//   title: string;
//   description: string;
//   price: string;
//   image: string;
// }

interface INearbyData {
  postType: string;
  imageUrls: [string];
  title: string;
  content: string;
  nickname: string;
  location: string;
  price: string;
}

const NearByPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isPlaceOpen, setIsPlaceOpen] = useState<boolean>(false);
  const [placeInfo, setPlaceInfo] = useState<INearbyData>();

  const { data: nearbyData } = useQuery<INearbyData[] | undefined>(
    ['nearbyPosts'],
    getNearbyPosts
  );

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
        const tradeLocation = './img/tradeLocation.png';
        const giveawayLocation = './img/giveawayLocation.png';

        new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map,
          icon: {
            content: '<img src="' + myLocation + '" width="32" height="32">'
          }
        });

        // 주변 위치 마커 표시
        const markers: naver.maps.Marker[] = [];
        nearbyData?.map((loc) => {
          const { location } = loc;
          const sliceIdx = location.indexOf('/');
          const lat = Number(location.slice(0, sliceIdx));
          const lng = Number(location.slice(sliceIdx + 1, location.length - 1));

          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(lat, lng),
            map,
            icon: {
              content:
                loc.postType === 'GIVEAWAY'
                  ? '<img src="' +
                    giveawayLocation +
                    '" width="32" height="32">'
                  : '<img src="' + tradeLocation + '" width="32" height="32">'
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

          nearbyData?.forEach((loc) => {
            const { location } = loc;
            const sliceIdx = location.indexOf('/');
            const nearbyLat = Number(location.slice(0, sliceIdx));
            const nearbyLng = Number(
              location.slice(sliceIdx + 1, location.length - 1)
            );
            if (nearbyLat === lat && nearbyLng === lng) {
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
              style={{ background: `url(${placeInfo?.imageUrls}) 50% /cover` }}
            />
            <h4 className='h-9 font-semibold mt-2 text-overflow flex items-center'>
              <span
                className={`w-auto font-light text-xs p-1 mr-3 text-white rounded-sm ${
                  placeInfo?.postType === 'free'
                    ? 'bg-[#05A33A]'
                    : 'bg-[#FF9E0D]'
                }`}
              >
                {placeInfo?.postType === 'free' ? '무료나눔' : '중고 거래'}
              </span>
              {placeInfo?.title}
            </h4>
            <p className='h-8 text-xs my-1 overflow-hidden'>
              {placeInfo?.content}
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
